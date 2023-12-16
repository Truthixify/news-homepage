addEventListener("DOMContentLoaded", () => {
  const closeMenuBtn = document.querySelector(".close-menu");
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector("nav")

  navMenu.classList.add("hidden");
  closeMenuBtn.classList.add("hidden");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.remove("hidden");
    closeMenuBtn.classList.remove("hidden");
    menuBtn.classList.add("hidden");
  })

  closeMenuBtn.addEventListener("click", () => {
    navMenu.classList.add("hidden");
    closeMenuBtn.classList.add("hidden");
    menuBtn.classList.remove("hidden");
  })
})