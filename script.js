const burger = document.querySelector("#burger-menu");
const navbar = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navbar.classList.toggle("nav-links-activate");
});
