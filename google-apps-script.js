/**
 * Word Oasis question form endpoint (Google Apps Script).
 *
 * Deploy: Extensions > Apps Script > Deploy > New deployment > Web app
 *   - Execute as: Me
 *   - Who has access: Anyone
 * Re-deploy after every edit, then copy the /exec URL into
 * window.WORD_OASIS_FORM_ENDPOINT in index.html.
 *
 * ContentService cannot set custom response headers, so CORS headers cannot be
 * added here. Anonymous web apps already return Access-Control-Allow-Origin: *,
 * and the client posts as text/plain so the browser never sends a preflight.
 */

var HEADER_ROW = [
  'Timestamp',
  'Question',
  'Topic',
  'Email',
  'Gender',
  'Location',
  'Age',
  'Faith Background',
  'Source',
  'Related Matches',
  'Submitted From'
];

var REFERRAL_HEADER_ROW = [
  'Timestamp',
  'Name',
  'Email',
  'Age Range',
  'Gender',
  'Country',
  'Faith Background',
  'Source Answer ID',
  'Source Answer',
  'Source URL',
  'Destination URL',
  'Consent',
  'Status'
];

var ANALYTICS_HEADER_ROW = [
  'Timestamp',
  'Visitor Hash',
  'Answer ID',
  'Answer Title',
  'Answer URL'
];

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function ensureHeaderRow(sheet, headerRow) {
  var lastColumn = sheet.getLastColumn();
  var existing =
    lastColumn > 0 ? sheet.getRange(1, 1, 1, lastColumn).getValues()[0] : [];

  if (String(existing[0] || '').trim() === headerRow[0]) {
    if (existing.length < headerRow.length) {
      sheet
        .getRange(1, 1, 1, headerRow.length)
        .setValues([headerRow])
        .setFontWeight('bold');
    }
    return;
  }

  if (sheet.getLastRow() > 0) {
    sheet.insertRowBefore(1);
  }

  sheet
    .getRange(1, 1, 1, headerRow.length)
    .setValues([headerRow])
    .setFontWeight('bold');
  sheet.setFrozenRows(1);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function safeSheetValue(value) {
  var text = String(value);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function analyticsVisitorHash(visitorToken) {
  var properties = PropertiesService.getScriptProperties();
  var salt =
    properties.getProperty('ANALYTICS_SALT') ||
    ScriptApp.getScriptId();
  var digest = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    salt + ':' + visitorToken,
    Utilities.Charset.UTF_8
  );
  return digest
    .map(function (byte) {
      var value = byte < 0 ? byte + 256 : byte;
      return ('0' + value.toString(16)).slice(-2);
    })
    .join('');
}

function handleArticleView(payload) {
  var answerId = String(payload.answerId || '').trim();
  var answerTitle = String(payload.answerTitle || '').trim().slice(0, 180);
  var answerUrl = String(payload.answerUrl || '').trim().slice(0, 300);
  var visitorToken = String(payload.visitorToken || '').trim().slice(0, 120);
  var viewedAt = payload.viewedAt || new Date().toISOString();

  if (
    !/^answer-[a-z0-9-]+$/.test(answerId) ||
    !answerTitle ||
    !/^https:\/\/wordoasis\.org\/answers\/[a-z0-9-]+\/$/.test(answerUrl)
  ) {
    return jsonResponse({ success: false, error: 'Invalid article view.' });
  }

  var properties = PropertiesService.getScriptProperties();
  var sheetId = properties.getProperty('SHEET_ID');
  if (!sheetId) {
    return jsonResponse({
      success: false,
      error: 'Analytics spreadsheet is not configured.'
    });
  }

  try {
    var spreadsheet = SpreadsheetApp.openById(sheetId);
    var sheetName =
      properties.getProperty('ANALYTICS_SHEET_NAME') || 'Article Analytics';
    var sheet =
      spreadsheet.getSheetByName(sheetName) ||
      spreadsheet.insertSheet(sheetName);
    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      ensureHeaderRow(sheet, ANALYTICS_HEADER_ROW);
      sheet.appendRow([
        safeSheetValue(viewedAt),
        visitorToken ? analyticsVisitorHash(visitorToken) : '',
        safeSheetValue(answerId),
        safeSheetValue(answerTitle),
        safeSheetValue(answerUrl)
      ]);
      CacheService.getScriptCache().remove('public-article-stats');
    } finally {
      lock.releaseLock();
    }
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({
      success: false,
      error: 'Article view logging failed: ' + error
    });
  }
}

