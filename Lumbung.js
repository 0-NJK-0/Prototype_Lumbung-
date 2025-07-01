const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu-icon").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#menu-icon");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
