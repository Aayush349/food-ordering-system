# Food Ordering System — Mini Swiggy Clone

A fully static, multi-page food ordering website built with vanilla HTML, CSS, and JavaScript. Users can browse restaurants, view menus, add items to a cart, and proceed to a checkout summary — all without a backend.

## Project Architecture

```
d:\food ordering system\
├── index.html              (Home / Landing page)
├── restaurants.html        (Restaurant listing)
├── menu.html               (Restaurant detail + menu)
├── cart.html                (Cart & Checkout)
├── css/
│   └── styles.css          (Global design system + all page styles)
├── js/
│   ├── app.js              (Shared utilities, nav, theme)
│   ├── data.js             (Static JSON data: restaurants, menus)
│   ├── restaurants.js      (Listing page logic)
│   ├── menu.js             (Menu page logic)
│   └── cart.js             (Cart & checkout logic)
└── images/
    ├── hero-banner.webp
    ├── restaurants/         (6 restaurant images)
    └── food/               (12+ food item images)
```

## Proposed Changes

### Design System — `css/styles.css`

#### [NEW] [styles.css](file:///d:/food%20ordering%20system/css/styles.css)

- CSS custom properties for colors, typography, spacing, shadows
- Dark-mode color palette (Swiggy-inspired: deep charcoal background, orange accents)
- Google Font import (**Outfit**)
- Reusable utility classes: cards, badges, buttons, grid layouts
- Responsive breakpoints (mobile-first)
- Smooth micro-animations (hover, fade-in, slide-up)
- Glassmorphism effects on header & cart overlay

---

### Static Data — `js/data.js`

#### [NEW] [data.js](file:///d:/food%20ordering%20system/js/data.js)

- Array of **6 restaurants** with: id, name, cuisine, rating, delivery time, price range, image, featured flag
- Array of **menu items per restaurant** (~4-5 items each) with: id, name, description, price, image, category (Starter / Main / Dessert / Drink), veg/non-veg badge
- All image paths reference `images/` directory (generated via tool)

---

### Pages

#### [NEW] [index.html](file:///d:/food%20ordering%20system/index.html)

- **Hero section**: Big banner image, headline, subtext, CTA button → restaurants page
- **How It Works**: 3 icon steps (Browse → Order → Enjoy)
- **Featured Restaurants carousel**: top 3 cards linked to menu page
- **Popular Cuisines chips** (Italian, Indian, Chinese, etc.)
- Sticky glassmorphic header with logo, nav links, cart icon with badge count

#### [NEW] [restaurants.html](file:///d:/food%20ordering%20system/restaurants.html)

- Search bar + filter chips (cuisine type, rating, delivery time)
- Responsive grid of restaurant cards (image, name, rating stars, cuisine, delivery ETA)
- Click card → `menu.html?id=<restaurantId>`

#### [NEW] [menu.html](file:///d:/food%20ordering%20system/menu.html)

- Restaurant hero banner + info (name, rating, cuisine, delivery time)
- Category tabs (All / Starters / Mains / Desserts / Drinks)
- Menu item cards: image, name, description, price, veg/non-veg badge, "Add to Cart" button
- Quantity controls (+/−) on added items
- Floating "View Cart" button with item count

#### [NEW] [cart.html](file:///d:/food%20ordering%20system/cart.html)

- List of cart items with image, name, quantity controls, item subtotal
- Order summary: subtotal, delivery fee, taxes, total
- "Place Order" button → shows success confirmation modal
- Empty-cart state with illustration and CTA to browse restaurants

---

### JavaScript Logic

#### [NEW] [app.js](file:///d:/food%20ordering%20system/js/app.js)

- `localStorage`-based cart (persist across pages)
- Header cart badge updater
- Mobile hamburger menu toggle
- Page transition helpers

#### [NEW] [restaurants.js](file:///d:/food%20ordering%20system/js/restaurants.js)

- Renders restaurant cards from `data.js`
- Search filter by name / cuisine
- Sort by rating / delivery time

#### [NEW] [menu.js](file:///d:/food%20ordering%20system/js/menu.js)

- Reads `restaurantId` from URL query string
- Renders menu items with category tabs
- Add-to-cart / update quantity / remove item

#### [NEW] [cart.js](file:///d:/food%20ordering%20system/js/cart.js)

- Reads cart from `localStorage`, renders items
- Update quantities, remove items, recalculate totals
- Place Order → confirmation modal, clears cart

---

### Images

- **Generated via `generate_image` tool** — high-quality food and restaurant photos
- Hero banner, 6 restaurant exteriors/interiors, 12+ food dishes

## Verification Plan

### Browser Testing (Automated via browser tool)
1. Open `index.html` via a local HTTP server (`npx -y serve .` in project root)
2. Verify hero section and featured restaurants render correctly
3. Click "Order Now" CTA → navigate to `restaurants.html`
4. Click a restaurant card → navigate to `menu.html?id=1`
5. Add 2 items to cart → verify cart badge updates
6. Navigate to `cart.html` → verify items, totals, and quantity controls
7. Click "Place Order" → verify success modal appears
8. Test responsive layout by resizing the browser
