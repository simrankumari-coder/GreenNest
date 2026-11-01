const addToCart = (product, quantity) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItem = cart.find((item) => item.id === product.id)
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        const newProduct = {
            ...product,
            quantity: quantity

        }
        cart.push(newProduct)

    }
    localStorage.setItem("cart", JSON.stringify(cart))
}

export default addToCart