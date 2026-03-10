// ============================================================
// DRJ FOODS — Cart Page Logic
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});

function renderCart() {
  const layout = document.getElementById('cartLayout');
  const cart = getCart();

  if (cart.length === 0) {
    layout.innerHTML = `
      <div class="empty-cart animate-fade-in">
        <div class="empty-cart-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet. Explore our restaurants and find something delicious!</p>
        <a href="restaurants.html" class="btn btn-primary">Browse Restaurants</a>
      </div>
    `;
    return;
  }

  const subtotal = getCartTotal();
  const deliveryFee = subtotal > 499 ? 0 : 40;
  const taxes = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + taxes;

  layout.innerHTML = `
    <!-- Cart Items -->
    <div class="cart-items-section">
      <h2>Your Cart <span style="color: var(--text-muted); font-weight:400; font-size: var(--font-base);">(${getCartCount()} items)</span></h2>
      ${cart.map(item => `
        <div class="cart-item animate-fade-in">
          <div class="cart-item-img">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="cart-item-info">
            <h3>${item.name}</h3>
            <div class="cart-item-price">₹${item.price} each${item.restaurantName ? ' · ' + item.restaurantName : ''}</div>
          </div>
          <div class="cart-item-right">
            <div class="qty-control">
              <button onclick="handleCartQty(${item.id}, -1)">−</button>
              <span class="qty-value">${item.qty}</span>
              <button onclick="handleCartQty(${item.id}, 1)">+</button>
            </div>
            <div class="cart-item-total">₹${item.price * item.qty}</div>
            <button class="remove-btn" onclick="handleRemove(${item.id})">Remove</button>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Order Summary -->
    <div class="order-summary animate-fade-in">
      <h2>Order Summary</h2>
      <div class="summary-row text-muted">
        <span>Subtotal</span>
        <span>₹${subtotal}</span>
      </div>
      <div class="summary-row text-muted">
        <span>Delivery Fee</span>
        <span>${deliveryFee === 0 ? '<span class="free-tag">FREE</span>' : '₹' + deliveryFee}</span>
      </div>
      <div class="summary-row text-muted">
        <span>GST (5%)</span>
        <span>₹${taxes}</span>
      </div>
      <div class="summary-row total">
        <span>Total</span>
        <span>₹${total}</span>
      </div>
      ${deliveryFee === 0 ? `<div style="text-align:center; margin-top: var(--space-sm);"><span style="font-size: var(--font-xs); color: var(--green);">🎉 You saved ₹40 on delivery!</span></div>` : `<div style="text-align:center; margin-top: var(--space-sm);"><span style="font-size: var(--font-xs); color: var(--text-muted);">Add ₹${500 - subtotal} more for free delivery</span></div>`}
      <button class="btn btn-primary place-order-btn" onclick="placeOrder()">
        Place Order — ₹${total}
      </button>
      <div class="coupon-box">
        <input type="text" placeholder="Enter coupon code">
        <button>Apply</button>
      </div>
    </div>
  `;
}

function handleCartQty(itemId, delta) {
  updateCartItemQty(itemId, delta);
  renderCart();
}

function handleRemove(itemId) {
  removeFromCart(itemId);
  showToast('Item removed from cart');
  renderCart();
}

function placeOrder() {
  const modal = document.getElementById('successModal');
  modal.classList.add('active');
  clearCart();

  // Close modal on overlay click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      renderCart();
    }
  });
}
