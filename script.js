const navEmail = document.querySelector('.navEmail')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerMenu = document.querySelector('.menu-hamburger')
const mobileMenu = document.querySelector('.mobile-menu')
const navImgCart = document.querySelector('.imgCart')
const myOrder = document.querySelector('.my-order')




navEmail.addEventListener('click', ToggleDesktopMenu)
burgerMenu.addEventListener('click', ToggleBurgerMenu)
navImgCart.addEventListener('click', ToggleMyOrder)

function ToggleDesktopMenu () { 
    console.log('hai cliccato su email')
    const isMyOrderClosed = myOrder.classList.contains('inactive')

    if (!isMyOrderClosed) {
        myOrder.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function ToggleBurgerMenu () {
    console.log('hai cliccato sul burger')
    const isMyOrderClosed = myOrder.classList.contains('inactive')

    if (!isMyOrderClosed) {
        myOrder.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function ToggleMyOrder () {
    console.log('Hai cliccato sul carrello')
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuCLosed = desktopMenu.classList.contains('inactive')

    if (!isMobileMenuClosed || !isDesktopMenuCLosed) {
        mobileMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
    }

    myOrder.classList.toggle('inactive')

}
