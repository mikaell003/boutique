/* CLENC CODES — customize the values in this section for every client. */
const BUSINESS = {
  name: "POP & THREAD Boutique",
  whatsapp: "254700000000", // Replace with the client's WhatsApp number: country code + number, no + or spaces.
  address: "Nairobi, Kenya",
  hours: "Mon–Sat · 9:00 AM–6:00 PM",
  phoneDisplay: "+254 700 000 000",
  mapQuery: "Nairobi, Kenya" // Replace with the exact shop address or Google Maps place name.
};

document.title = `${BUSINESS.name} | Style Your Everyday`;

document.querySelectorAll(".business-address").forEach(el => el.textContent = BUSINESS.address);
document.querySelectorAll(".business-hours").forEach(el => el.textContent = BUSINESS.hours);
document.querySelectorAll(".business-phone").forEach(el => el.textContent = BUSINESS.phoneDisplay);

const mapFrame = document.querySelector(".map-card iframe");
const mapOpen = document.querySelector(".map-open");
if (mapFrame) mapFrame.src = `https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS.mapQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
if (mapOpen) mapOpen.href = `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.mapQuery)}`;

const message = `Hi ${BUSINESS.name}! I found your website and would like to make an enquiry.`;
document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.href = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});
siteNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});
