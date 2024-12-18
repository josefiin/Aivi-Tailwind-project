// Hämtar menyknappen och mobilmenyn
const menuButton = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobileMenu");

// Lägger till klick-händelse på menyknappen
menuButton.addEventListener("click", toggleMenu);

// Funktion för att växla mobilmenyns visningsläge. Togglar Tailwind-klassen "hidden"
function toggleMenu() {
  mobileMenu.classList.toggle("hidden");
}