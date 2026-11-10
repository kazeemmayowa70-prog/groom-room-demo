
/* =================================
   THE GROOM ROOM
   WEBSITE FUNCTIONALITY
================================= */

// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close menu after clicking a navigation link

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
});

// Close menu when clicking outside navigation

document.addEventListener("click", function (event) {
    const navbar = document.querySelector(".navbar");

    if (!navbar.contains(event.target)) {
        closeMenu();
    }
});

// Close menu with Escape key

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});


// 2. WHATSAPP BOOKING

// Replace this example with the barber's real WhatsApp number.
// Nigerian international format: 234 followed by the phone number.
// Do not include +, spaces or dashes.

const WHATSAPP_NUMBER = "2348012345678";

const bookingLink = document.getElementById("bookingLink");

const bookingMessage =
    "Hello The Groom Room! I would like to enquire about booking an appointment.";

if (bookingLink) {
    bookingLink.href =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bookingMessage)}`;

    bookingLink.target = "_blank";
    bookingLink.rel = "noopener noreferrer";
}


// 3. AUTOMATIC COPYRIGHT YEAR

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
