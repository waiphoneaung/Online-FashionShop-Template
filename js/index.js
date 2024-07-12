document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var searchToggler = document.querySelector('.search-toggler');
    var navbarNav = document.getElementById('navbarNav');
    var searchBar = document.getElementById('searchBar');

    function toggleCollapse(element) {
        var bsCollapse = bootstrap.Collapse.getInstance(element) || new bootstrap.Collapse(element, { toggle: false });
        bsCollapse.toggle();
    }

    navbarToggler.addEventListener('click', function () {
        if (searchBar.classList.contains('show')) {
            toggleCollapse(searchBar);
        }
    });
    searchToggler.addEventListener('click', function () {
        if (navbarNav.classList.contains('show')) {
            toggleCollapse(navbarNav);
        }
    });
});
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");
const slides = document.querySelectorAll(".carousel-slide");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

prevButton.addEventListener("click", () => {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
});

nextButton.addEventListener("click", () => {
    currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    showSlide(currentSlide);
});

showSlide(currentSlide);