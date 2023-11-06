//NavScroll**********
let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("nav-scroll", window.scrollY > 0);
});
//Active Toggle**********
let AllNavLinksA = document.querySelectorAll(".nav-links li a");
// Active Add***********
AllNavLinksA.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
  });
});
// Active remove**********
const removeActive = () =>
  AllNavLinksA.forEach((item) => {
    item.classList.remove("active");
  });
// Nav Links Toggle **********
let menuBars = document.querySelector("nav button");
let navLinks = document.querySelector(".nav-links");
menuBars.addEventListener("click", () => {
  navLinks.classList.toggle("nav-link-block");
});
