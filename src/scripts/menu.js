function setupMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-active");
      navMenu.classList.toggle("is-active");
      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", (!expanded).toString());
    });
  }
}

document.addEventListener("astro:page-load", setupMenu);
document.addEventListener("DOMContentLoaded", setupMenu);
