# LaunchLocal Studio

A static GitHub Pages website for a small-business website studio.

## What is included

- A polished landing page for selling small-business website packages.
- A template gallery for cafe, service, and retail websites.
- A quote request form with dynamic pricing guidance.
- A no-backend fallback that opens an email draft.
- Static HTML, CSS, and JavaScript that can run directly on GitHub Pages.

## Quote form setup

GitHub Pages cannot process form submissions by itself. Use a hosted form endpoint such as Formspree, Getform, Basin, or a custom serverless function.

In `index.html`, find:

```html
<form class="quote-form" id="quoteForm" action="" method="post">
```

Replace the empty `action` with your endpoint:

```html
<form class="quote-form" id="quoteForm" action="https://formspree.io/f/YOUR_FORM_ID" method="post">
```

In `script.js`, replace `you@example.com` with your email address for the fallback mail draft.

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
