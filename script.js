const quoteForm = document.querySelector("#quoteForm");
const pagesSelect = document.querySelector("#pages");
const estimate = document.querySelector("#estimate");
const formNote = document.querySelector("#formNote");

const ranges = {
  standard: "₹6,999",
  "one-page": "₹6,999",
  catalog: "₹6,999+",
  custom: "Custom quote"
};

function updateEstimate() {
  estimate.textContent = ranges[pagesSelect.value] || ranges[5];
}

function buildMailto(formData) {
  const features = formData.getAll("features").join(", ") || "None selected";
  const subject = `Sample website request from ${formData.get("business") || "a local business"}`;
  const body = [
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Business: ${formData.get("business")}`,
    `Business type: ${formData.get("business_type")}`,
    `Template: ${formData.get("template")}`,
    `Website type: ${formData.get("pages")}`,
    `Timeline: ${formData.get("timeline")}`,
    `Features: ${features}`,
    "",
    "Project details:",
    formData.get("details") || "No details added."
  ].join("\n");

  return `mailto:hello@launchlocal.studio?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

pagesSelect.addEventListener("change", updateEstimate);

quoteForm.addEventListener("submit", event => {
  if (quoteForm.getAttribute("action")) {
    return;
  }

  event.preventDefault();
  const formData = new FormData(quoteForm);
  formNote.textContent = "Opening your email app with the request details.";
  window.location.href = buildMailto(formData);
});

updateEstimate();
