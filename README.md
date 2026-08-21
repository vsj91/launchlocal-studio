# LaunchLocal Studio

A static GitHub Pages website for selling complete local-business websites in India.

## What is included

- A polished landing page for a ₹6,999 complete website offer.
- Template categories for salons, cafes, clinics, retail shops, tutors, and home services.
- Five clickable template options for each business category.
- Rich production-style preview pages with hero, services, gallery, reviews, map and CTA sections.
- A premium animated Signature template where the icon opens the full website experience.
- INR pricing with ₹2,499/year renewal.
- A request form that opens an email draft with the lead details.
- Static HTML, CSS, and JavaScript that can run directly on GitHub Pages.

## Reusable animated template

The homepage and `templates/signature.html` use a single JavaScript configuration object for business details.

In `script.js`, change:

```js
const business = {
  name: "LaunchLocal Studio",
  type: "cafe",
  tagline: "Premium websites that open with a moment customers remember.",
  phone: "+919999999999",
  whatsapp: "+919999999999"
};
```

Supported icon/theme types:

- `burger`
- `car`
- `house`
- `salon`
- `cafe`

The homepage currently uses the `burger` type. The burger is built from separate HTML/CSS layers:

- Top bun → About
- Lettuce → Menu / Services
- Tomato → Offers
- Cheese → Best Sellers / Templates
- Patty → Reviews
- Bottom bun → Contact

When tapped or clicked, those layers separate with a 3D floating motion and become clickable navigation cards. The same system is reused by `templates/signature.html`, where each business category selects a matching object style:

- Cafe / restaurant → coffee cup or burger-style food theme
- Salon → scissors
- Home services / automobile → car
- Clinic / coaching / real estate-style businesses → house

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
