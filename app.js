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

const projectTiles = document.querySelectorAll(".project-tile");
const projectDetails = document.querySelectorAll(".project-details");
const projectImages = document.querySelectorAll(".project-image");

projectTiles.forEach((tile) =>
  tile.addEventListener("click", () => {
    tile.classList.toggle("clicked-tile");
    tile.childNodes[1].classList.toggle("project-hide");
    tile.childNodes[3].classList.toggle("project-hide");
  })
);
