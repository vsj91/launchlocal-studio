const quoteForm = document.querySelector("#quoteForm");
const pagesSelect = document.querySelector("#pages");
const estimate = document.querySelector("#estimate");
const formNote = document.querySelector("#formNote");

const ranges = {
  1: "$499 - $899",
  5: "$899 - $1,499",
  8: "$1,499 - $2,499",
  12: "$2,500+"
};

function updateEstimate() {
  estimate.textContent = ranges[pagesSelect.value] || ranges[5];
}

function buildMailto(formData) {
  const features = formData.getAll("features").join(", ") || "None selected";
  const subject = `Website quote request from ${formData.get("business") || "a business"}`;
  const body = [
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Business: ${formData.get("business")}`,
    `Business type: ${formData.get("business_type")}`,
    `Template: ${formData.get("template")}`,
    `Pages: ${formData.get("pages")}`,
    `Timeline: ${formData.get("timeline")}`,
    `Features: ${features}`,
    "",
    "Project details:",
    formData.get("details") || "No details added."
  ].join("\n");

  return `mailto:you@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

pagesSelect.addEventListener("change", updateEstimate);

quoteForm.addEventListener("submit", event => {
  if (quoteForm.getAttribute("action")) {
    return;
  }

  event.preventDefault();
  const formData = new FormData(quoteForm);
  formNote.textContent = "Opening an email draft. Add your real form endpoint or email before publishing.";
  window.location.href = buildMailto(formData);
});

updateEstimate();