function publicArticleStats(answerId) {
  var cache = CacheService.getScriptCache();
  var cached = cache.get('public-article-stats');
  var stats;

  if (cached) {
    stats = JSON.parse(cached);
  } else {
    var properties = PropertiesService.getScriptProperties();
    var sheetId = properties.getProperty('SHEET_ID');
    var sheetName =
      properties.getProperty('ANALYTICS_SHEET_NAME') || 'Article Analytics';
    var articles = {};
    var allReaders = {};

    if (sheetId) {
      var spreadsheet = SpreadsheetApp.openById(sheetId);
      var sheet = spreadsheet.getSheetByName(sheetName);
      if (sheet && sheet.getLastRow() > 1) {
        var rows = sheet
          .getRange(2, 1, sheet.getLastRow() - 1, ANALYTICS_HEADER_ROW.length)
          .getValues();
        rows.forEach(function (row) {
          var visitorHash = String(row[1] || '');
          var id = String(row[2] || '');
          var title = String(row[3] || '');
          var url = String(row[4] || '');
          if (!/^answer-[a-z0-9-]+$/.test(id) || !title || !url) {
            return;
          }
          if (!articles[id]) {
            articles[id] = {
              id: id,
              title: title,
              url: url,
              views: 0,
              readerHashes: {}
            };
          }
          articles[id].views += 1;
          if (visitorHash) {
            articles[id].readerHashes[visitorHash] = true;
            allReaders[visitorHash] = true;
          }
        });
      }
    }

    var publicArticles = Object.keys(articles).map(function (id) {
      var article = articles[id];
      return {
        id: article.id,
        title: article.title,
        url: article.url,
        views: article.views,
        readers: Object.keys(article.readerHashes).length
      };
    });
    publicArticles.sort(function (first, second) {
      return (
        second.views - first.views ||
        second.readers - first.readers ||
        first.title.localeCompare(second.title)
      );
    });
    stats = {
      totalViews: publicArticles.reduce(function (sum, article) {
        return sum + article.views;
      }, 0),
      totalReaders: Object.keys(allReaders).length,
      articles: publicArticles,
      topArticles: publicArticles.slice(0, 6)
    };
    cache.put('public-article-stats', JSON.stringify(stats), 300);
  }

  var selectedArticle = null;
  if (answerId) {
    selectedArticle =
      stats.articles.filter(function (article) {
        return article.id === answerId;
      })[0] || null;
  }

  return jsonResponse({
    success: true,
    totalViews: stats.totalViews,
    totalReaders: stats.totalReaders,
    article: selectedArticle,
    topArticles: stats.topArticles
  });
}

