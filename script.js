const navLinks = document.querySelectorAll(".nav-menu .nav-links");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addbEventListener("click", () => {
    // Toggle moblie menu visibility
    document.body.classList.toggle("show-moblie-menu");
})

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when the nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

// Initialize Swiper
const swiper = new Swiper('.slider-swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            sliderPerView: 1
        },
        768: {
            sliderPerView: 2
        },
        1024: {
            sliderPerView: 3
        }
    }
});