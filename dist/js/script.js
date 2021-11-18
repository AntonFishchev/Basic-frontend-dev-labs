new Swiper(".universities-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    watchOverflow: true,

    slidesPerView: 1,
    slidesPerGroup: 1,

    breakpoints: {
        800: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    },
});

const iconMenu = document.querySelector(".menu__icon");
const headerBtn = document.querySelector(".header__btn");

if (iconMenu) {
    const bodyMenu = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", (e) => {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("menu__icon_active");
        bodyMenu.classList.toggle("menu__body_active");
        headerBtn.classList.toggle("header__btn_active-menu");
    });
}
