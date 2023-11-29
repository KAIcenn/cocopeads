// Toggle class aktiv = kalo ada jadi gaada dan sebaliknya
const navbarNav = document.querySelector(".navbar-nav");
// Ketika menu di clik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik di luar side bar untuk menutup nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});


