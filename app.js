const button = document.querySelector(".nav-toggle");
const nav = document.querySelector(".header");
let currentScroll = 0;

const navLinks = document.querySelectorAll(".nav-link");

button.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
});

navLinks.forEach((item) => {
  item.addEventListener("click", (event) => {
    nav.classList.toggle("nav-open");
  });
});

window.addEventListener("scroll", function () {
  currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 160) {
    nav.classList.add("glassmorphic-nav");
  } else {
    nav.classList.remove("glassmorphic-nav");
  }
});

const projectTile = document.querySelector(".project-tile");
const projectDetails = document.querySelector(".project-details");
const projectImage = document.querySelector(".project-image");

projectTile.addEventListener("click", () => {
  projectImage.classList.toggle("project-open");
  projectDetails.classList.toggle("project-open");
});
