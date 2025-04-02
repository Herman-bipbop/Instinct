document.addEventListener("DOMContentLoaded", function () {
    const menuBurger = document.querySelector(".menuBurger");
    const navLinks = document.querySelector(".nav-links");

    menuBurger.addEventListener("click", function () {
        navLinks.classList.toggle("open");
    });
});

