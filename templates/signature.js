const params = new URLSearchParams(window.location.search);
const categoryKey = params.get("category") || "cafe";
const selected = categoryData[categoryKey] || categoryData.cafe;
const typeMap = {
  salon: "salon",
  cafe: "cafe",
  clinic: "house",
  retail: "burger",
  coaching: "house",
  services: "car"
};
const theme = window.layerPresets[typeMap[categoryKey] || "cafe"];
const phoneDigits = selected.phone.replace(/\D/g, "");
const categoryOffers = {
  salon: [
    ["Bridal Trial Week", "Book a trial session and adjust the final bridal look before the event.", "Limited slots"],
    ["Hair Spa Combo", "Hair spa with wash, blow dry and consultation for damaged hair.", "Save 20%"],
    ["Glow Package", "Cleanup, detan and face massage for party-ready skin.", "From ₹1,499"]
  ],
  cafe: [
    ["Coffee + Dessert", "Any cold coffee with brownie sundae for two.", "₹499"],
    ["Weekend Brunch", "Cafe platter, drink and dessert combo for dine-in guests.", "₹399"],
    ["Student Hour", "Show student ID for weekday beverage offers.", "15% off"]
  ],
  clinic: [
    ["Family Checkup", "Basic consultation and vitals check for two family members.", "This week"],
    ["Health Screening", "Blood tests, BP check and report review appointment.", "From ₹1,499"],
    ["Follow-up Slot", "Priority follow-up booking for existing patients.", "Available"]
  ],
  retail: [
    ["New Arrivals", "Fresh seasonal collection with WhatsApp catalogue support.", "Just in"],
    ["Festival Bundle", "Pair clothing and accessories for a complete occasion look.", "Up to 30% off"],
    ["Gift Picks", "Curated accessories and gifting items ready for pickup.", "From ₹299"]
  ],
  coaching: [
    ["Free Demo Class", "Attend one demo lecture before choosing the batch.", "Book now"],
    ["Board Prep Batch", "Focused revision, tests and doubt-solving for exam season.", "Limited seats"],
    ["Parent Review", "Monthly progress update and study plan discussion.", "Included"]
  ],
  services: [
    ["Same-day Visit", "Fast callback for urgent plumbing, AC and cleaning enquiries.", "Available"],
    ["AC Service Combo", "Inspection, filter cleaning and performance check.", "From ₹699"],
    ["Deep Clean Slot", "Kitchen, bathroom and sofa deep-cleaning appointments.", "Weekend slots"]
  ]
};

const business = {
  name: `Signature ${selected.category}`,
  tagline: `A premium animated website for ${selected.category.toLowerCase()} enquiries.`,
  about: `This reusable signature template is tailored for ${selected.category.toLowerCase()} businesses. It includes a memorable icon opening, service details, gallery, reviews, offers, Google Maps and WhatsApp actions.`,
  phone: selected.phone,
  whatsapp: selected.phone,
  instagram: "https://instagram.com/",
  email: "hello@launchlocal.studio",
  address: selected.city,
  mapQuery: selected.city,
  services: selected.services,
  gallery: selected.gallery,
  offers: categoryOffers[categoryKey] || categoryOffers.cafe,
  reviews: selected.reviews.map((review, index) => [review, `Customer ${index + 1}`])
};

document.body.classList.add(theme.className);
const setText = (id, value) => { const node = document.querySelector(`#${id}`); if (node) node.textContent = value; };
const setLink = (id, href) => { const node = document.querySelector(`#${id}`); if (node) node.href = href; };
const cards = (target, items, className) => {
  document.querySelector(target).innerHTML = items.map((item, index) => `<article class="${className}" style="transition-delay:${index * 55}ms"><h3>${item[0]}</h3><p>${item[1]}</p><strong>${item[2]}</strong></article>`).join("");
};
const gallery = () => {
  document.querySelector("#galleryGrid").innerHTML = business.gallery.map((src, index) => `<img src="${src}" alt="${business.name} gallery image ${index + 1}">`).join("");
};
function renderLayerStage() {
  const restPositions = [-78, -42, -13, 18, 48, 78];
  document.querySelector("#layerStage").innerHTML = theme.layers.map((layer, index) => {
    const [shape, part, section, href, x, y, r] = layer;
    return `<span class="object-layer ${shape}" style="--rest-y:${restPositions[index]}px; --x:${x}px; --y:${y}px; --r:${r}deg; --z:${120 - index * 10}px; --delay:${index * 55}ms"><span class="object-shape"></span><em class="layer-label">${section}</em></span>`;
  }).join("");
}
function renderLayerNav() {
  document.querySelector("#layerNav").innerHTML = theme.layers.map(layer => {
    const [shape, part, section, href] = layer;
    return `<a class="layer-nav-card" href="${href}"><small>${part}</small><strong>${section}</strong></a>`;
  }).join("");
}
function hydrateSignature() {
  document.title = `${business.name} | LaunchLocal Studio`;
  setText("introType", theme.label);
  setText("introName", business.name);
  setText("introTagline", business.tagline);
  setText("brandIcon", theme.icon);
  setText("brandName", business.name);
  setText("heroTitle", `${selected.category} website that opens with a memorable animated moment.`);
  setText("heroCopy", business.about);
  setText("aboutCopy", business.about);
  setText("miniName", business.name);
  setText("miniTagline", business.tagline);
  setText("contactAddress", `${business.address}. Replace with the real address, contact details and Google Maps listing.`);
  setLink("phoneLink", `tel:${business.phone}`);
  setLink("whatsappLink", `https://wa.me/${phoneDigits}`);
  setLink("whatsappHero", `https://wa.me/${phoneDigits}`);
  setLink("floatWhatsapp", `https://wa.me/${phoneDigits}`);
  setLink("mapsLink", `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapQuery)}`);
  setLink("instagramLink", business.instagram);
  setLink("emailLink", `mailto:${business.email}`);
  cards("#servicesGrid", business.services, "card");
  cards("#offerGrid", business.offers, "offer-card");
  cards("#reviewGrid", business.reviews, "review-card");
  gallery();
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
  }, 920);
}
hydrateSignature();
document.querySelector("#iconTrigger").addEventListener("click", openExperience);
