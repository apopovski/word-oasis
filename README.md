# Word Oasis setup for email and Google Sheets logging

This site can still work as a fully local browser-only Bible Q&A page. To also email newly submitted questions and save them to a Google Sheet, connect the form to a lightweight Google Apps Script endpoint.

## 1) Create the Google Apps Script

1. Open https://script.google.com/
2. Create a new project.
3. Replace the default code with the contents of `google-apps-script.js` in this folder.
4. Save the project.
5. In the Apps Script editor, click Deploy > New deployment.
6. Choose Web app.
7. Set the access to "Anyone" or "Anyone with a Google account" depending on your needs.
8. Copy the web app URL.

## 2) Add the web app URL to the site

Open `index.html` and update the config values near the top:

```html
<script>
  window.WORD_OASIS_FORM_ENDPOINT = "https://script.google.com/macros/s/your-script-id/exec";
  window.WORD_OASIS_FORM_EMAIL_TO = "hello@example.com";
</script>
```

The form will submit the question, topic, email, and timestamp to that endpoint. The script then sends an email and appends the data to the spreadsheet you configure.

## 3) Configure Google Sheet and email

In the Google Apps Script project, set these script properties:

- `SHEET_ID` = the spreadsheet ID from the Google Sheet URL
- `SHEET_NAME` = the worksheet name (for example, `Questions`)
- `EMAIL_TO` = the inbox that should receive the notification email

You can add them in Apps Script by going to Project settings > Script properties or by editing the script and replacing the default values.

## 4) Test it

- Submit a question in the site form.
- Confirm the row appears in the Google Sheet.
- Confirm the email notification arrives in the target inbox.

## Notes

- If the form endpoint is left blank, the site remains browser-only and still searches the local answer library.
- This is the simplest no-backend option for a static website.
