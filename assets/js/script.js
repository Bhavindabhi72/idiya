// header js start
const Header = document.querySelector("header");
const MenuToggleBtn = document.querySelector(".navbar-toggler");

MenuToggleBtn?.addEventListener("click", () => document.body.classList.toggle("show-menu"));

window.addEventListener("scroll", (e) => {
  const scrollPos = window.scrollY;
  scrollPos > 10 ? Header.classList.add("scrolled") : Header.classList.remove("scrolled");
});

const wage = document.getElementById('countzipcode');
wage.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('getintouch').scrollIntoView();
    }
});

// header js end