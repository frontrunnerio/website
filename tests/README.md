# Website browser checks

Build the site and run the Astro preview before testing:

```sh
npm run build
npm run preview -- --host 127.0.0.1 --port 4322
```

In a second terminal, use an available Playwright installation and Google Chrome:

```sh
BASE_URL=http://127.0.0.1:4322 \
PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs \
node tests/website.browser.mjs
```

Omit `PLAYWRIGHT_MODULE` when Playwright is installed in the project. No browser
testing package is included in the website's production bundle.

The suite checks six viewport widths, navigation, FAQs, topic selection, email
encoding, clipboard copying, absence of free text in analytics events, English
navigation and the no-JavaScript contact fallback. Email links are intercepted:
no email is sent. Screenshots are written to `/tmp/frontrunner-v2-*.png`.

The contact flow prepares an email, not a server-side submission. Analytics
events named `consultation_email_open` and `consultation_copy` measure intent,
not delivered leads. Validate event reception in the deployed Vercel project
before using them for conversion reporting.
