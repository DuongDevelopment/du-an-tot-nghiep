let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartUI();
}

function updateCartUI() {
  document.getElementById("cart-count").textContent = cart.length;
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("cart-total").textContent = `Tổng tiền: ${total.toLocaleString()}đ`;
}