function handleBibleStudyReferral(payload) {
  var name = String(payload.name || '').trim();
  var email = String(payload.email || '').trim();
  var consent = payload.consent === true;

  if (!name || !email || !consent) {
    return jsonResponse({
      success: false,
      error: 'Name, email, and consent are required.'
    });
  }

  var submittedAt = payload.submittedAt || new Date().toISOString();
  var ageRange = String(payload.ageRange || '').trim();
  var gender = String(payload.gender || '').trim();
  var country = String(payload.country || '').trim();
  var faith = String(payload.faith || '').trim();
  var sourceAnswerId = String(payload.sourceAnswerId || '').trim();
  var sourceAnswerTitle = String(payload.sourceAnswerTitle || '').trim();
  var sourceUrl = String(payload.sourceUrl || '').trim();
  var destinationUrl = String(payload.destinationUrl || '').trim();
  var properties = PropertiesService.getScriptProperties();
  var sheetId = properties.getProperty('SHEET_ID');
  var referralSheetName =
    properties.getProperty('REFERRAL_SHEET_NAME') || 'Bible Study Referrals';
  var emailTo =
    properties.getProperty('EMAIL_TO') ||
    String(payload.notificationEmail || '').trim() ||
    'wordoasis7@gmail.com';
  var spreadsheetLogged = false;
  var emailSent = false;
  var warnings = [];

  if (sheetId) {
    try {
      var spreadsheet = SpreadsheetApp.openById(sheetId);
      var sheet =
        spreadsheet.getSheetByName(referralSheetName) ||
        spreadsheet.insertSheet(referralSheetName);

      ensureHeaderRow(sheet, REFERRAL_HEADER_ROW);
      sheet.appendRow([
        safeSheetValue(submittedAt),
        safeSheetValue(name),
        safeSheetValue(email),
        safeSheetValue(ageRange || 'Not provided'),
        safeSheetValue(gender || 'Not provided'),
        safeSheetValue(country || 'Not provided'),
        safeSheetValue(faith || 'Not provided'),
        safeSheetValue(sourceAnswerId),
        safeSheetValue(sourceAnswerTitle),
        safeSheetValue(sourceUrl),
        safeSheetValue(destinationUrl),
        'Yes',
        'Referred to Amazing Facts'
      ]);
      spreadsheetLogged = true;
    } catch (sheetError) {
      warnings.push('Referral spreadsheet logging failed: ' + sheetError);
    }
  }

  if (emailTo) {
    try {
      var rows = [
        ['Name', name],
        ['Email', email],
        ['Age range', ageRange || 'Not provided'],
        ['Gender', gender || 'Not provided'],
        ['Country', country || 'Not provided'],
        ['Faith background', faith || 'Not provided'],
        ['Source answer', sourceAnswerTitle || sourceAnswerId],
        ['Source URL', sourceUrl],
        ['Destination', destinationUrl],
        ['Submitted at', submittedAt],
        ['Status', 'Referred to Amazing Facts']
      ];
      var body =
        '<p>A visitor requested to continue to the Amazing Facts Bible Study Guides.</p>' +
        '<table cellpadding="6" style="border-collapse:collapse">' +
        rows
          .map(function (row) {
            return (
              '<tr><td style="border:1px solid #ddd"><strong>' +
              escapeHtml(row[0]) +
              '</strong></td><td style="border:1px solid #ddd">' +
              escapeHtml(row[1]) +
              '</td></tr>'
            );
          })
          .join('') +
        '</table>';

      MailApp.sendEmail({
        to: emailTo,
        subject: 'New Bible study referral: ' + name,
        htmlBody: body,
        replyTo: email
      });
      emailSent = true;
    } catch (mailError) {
      warnings.push('Referral email delivery failed: ' + mailError);
    }
  }

  if (!spreadsheetLogged && !emailSent) {
    return jsonResponse({
      success: false,
      error: warnings.join(' | ') || 'The referral was not recorded.'
    });
  }

  return jsonResponse({
    success: true,
    referralLogged: spreadsheetLogged,
    emailSent: emailSent,
    warnings: warnings
  });
}

