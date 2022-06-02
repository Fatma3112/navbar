const links = document.querySelector(".links");
const btnToggle = document.querySelector(".nav-toggle");

btnToggle.addEventListener("click", function() {
    links.classList.toggle("show-links");
})