const navEmail = document.querySelector('.navEmail')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerMenu = document.querySelector('.menu-hamburger')
const mobileMenu = document.querySelector('.mobile-menu')
const navImgCart = document.querySelector('.imgCart')
const myOrder = document.querySelector('.my-order')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('.container-product-detail')
const iconCloseDetail = document.querySelector('.iconCloseDetail')



navEmail.addEventListener('click', ToggleDesktopMenu)
burgerMenu.addEventListener('click', ToggleBurgerMenu)
navImgCart.addEventListener('click', ToggleMyOrder)
iconCloseDetail.addEventListener('click', closeMenuIconShopDetail)


function ToggleDesktopMenu () { 
    console.log('hai cliccato su email')
    desktopMenu.classList.toggle('inactive')
    myOrder.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

function ToggleBurgerMenu () {
    console.log('hai cliccato sul burger')
    mobileMenu.classList.toggle('inactive')
    myOrder.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

function ToggleMyOrder () {
    console.log('Hai cliccato sul carrello')
    myOrder.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    productDetailContainer.classList.add('inactive')

}

function ToggleProductDetail () {
    productDetailContainer.classList.toggle('inactive')
    myOrder.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}

function closeMenuIconShopDetail () {
    productDetailContainer.classList.add('inactive')
}



const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'img/bike.jpg'
})

productList.push({
    name: 'Schermo',
    price: 220,
    image: 'img/bike.jpg'
})

productList.push({
    name: 'Computer',
    price: 890,
    image: 'img/bike.jpg'
})

/*
<div class="product-card">
                <img src="img/bike.jpg" alt="" class="product-img">
                <div class="product-info">
                    <div class="product-description">
                        <p>$120,00</p>
                        <p>Bike</p>
                    </div> 
                    
                    <figure>
                        <img src="icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>
*/



function renderProducts (arr) {

    for (product of arr) {

        const productCard = document.createElement('div')
        const productImage = document.createElement('img')
        const productInfo = document.createElement('div')
        const productDescription = document.createElement('div')
        const productPrice = document.createElement('p')
        const productName = document.createElement('p')
        const figureContainer = document.createElement('figure')
        const figureIconCart = document.createElement('img')
        
        productCard.classList.add('product-card')
        productImage.setAttribute('src', product.image)
        productImage.addEventListener('click', ToggleProductDetail)
        productInfo.classList.add('product-info')
        productDescription.classList.add('product-description')
        productPrice.innerText = '$'+ product.price
        productName.innerText = product.name
        figureIconCart.setAttribute('src', 'icons/bt_add_to_cart.svg')
        productDescription.append(productPrice, productName)
        productInfo.append(productDescription, figureContainer)
        figureContainer.appendChild(figureIconCart)
        productCard.append(productImage, productInfo)
        cardsContainer.appendChild(productCard)
    
    }
}

renderProducts(productList)

