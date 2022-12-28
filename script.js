const navEmail = document.querySelector('.navEmail')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerMenu = document.querySelector('.menu-hamburger')
const mobileMenu = document.querySelector('.mobile-menu')
const logoMenu = document.querySelector('.logo-img')
const boxBlue = document.querySelector('.box')

navEmail.addEventListener('click', ToggleDesktopMenu)
burgerMenu.addEventListener('click', ToggleBurgerMenu)

function ToggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive') 
    console.log('hai cliccato su email')
}

function ToggleBurgerMenu () {
    mobileMenu.classList.toggle('inactive')
    console.log('hai cliccato sul burger')
}

