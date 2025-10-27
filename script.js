// Initialize empty cart
let cart = [];
let cartCount = 0;
let cartTotal = 0;

// Function to update cart display
function updateCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  const cartCountSpan = document.getElementById('cart-count');
  const cartTotalSpan = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');

  // Clear previous cart items
  cartItemsDiv.innerHTML = '';

  // Display cart items
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    checkoutBtn.disabled = true;
  } else {
    cart.forEach(item => {
      const div = document.createElement('div');
      div.textContent = `${item.name} - $${item.price}`;
      cartItemsDiv.appendChild(div);
    });
    cartCountSpan.textContent = cart.length;
    cartTotalSpan.textContent = cartTotal.toFixed(2);
    checkoutBtn.disabled = false;
  }
}

// Function to add product to cart
function addToCart(name, price) {
  cart.push({ name, price });
  cartCount++;
  cartTotal += price;
  updateCart();
}

