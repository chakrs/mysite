const header = document.querySelector(".site-header");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const setHeaderState = () => {
  if (!header) {
    return;
  }

  const elevated = window.scrollY > 24;
  header.dataset.elevated = String(elevated);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });
