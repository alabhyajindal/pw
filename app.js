const button = document.querySelector(".nav-toggle");
const nav = document.querySelector(".header");

const navLinks = document.querySelectorAll(".nav-link");

button.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
});

navLinks.forEach((item) => {
  item.addEventListener("click", (event) => {
    nav.classList.toggle("nav-open");
  });
});
