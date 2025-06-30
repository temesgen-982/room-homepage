const menuBtn = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav");
const menuOverlay = document.querySelector(".nav-overlay");
let menuOpen = false;

const icon = {
  open: "assets/images/icon-hamburger.svg",
  close: "assets/images/icon-close.svg",
};

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  menu.classList.toggle("is-hidden");
  menuOverlay.classList.toggle("is-hidden");
  menuBtn
    .querySelector("img")
    .setAttribute("src", menuOpen ? icon.close : icon.open);
});
