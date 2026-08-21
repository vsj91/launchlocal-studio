# LaunchLocal Studio

A static GitHub Pages website for selling complete local-business websites in India.

## What is included

- A polished landing page for a ₹6,999 complete website offer.
- Template categories for salons, cafes, clinics, retail shops, tutors, and home services.
- INR pricing with ₹2,499/year renewal.
- A request form that opens an email draft with the lead details.
- Static HTML, CSS, and JavaScript that can run directly on GitHub Pages.

## Lead form setup

GitHub Pages cannot process form submissions by itself. The current form uses a `mailto:` fallback in `script.js`.

In `script.js`, replace:

```js
hello@launchlocal.studio
```

with the real email address that should receive enquiries.

For a more reliable production form, use a hosted form endpoint such as Formspree, Getform, Basin, or a custom serverless function. In `index.html`, set the form `action`:

```html
<form class="quote-form" id="quoteForm" action="https://formspree.io/f/YOUR_FORM_ID" method="post">
```

## Publish with GitHub Pages

1. In GitHub, open `Settings` > `Pages`.
2. Set the source to `Deploy from a branch`.
3. Choose the `main` branch and `/root`.
4. Save, then wait for GitHub Pages to publish the site.

## Local preview

Open `index.html` in a browser, or run a simple local server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
