const button = document.querySelector(".nav-toggle");
const nav = document.querySelector(".header");

button.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
});
