const burger = document.getElementById("burger");
const mini_menu = document.getElementById("mini-menu");

burger.addEventListener("click", () => {
  mini_menu.classList.toggle("disp");
});

const menu_btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menu_btn.addEventListener("click", () => {
  scrollToSection(menu);
});

const nav_menu = document.querySelector(".nav-menu");

nav_menu.addEventListener("click", () => {
  scrollToSection(menu);
});

const history = document.querySelector(".history");
const nav_about = document.querySelector(".nav-about");

nav_about.addEventListener("click", () => {
  scrollToSection(history);
});

function scrollToSection(section) {
  const sectionPosition = section.offsetTop;

  window.scrollTo({
    top: sectionPosition,
    behavior: "smooth",
  });
}
