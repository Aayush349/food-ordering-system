// ============================================================
// DRJ FOODS — Menu Page Logic
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const restaurantId = parseInt(params.get('id'));

  if (!restaurantId) {
    window.location.href = 'restaurants.html';
    return;
  }

  const restaurant = getRestaurantById(restaurantId);
  if (!restaurant) {
    window.location.href = 'restaurants.html';
    return;
  }

  const items = getMenuByRestaurant(restaurantId);

  // ---- Populate Hero ----
  document.getElementById('heroImg').src = restaurant.image;
  document.getElementById('heroImg').alt = restaurant.name;
  document.getElementById('restaurantName').textContent = restaurant.name;
  document.getElementById('menuRating').querySelector('span').textContent = restaurant.rating;
  document.getElementById('menuCuisine').querySelector('span').textContent = restaurant.cuisine;
  document.getElementById('menuDelivery').querySelector('span').textContent = `${restaurant.deliveryTime} min`;
  document.getElementById('menuPrice').querySelector('span').textContent = restaurant.priceRange;
  document.title = `${restaurant.name} — DRJ FOODS`;

  // ---- Category Tabs ----
  let activeCategory = 'All';
  const tabs = document.querySelectorAll('.category-tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.category;
      renderMenu();
    });
  });

  // ---- Render Menu ----
  function renderMenu() {
    const grid = document.getElementById('menuGrid');
    let filtered = items;

    if (activeCategory !== 'All') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    grid.innerHTML = filtered.map((item, i) => {
      const cart = getCart();
      const inCart = cart.find(c => c.id === item.id);

      return `
        <div class="menu-item-card animate-fade-in-up stagger-${(i % 6) + 1}">
          <div class="menu-item-img">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
          </div>
          <div class="menu-item-body">
            <div class="menu-item-header">
              <div class="${item.isVeg ? 'veg-badge' : 'non-veg-badge'}"></div>
              <h3>${item.name}</h3>
            </div>
            <p class="item-desc">${item.description}</p>
            <div class="menu-item-footer">
              <span class="item-price">₹${item.price}</span>
              ${inCart
                ? `<div class="qty-control">
                     <button onclick="updateQty(${item.id}, -1)">−</button>
                     <span class="qty-value">${inCart.qty}</span>
                     <button onclick="updateQty(${item.id}, 1)">+</button>
                   </div>`
                : `<button class="add-to-cart-btn" onclick="handleAddToCart(${item.id})">ADD</button>`
              }
            </div>
          </div>
        </div>
      `;
    }).join('');

    updateFloatingCart();
  }

  // ---- Add to Cart Handler ----
  window.handleAddToCart = function(itemId) {
    const item = items.find(i => i.id === itemId);
    if (item) {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        restaurantName: restaurant.name
      });
      renderMenu();
    }
  };

  // ---- Update Quantity ----
  window.updateQty = function(itemId, delta) {
    updateCartItemQty(itemId, delta);
    renderMenu();
  };

  // ---- Floating Cart Button ----
  function updateFloatingCart() {
    const floatingCart = document.getElementById('floatingCart');
    const count = getCartCount();
    const total = getCartTotal();

    if (count > 0) {
      floatingCart.classList.remove('hidden');
      document.getElementById('floatingCartCount').textContent = `${count} item${count > 1 ? 's' : ''}`;
      document.getElementById('floatingCartTotal').textContent = `₹${total}`;
    } else {
      floatingCart.classList.add('hidden');
    }
  }

  // Initial render
  renderMenu();
});
