const iconMenu = document.querySelector(".menu__icon");
const headerBtn = document.querySelector('.header__btn');

if (iconMenu) {
    const bodyMenu = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", (e) => {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("menu__icon_active");
        bodyMenu.classList.toggle("menu__body_active");
        headerBtn.classList.toggle("header__btn_active-menu")
    });
}