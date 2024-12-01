const burgerMenu = document.querySelector(".burger-menu");
const topLine = document.querySelector(".top-line");
const bottomLine = document.querySelector(".bottom-line");
const nav = document.querySelector("#navigation");
const body = document.querySelector("body");

function openMenu() {
  topLine.classList.add("top-line-cross");
  bottomLine.classList.add("bottom-line-cross");
  nav.classList.add("nav-menu-opened");
  body.classList.add("body-menu-opened");
}

function closeMenu() {
  topLine.classList.remove("top-line-cross");
  bottomLine.classList.remove("bottom-line-cross");
  nav.classList.remove("nav-menu-opened");
  body.classList.remove("body-menu-opened");
}

burgerMenu.addEventListener("click", () => {
  if (topLine.classList.contains("top-line-cross")) {
    closeMenu();
  } else {
    openMenu();
  }
});

nav.addEventListener("click", () => {
  closeMenu();
});

function closeMenuResize() {
  const width = document.body.clientWidth;
  if (width > 768) {
    closeMenu();
  }
}

window.addEventListener("resize", () => {
  closeMenuResize();
});
