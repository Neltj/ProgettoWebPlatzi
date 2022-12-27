const navEmail = document.querySelector('.navEmail')
const desktopMenu = document.querySelector('.desktop-menu')


navEmail.addEventListener('click', ToggleDesktopMenu)

function ToggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive') 
}