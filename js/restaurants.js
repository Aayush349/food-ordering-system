// ============================================================
// DRJ FOODS — Restaurants Listing Page Logic
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('restaurantsGrid');
  const searchInput = document.getElementById('searchInput');
  const filterChips = document.querySelectorAll('.filter-chip');

  let activeFilter = 'All';
  let searchQuery = '';

  // Check for cuisine query param (from home page cuisine chips)
  const params = new URLSearchParams(window.location.search);
  const cuisineParam = params.get('cuisine');
  if (cuisineParam) {
    activeFilter = cuisineParam;
    // Activate the correct chip
    filterChips.forEach(chip => {
      chip.classList.toggle('active', chip.dataset.filter === cuisineParam);
    });
  }

  function renderRestaurants() {
    let filtered = restaurants;

    // Filter by cuisine
    if (activeFilter !== 'All') {
      filtered = filtered.filter(r => r.cuisine === activeFilter);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q)
      );
    }

    // Sort: featured first, then by rating
    filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.rating - a.rating;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="no-results">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <h3>No restaurants found</h3>
          <p>Try a different search or filter</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map((r, i) => createRestaurantCard(r, i)).join('');
  }

  // Filter chip clicks
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
      renderRestaurants();
    });
  });

  // Search input
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderRestaurants();
  });

  // Initial render
  renderRestaurants();
});
