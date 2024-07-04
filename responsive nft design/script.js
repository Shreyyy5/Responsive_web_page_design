let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    document
      .querySelectorAll(".header, .navbar a, .logo, .home-content h1")
      .forEach((element) => {
        element.classList.toggle("theme-toggle");
      });
  });
});

function openImage(overlay) {
  overlay.querySelector(".overlay-text").classList.toggle("open");
  overlay.nextElementSibling.classList.toggle("open");
}

const imgOverlays = document.querySelectorAll(".img-overlay");

imgOverlays.forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    e.target.querySelector(".overlay-text").remove();
  });
});
