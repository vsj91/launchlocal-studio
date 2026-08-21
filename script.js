const business = {
  name: "LaunchLocal Studio",
  type: "burger",
  tagline: "Made Fresh. Made Different.",
  phone: "+919999999999",
  whatsapp: "+919999999999",
  instagram: "https://instagram.com/",
  email: "hello@launchlocal.studio",
  address: "India",
  mapQuery: "India",
  heroTitle: "A burger-inspired website experience where every layer opens a business section.",
  heroCopy: "The top bun, lettuce, tomato, cheese, patty and bottom bun split apart into About, Menu, Offers, Best Sellers, Reviews and Contact. The same system can later power cars, houses, coffee cups and salon concepts.",
  about: "LaunchLocal Studio creates complete websites for local businesses with domain, hosting, WhatsApp, Google Maps and basic SEO setup. This animated template is built to feel memorable without becoming slow or heavy.",
  services: [
    ["Complete Website", "Single-page premium website with sections for about, services, gallery, offers, reviews and contact.", "₹6,999"],
    ["Domain + Hosting", ".com domain, fast static hosting and full setup handled for the client.", "Included"],
    ["WhatsApp Leads", "Floating WhatsApp button, call links and contact CTAs built for mobile users.", "Included"],
    ["Google Presence", "Google Maps button, SEO-ready headings, metadata and local business sections.", "Included"],
    ["Template Options", "Five polished options for every business category with reusable content blocks.", "30 options"],
    ["Annual Care", "Domain, hosting and basic website maintenance after the first year.", "₹2,499/year"]
  ],
  gallery: [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
  ],
  offers: [
    ["Launch Package", "Complete website with .com domain, hosting, WhatsApp, Google Maps and basic SEO.", "₹6,999"],
    ["Sample First", "Show a sample website before finalizing the customer details.", "Free preview"],
    ["Renewal Plan", "Domain, hosting and basic maintenance from second year onward.", "₹2,499/year"]
  ],
  reviews: [
    ["The animated opening makes the site feel far more expensive than a normal local-business page.", "Cafe owner"],
    ["The WhatsApp and Google Maps actions are exactly what small businesses need.", "Salon owner"],
    ["Easy to customize, fast to host and visually impressive on mobile.", "Local service provider"]
  ]
};

const templateCategories = [
  ["salon", "Salon & Spa", ["Signature Salon", "Elegant Beauty Studio", "Classic Parlour", "Bold Bridal Salon", "Minimal Spa"]],
  ["cafe", "Cafe & Restaurant", ["Signature Cafe", "Elegant Bistro", "Classic Restaurant", "Bold Food Brand", "Minimal Coffee Bar"]],
  ["clinic", "Clinic & Wellness", ["Signature Clinic", "Elegant Wellness", "Classic Doctor", "Bold Dental Care", "Minimal Therapy"]],
  ["retail", "Retail Shop", ["Signature Store", "Elegant Boutique", "Classic Local Shop", "Bold Fashion", "Minimal Catalogue"]],
  ["coaching", "Tuition & Coaching", ["Signature Coaching", "Elegant Academy", "Classic Tuition", "Bold Exam Prep", "Minimal Tutor"]],
  ["services", "Home Services", ["Signature Services", "Elegant Cleaning", "Classic Repair", "Bold Contractor", "Minimal Maintenance"]]
];

const styles = ["signature", "elegant", "classic", "bold", "minimal"];
const theme = window.layerPresets[business.type] || window.layerPresets.burger;
const phoneDigits = business.whatsapp.replace(/\D/g, "");

document.body.classList.add(theme.className);

function setText(id, value) {
  const node = document.querySelector(`#${id}`);
  if (node) node.textContent = value;
}

function setLink(id, href) {
  const node = document.querySelector(`#${id}`);
  if (node) node.href = href;
}

function renderCards(target, items, className) {
  document.querySelector(target).innerHTML = items.map((item, index) => `
    <article class="${className}" style="transition-delay:${index * 55}ms">
      <h3>${item[0]}</h3>
      <p>${item[1]}</p>
      <strong>${item[2]}</strong>
    </article>
  `).join("");
}

function renderTemplates() {
  document.querySelector("#categoryLibrary").innerHTML = templateCategories.map(([key, label, options]) => `
    <article class="category-card">
      <h3>${label}</h3>
      <p>Choose from five reusable template directions for this category.</p>
      <div class="category-options">
        ${options.map((option, index) => {
          const style = styles[index];
          const href = index === 0
            ? `templates/signature.html?category=${key}`
            : `templates/preview.html?category=${key}&style=${style}`;
          return `<a href="${href}">${option}</a>`;
        }).join("")}
      </div>
    </article>
  `).join("");
}

function renderGallery() {
  document.querySelector("#galleryGrid").innerHTML = business.gallery.map((src, index) => (
    `<img src="${src}" alt="${business.name} gallery image ${index + 1}">`
  )).join("");
}

function renderLayerStage() {
  const restPositions = [-78, -42, -13, 18, 48, 78];
  document.querySelector("#layerStage").innerHTML = theme.layers.map((layer, index) => {
    const [shape, part, section, href, x, y, r] = layer;
    return `
      <span class="object-layer ${shape}" style="--rest-y:${restPositions[index]}px; --x:${x}px; --y:${y}px; --r:${r}deg; --z:${120 - index * 10}px; --delay:${index * 55}ms">
        <span class="object-shape"></span>
        <em class="layer-label">${section}</em>
      </span>
    `;
  }).join("");
}

function renderLayerNav() {
  document.querySelector("#layerNav").innerHTML = theme.layers.map(layer => {
    const [shape, part, section, href] = layer;
    return `<a class="layer-nav-card" href="${href}"><small>${part}</small><strong>${section}</strong></a>`;
  }).join("");
}

function hydrate() {
  setText("introType", theme.label);
  setText("introName", business.name);
  setText("introTagline", business.tagline);
  setText("brandIcon", theme.icon);
  setText("brandName", business.name);
  setText("heroTitle", business.heroTitle);
  setText("heroCopy", business.heroCopy);
  setText("aboutCopy", business.about);
  setText("miniName", business.name);
  setText("miniTagline", business.tagline);
  setText("contactAddress", `${business.address}. Complete setup with phone, WhatsApp, Maps, Instagram and email links.`);

  setLink("phoneLink", `tel:${business.phone}`);
  setLink("whatsappLink", `https://wa.me/${phoneDigits}`);
  setLink("whatsappHero", `https://wa.me/${phoneDigits}`);
  setLink("floatWhatsapp", `https://wa.me/${phoneDigits}`);
  setLink("mapsLink", `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapQuery || business.address)}`);
  setLink("instagramLink", business.instagram);
  setLink("emailLink", `mailto:${business.email}`);

  renderCards("#servicesGrid", business.services, "card");
  renderCards("#offerGrid", business.offers, "offer-card");
  renderCards("#reviewGrid", business.reviews, "review-card");
  renderGallery();
  renderTemplates();
  renderLayerStage();
  renderLayerNav();
}

function openExperience() {
  if (document.body.classList.contains("open")) return;
  document.body.classList.add("opening");
  window.setTimeout(() => {
    document.body.classList.add("open");
    document.body.classList.remove("opening");
    document.querySelector("#content").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 760);
}

hydrate();
document.querySelector("#iconTrigger").addEventListener("click", openExperience);
document.querySelector("#iconTrigger").addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") openExperience();
});