function doPost(e) {
  try {
    var raw = e && e.postData && e.postData.contents ? e.postData.contents : '{}';
    var payload = JSON.parse(raw);

    if (payload.eventType === 'bible-study-referral') {
      return handleBibleStudyReferral(payload);
    }
    if (payload.eventType === 'article-view') {
      return handleArticleView(payload);
    }

    var question = String(payload.question || '').trim();
    if (!question) {
      return jsonResponse({ success: false, error: 'Missing question' });
    }

    var topic = String(payload.topic || 'General').trim();
    var email = String(payload.email || '').trim();
    var gender = String(payload.gender || '').trim();
    var location = String(payload.location || '').trim();
    var age = payload.age === 0 || payload.age ? String(payload.age).trim() : '';
    var faith = String(payload.faith || '').trim();
    var submittedAt = payload.submittedAt || new Date().toISOString();
    var source = payload.source || 'word-oasis';
    var relatedMatches = Array.isArray(payload.relatedMatches)
      ? payload.relatedMatches
      : [];
    var notificationEmail = String(payload.notificationEmail || '').trim();

    var properties = PropertiesService.getScriptProperties();
    var sheetId = properties.getProperty('SHEET_ID');
    var sheetName = properties.getProperty('SHEET_NAME') || 'Questions';
    var emailTo =
      properties.getProperty('EMAIL_TO') ||
      notificationEmail ||
      'wordoasis7@gmail.com';

    var spreadsheetLogged = false;
    var warnings = [];

    if (sheetId) {
      try {
        var spreadsheet = SpreadsheetApp.openById(sheetId);
        var sheet =
          spreadsheet.getSheetByName(sheetName) || spreadsheet.getSheets()[0];

        if (!sheet) {
          throw new Error('No sheet found in the target spreadsheet.');
        }

        ensureHeaderRow(sheet, HEADER_ROW);
        sheet.appendRow([
          safeSheetValue(submittedAt),
          safeSheetValue(question),
          safeSheetValue(topic),
          safeSheetValue(email || 'Not provided'),
          safeSheetValue(gender || 'Not provided'),
          safeSheetValue(location || 'Not provided'),
          safeSheetValue(age || 'Not provided'),
          safeSheetValue(faith || 'Not provided'),
          safeSheetValue(source),
          safeSheetValue(relatedMatches.join(' | ')),
          'Word Oasis site'
        ]);
        spreadsheetLogged = true;
      } catch (sheetError) {
        warnings.push('Spreadsheet logging failed: ' + sheetError);
      }
    }

    var emailSent = false;

    if (emailTo) {
      try {
        var rows = [
          ['Question', question],
          ['Topic', topic],
          ['Email', email || 'Not provided'],
          ['Gender', gender || 'Not provided'],
          ['Location', location || 'Not provided'],
          ['Age', age || 'Not provided'],
          ['Faith background', faith || 'Not provided'],
          ['Submitted at', submittedAt],
          [
            'Related matches',
            relatedMatches.length ? relatedMatches.join(', ') : 'None'
          ]
        ];

        var body =
          '<p>A new Bible question was submitted through Word Oasis.</p>' +
          '<table cellpadding="6" style="border-collapse:collapse">' +
          rows
            .map(function (row) {
              return (
                '<tr><td style="border:1px solid #ddd"><strong>' +
                escapeHtml(row[0]) +
                '</strong></td><td style="border:1px solid #ddd">' +
                escapeHtml(row[1]) +
                '</td></tr>'
              );
            })
            .join('') +
          '</table>';

        MailApp.sendEmail({
          to: emailTo,
          subject: 'New Bible question: ' + topic,
          htmlBody: body,
          replyTo: email || undefined
        });
        emailSent = true;
      } catch (mailError) {
        warnings.push('Email delivery failed: ' + mailError);
      }
    }

    if (!spreadsheetLogged && !emailSent) {
      return jsonResponse({
        success: false,
        error: warnings.join(' | ') || 'Nothing was logged or emailed.'
      });
    }

    return jsonResponse({
      success: true,
      spreadsheetLogged: spreadsheetLogged,
      emailSent: emailSent,
      warnings: warnings
    });
  } catch (error) {
    return jsonResponse({ success: false, error: String(error) });
  }
}

function doGet(e) {
  var action =
    e && e.parameter && e.parameter.action
      ? String(e.parameter.action)
      : '';
  if (action === 'public-stats') {
    return publicArticleStats(
      e && e.parameter ? String(e.parameter.answerId || '') : ''
    );
  }
  return jsonResponse({ ok: true, message: 'Word Oasis form endpoint is ready.' });
}
