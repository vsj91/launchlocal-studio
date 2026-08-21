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
const themeMap = {
  burger: { icon: "🍔", label: "Restaurant / Retail", className: "type-burger" },
  car: { icon: "🚗", label: "Automobile / Services", className: "type-car" },
  house: { icon: "🏠", label: "Local business", className: "type-house" },
  salon: { icon: "✂️", label: "Salon", className: "type-salon" },
  cafe: { icon: "☕", label: "Cafe", className: "type-cafe" }
};
const theme = themeMap[typeMap[categoryKey] || "cafe"];
const phoneDigits = selected.phone.replace(/\D/g, "");

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
  offers: [
    ["Complete Website", ".com domain, hosting, WhatsApp, Google Maps and setup.", "₹6,999"],
    ["Annual Renewal", "Domain, hosting and basic website maintenance.", "₹2,499/year"],
    ["Sample Preview", "See the look before the final customer website is built.", "Free"]
  ],
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
function hydrateSignature() {
  document.title = `${business.name} | LaunchLocal Studio`;
  setText("introType", theme.label);
  setText("introName", business.name);
  setText("introTagline", business.tagline);
  setText("businessIcon", theme.icon);
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
hydrateSignature();
document.querySelector("#iconTrigger").addEventListener("click", openExperience);
