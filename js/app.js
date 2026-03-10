// ============================================================
// DRJ FOODS — Shared Utilities
// ============================================================

// ---- Cart (localStorage) ----
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('drj_cart')) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('drj_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(c => c.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  saveCart(cart);
  showToast(`${item.name} added to cart!`);
}

function removeFromCart(itemId) {
  let cart = getCart();
  cart = cart.filter(c => c.id !== itemId);
  saveCart(cart);
}

function updateCartItemQty(itemId, delta) {
  const cart = getCart();
  const item = cart.find(c => c.id === itemId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(itemId);
      return;
    }
  }
  saveCart(cart);
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function clearCart() {
  localStorage.removeItem('drj_cart');
  updateCartBadge();
}

// ---- Cart Badge ----
function updateCartBadge() {
  const count = getCartCount();
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(badge => {
    badge.textContent = count > 0 ? count : '';
    badge.setAttribute('data-count', count);
    // Bump animation
    badge.classList.remove('bump');
    void badge.offsetWidth; // force reflow
    badge.classList.add('bump');
  });
}

// ---- Toast Notification ----
function showToast(message) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toastMessage');
  if (!toast || !msgEl) return;
  msgEl.textContent = message;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// ---- Restaurant Card HTML ----
function createRestaurantCard(r, index = 0) {
  return `
    <a href="menu.html?id=${r.id}" class="restaurant-card animate-fade-in-up stagger-${(index % 6) + 1}">
      <div class="restaurant-card-img">
        <img src="${r.image}" alt="${r.name}" loading="lazy">
        <div class="overlay-gradient"></div>
        <div class="delivery-badge">🕐 ${r.deliveryTime} min</div>
        ${r.featured ? '<div class="featured-tag">Featured</div>' : ''}
      </div>
      <div class="restaurant-card-body">
        <h3>${r.name}</h3>
        <div class="restaurant-meta">
          <span class="rating">
            <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ${r.rating}
          </span>
          <span class="cuisine">${r.cuisine}</span>
          <span class="price-range">${r.priceRange}</span>
        </div>
        <p class="description">${r.description}</p>
      </div>
    </a>
  `;
}

// ---- Header scroll effect ----
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ---- Mobile nav toggle ----
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('show');
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('show');
    });
  });
}

// ---- Scroll Reveal (Intersection Observer) ----
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ---- Init on every page ----
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  updateCartBadge();
});
