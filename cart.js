let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;

    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("cart-total").innerText = total.toFixed(2);

    renderCart();
    document.getElementById("cart-modal").style.display = "block";
}

function renderCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - S/ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}
