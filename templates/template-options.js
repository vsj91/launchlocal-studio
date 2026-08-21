const categoryData = {
  salon: {
    category: "Salon & Spa",
    accent: "salon-theme",
    city: "Indiranagar, Bengaluru",
    phone: "+919876543210",
    heroImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=900&q=80"
    ],
    services: [
      ["Haircut & Styling", "Women, men and kids styling with wash, cut and blow dry.", "From ₹499"],
      ["Facial & Cleanup", "Glow, detan, bridal and skin-care packages.", "From ₹799"],
      ["Bridal Makeup", "Makeup, hair styling, draping and touch-up support.", "From ₹7,999"],
      ["Hair Spa", "Repair, smoothing and nourishment treatments.", "From ₹1,499"]
    ],
    reviews: ["Clean salon, beautiful interiors and easy WhatsApp booking.", "The bridal package section made comparison simple.", "Found the location and prices without calling twice."]
  },
  cafe: {
    category: "Cafe & Restaurant",
    accent: "cafe-theme",
    city: "MG Road, Pune",
    phone: "+919812345678",
    heroImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80"
    ],
    services: [
      ["Cold Coffee", "Classic, mocha and caramel cold coffee.", "₹149"],
      ["Paneer Sandwich", "Grilled sandwich with mint chutney and cheese.", "₹179"],
      ["Brownie Sundae", "Warm brownie, ice cream and chocolate sauce.", "₹199"],
      ["Weekend Brunch", "Cafe platter, drinks and dessert combo.", "₹399"]
    ],
    reviews: ["Menu and timings were clear before we visited.", "The offer section helped us order quickly.", "Photos made the cafe feel premium and inviting."]
  },
  clinic: {
    category: "Clinic & Wellness",
    accent: "clinic-theme",
    city: "Anna Nagar, Chennai",
    phone: "+919900112233",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=900&q=80"
    ],
    services: [
      ["General Consultation", "Fever, cough, infection, BP and routine checkups.", "₹500"],
      ["Health Packages", "Blood tests, screening and wellness reports.", "From ₹1,499"],
      ["Vaccination", "Children and adult vaccination guidance.", "By appointment"],
      ["Follow-up Care", "Repeat consultation and reports review.", "Available"]
    ],
    reviews: ["Doctor profile helped us trust the clinic.", "Appointment CTA and map were very useful.", "Clean layout with treatment details and timings."]
  },
  retail: {
    category: "Retail Shop",
    accent: "retail-theme",
    city: "Banjara Hills, Hyderabad",
    phone: "+919777888999",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=900&q=80"
    ],
    services: [
      ["Women’s Wear", "Kurtis, dresses, tops and seasonal collections.", "New arrivals"],
      ["Accessories", "Bags, jewellery, watches and gifting items.", "From ₹299"],
      ["Festival Offers", "Bundle discounts and limited-period deals.", "Up to 30% off"],
      ["WhatsApp Catalogue", "Product enquiries and availability checks.", "Quick reply"]
    ],
    reviews: ["Found the collection online and visited the shop.", "WhatsApp enquiry made checking sizes easy.", "Offers, location and product categories were clear."]
  },
  coaching: {
    category: "Tuition & Coaching",
    accent: "coaching-theme",
    city: "Vashi, Navi Mumbai",
    phone: "+919611223344",
    heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80"
    ],
    services: [
      ["Class 8-10", "Maths and science foundation with weekly tests.", "Evening batches"],
      ["Class 11-12", "Commerce, accounts, economics and business studies.", "Limited seats"],
      ["Crash Courses", "Board exam revision and doubt-solving sessions.", "Starts monthly"],
      ["Parent Updates", "Progress reports and regular feedback.", "Included"]
    ],
    reviews: ["Course details were clear before we called.", "Results and teacher profile built confidence.", "Admission enquiry on WhatsApp was simple."]
  },
  services: {
    category: "Home Services",
    accent: "service-theme",
    city: "South Delhi",
    phone: "+919800112244",
    heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80"
    ],
    services: [
      ["AC Repair", "Service, gas refill, installation and inspection.", "From ₹399"],
      ["Plumbing", "Leak repair, tap fitting and blockage clearing.", "From ₹299"],
      ["Deep Cleaning", "Home, kitchen, sofa and bathroom cleaning.", "From ₹999"],
      ["Emergency Visit", "Fast callback for urgent repair needs.", "Available"]
    ],
    reviews: ["Called from the website and got same-day service.", "Pricing and service areas were clear.", "Before-after photos helped us trust the team."]
  }
};

const templateStyles = {
  signature: ["Signature", "A spacious premium layout with strong hero visuals, trust metrics, reviews and conversion-focused contact sections."],
  elegant: ["Elegant", "A refined editorial layout for businesses that want a calm, high-end first impression."],
  classic: ["Classic", "A familiar, practical layout that makes services, prices, timings and calls very easy to find."],
  bold: ["Bold", "A high-impact layout with larger imagery, stronger offer blocks and direct lead-generation CTAs."],
  minimal: ["Minimal", "A clean, fast-loading layout for businesses that want simple, polished and highly readable pages."]
};

function getTemplate() {
  const params = new URLSearchParams(window.location.search);
  const categoryKey = params.get("category") || "salon";
  const styleKey = params.get("style") || "signature";
  return {
    categoryKey,
    styleKey,
    category: categoryData[categoryKey] || categoryData.salon,
    style: templateStyles[styleKey] || templateStyles.signature
  };
}
