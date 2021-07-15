const hamburgerIcon = document.querySelector(".hamburger-menu");
const list = document.querySelector(".hamburger-menu-list");

hamburgerIcon.addEventListener("click", (e) => {
  list.classList.toggle("active");
});
