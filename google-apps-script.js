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

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function ensureHeaderRow(sheet) {
  var lastColumn = sheet.getLastColumn();
  var existing =
    lastColumn > 0 ? sheet.getRange(1, 1, 1, lastColumn).getValues()[0] : [];

  if (String(existing[0] || '').trim() === HEADER_ROW[0]) {
    if (existing.length < HEADER_ROW.length) {
      sheet
        .getRange(1, 1, 1, HEADER_ROW.length)
        .setValues([HEADER_ROW])
        .setFontWeight('bold');
    }
    return;
  }

  if (sheet.getLastRow() > 0) {
    sheet.insertRowBefore(1);
  }

  sheet
    .getRange(1, 1, 1, HEADER_ROW.length)
    .setValues([HEADER_ROW])
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

function doPost(e) {
  try {
    var raw = e && e.postData && e.postData.contents ? e.postData.contents : '{}';
    var payload = JSON.parse(raw);

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

        ensureHeaderRow(sheet);
        sheet.appendRow([
          submittedAt,
          question,
          topic,
          email || 'Not provided',
          gender || 'Not provided',
          location || 'Not provided',
          age || 'Not provided',
          faith || 'Not provided',
          source,
          relatedMatches.join(' | '),
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

function doGet() {
  return jsonResponse({ ok: true, message: 'Word Oasis form endpoint is ready.' });
}
