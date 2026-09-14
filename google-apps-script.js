function jsonResponse(payload) {
  const output = ContentService.createTextOutput(JSON.stringify(payload));
  output.setMimeType(ContentService.MimeType.JSON);
  output.setHeader('Access-Control-Allow-Origin', '*');
  output.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  output.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
  return output;
}

function doOptions() {
  const output = ContentService.createTextOutput('');
  output.setHeader('Access-Control-Allow-Origin', '*');
  output.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  output.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
  return output;
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData && e.postData.contents ? e.postData.contents : '{}');
    const question = String(payload.question || '').trim();
    const topic = String(payload.topic || 'General').trim();
    const email = String(payload.email || '').trim();
    const submittedAt = payload.submittedAt || new Date().toISOString();
    const source = payload.source || 'word-oasis';
    const relatedMatches = Array.isArray(payload.relatedMatches) ? payload.relatedMatches : [];
    const notificationEmail = String(payload.notificationEmail || '').trim();

    if (!question) {
      return jsonResponse({ success: false, error: 'Missing question' });
    }

    const sheetId = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
    const sheetName = PropertiesService.getScriptProperties().getProperty('SHEET_NAME') || 'Questions';
    const emailTo = PropertiesService.getScriptProperties().getProperty('EMAIL_TO') || notificationEmail || 'wordoasis7@gmail.com';

    let spreadsheetLogged = false;

    if (sheetId) {
      const spreadsheet = SpreadsheetApp.openById(sheetId);
      let sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.getSheets()[0];

      if (!sheet) {
        throw new Error('No spreadsheet sheet found for storing submissions.');
      }

      const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      const needsHeaderRow = headers.length === 0 || headers[0] !== 'Timestamp';

      if (needsHeaderRow) {
        sheet.insertRowBefore(1);
        sheet.getRange(1, 1, 1, 7).setValues([
          ['Timestamp', 'Question', 'Topic', 'Email', 'Source', 'Related Matches', 'Submitted From']
        ]);
      }

      const row = [
        submittedAt,
        question,
        topic,
        email || 'Not provided',
        source,
        relatedMatches.join(' | '),
        'Word Oasis site'
      ];

      sheet.appendRow(row);
      spreadsheetLogged = true;
    }

    if (emailTo) {
      const subject = `New Bible question: ${topic}`;
      const body = `
        <p>A new Bible question was submitted through Word Oasis.</p>
        <p><strong>Question:</strong> ${question}</p>
        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Submitted at:</strong> ${submittedAt}</p>
        <p><strong>Related matches:</strong> ${relatedMatches.length ? relatedMatches.join(', ') : 'None'}</p>
      `;

      MailApp.sendEmail({
        to: emailTo,
        subject,
        htmlBody: body
      });
    }

    return jsonResponse({
      success: true,
      message: spreadsheetLogged ? 'Question logged successfully' : 'Question emailed successfully; spreadsheet logging is not configured yet.',
      spreadsheetLogged
    });
  } catch (error) {
    return jsonResponse({ success: false, error: error.toString() });
  }
}

function doGet() {
  return jsonResponse({ ok: true, message: 'Word Oasis form endpoint is ready.' });
}
