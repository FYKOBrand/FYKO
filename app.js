function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
  const cart = getCart();
  cart.push({ name, price });
  saveCart(cart);
  alert("Added to cart: " + name);
}

/* CART PAGE */
function renderCart() {
  const cart = getCart();
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");

  if (!container) return;

  container.innerHTML = "";

  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <span>${item.name}</span>
      <span>${item.price.toFixed(2)}€</span>
      <button onclick="removeItem(${i})">X</button>
    `;

    container.appendChild(div);
  });

  totalEl.innerText = "Total: " + total.toFixed(2) + "€";
}

function removeItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  renderCart();
}
