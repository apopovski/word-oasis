# Word Oasis setup for email and Google Sheets logging

This site can still work as a fully local browser-only Bible Q&A page. To also email newly submitted questions and save them to a Google Sheet, connect the form to a lightweight Google Apps Script endpoint.

## 1) Create the Google Apps Script

1. Open https://script.google.com/
2. Create a new project.
3. Replace the default code with the contents of `google-apps-script.js` in this folder.
4. Save the project.
5. In the Apps Script editor, click Deploy > New deployment.
6. Choose Web app.
7. Set **Execute as** to "Me" and **Who has access** to **"Anyone"**.
8. Copy the web app URL (it ends in `/exec`).

> **"Anyone with a Google account" will not work.** The site posts from a
> browser with no Google session, so anything other than "Anyone" makes Google
> return a sign-in page instead of running the script, and the submission fails.

> **Re-deploy after every code change.** Editing and saving the script in the
> editor does not update the live web app. Use Deploy > Manage deployments >
> edit (pencil) > Version: New version > Deploy. The `/exec` URL stays the same.

## 2) Add the web app URL to the site

Open `index.html` and update the config values near the top:

```html
<script>
  window.WORD_OASIS_FORM_ENDPOINT = "https://script.google.com/macros/s/your-script-id/exec";
  window.WORD_OASIS_FORM_EMAIL_TO = "hello@example.com";
</script>
```

The form submits the question, topic, email, gender, location, age, faith
background, timestamp, and related matches to that endpoint. The script then
sends an email and appends the data to the spreadsheet you configure.

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

## Troubleshooting

**"Your question was found locally, but the email/spreadsheet log could not be
sent right now."**

The browser could not reach the endpoint. Open the browser console for the real
cause; it is almost always one of these:

- *A CORS error mentioning no `Access-Control-Allow-Origin` header.* The Apps
  Script threw an error, and Google's error page carries no CORS headers. Visit
  the `/exec` URL directly in a browser tab to read the actual script error.
- *A sign-in page is returned.* The deployment's access is not set to "Anyone".
- *The deployed code is stale.* Re-deploy as a new version (see step 1).

To check the endpoint independently of the site:

```bash
curl -L -X POST "https://script.google.com/macros/s/YOUR_ID/exec" \
  -H "Content-Type: text/plain;charset=utf-8" \
  --data '{"question":"test","topic":"General"}'
```

A healthy endpoint returns JSON such as `{"success":true,...}`. Anything else
(HTML, a sign-in page, an error trace) explains the failure.

## Notes

- If the form endpoint is left blank, the site remains browser-only and still searches the local answer library.
- This is the simplest no-backend option for a static website.
- The form posts with `Content-Type: text/plain` on purpose. That keeps it a
  "simple" CORS request, so the browser skips the preflight `OPTIONS` call that
  Apps Script cannot answer. The script still parses the body as JSON.
- Apps Script's `ContentService` cannot set custom response headers, so the
  script must not call `setHeader`. Doing so throws and breaks every request.

# SEO: keeping content crawlable

The Bible Q&A library, topic filters, and question-form topic list in
`script.js` are rendered into the DOM at runtime. So that search engines and
AI crawlers that do not execute JavaScript still see the full content, a
build step (`scripts/prerender.js`) runs the site's own script inside a real
DOM (via jsdom) and bakes the resulting markup into `index.html`, between
`<!-- prerender:* -->` marker comments. It also regenerates the `FAQPage`
JSON-LD block in `<head>` from the same answer data.

**Whenever you add, edit, or remove a Bible Q&A entry in `script.js`,
re-run the prerender step and commit the updated `index.html`:**

```bash
npm install   # first time only, installs jsdom as a dev dependency
npm run prerender
```

This is safe to run repeatedly — it fully regenerates the static content
between the markers each time, and `script.js` re-renders the identical
markup on page load, so nothing changes for visitors.

