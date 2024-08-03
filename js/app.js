let cart = []
let totalPrice = 0
let totalItems = 0

function addToCart(productName, productPrice, productImage) {
    cart.push({ name: productName, price: productPrice, image: productImage })
    totalItems++
    totalPrice += productPrice
    updateCart()
}

function updateCart() {
    const cartItems = document.getElementById('cart-item')
    const itemCount = document.getElementById('item-count')
    const totalPriceElement = document.getElementById('total-price')
    const cartCount = document.getElementById('cart-count')

    cartItems.innerHTML = ''
    cart.forEach(item => {
        const li = document.createElement('li')
        li.className = 'list-group-item d-flex justify-content-between align-items-center'
        
        const img = document.createElement('img')
        img.src = item.image
        img.className = 'cart-item-image'
        
        const text = document.createElement('span')
        text.textContent = `${item.name}  $${item.price.toFixed(2)}`
        
        li.appendChild(img)
        li.appendChild(text)
        cartItems.appendChild(li)
    })

    itemCount.textContent = totalItems
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`
    cartCount.textContent = totalItems
}
