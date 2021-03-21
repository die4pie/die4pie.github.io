AOS.init();

const navBurger = document.querySelector('#navburger');
const navMenu = document.querySelector('.nav-menu');
const navContent = document.querySelector('.nav-content-wrapper');
const heroWord = document.querySelector('#hero-word');

navBurger.addEventListener('click', toggleNavMenu);

function toggleNavMenu() {

    const body = document.querySelector('body');

    navBurger.classList.toggle('active');
    navMenu.classList.toggle('nav-menu-active');
    navContent.classList.toggle('show');

    body.classList.toggle('overflow');

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}