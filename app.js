const button = document.querySelector(".nav-toggle");
const nav = document.querySelector(".header");

const navLinks = document.querySelectorAll(".nav-link");

button.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
});

navLinks.addEventListener("click", function () {
  nav.classList.remove(".nav-open");
});
