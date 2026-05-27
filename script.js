const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#primary-nav");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

const setHeaderState = () => {
  const elevated = window.scrollY > 24;
  header.dataset.elevated = String(elevated);
};

const setNavOpen = (open) => {
  header.dataset.navOpen = String(open);
  navToggle.setAttribute("aria-expanded", String(open));
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle.addEventListener("click", () => {
  setNavOpen(navToggle.getAttribute("aria-expanded") !== "true");
});

nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    setNavOpen(false);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setNavOpen(false);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    setNavOpen(false);
  }
});
