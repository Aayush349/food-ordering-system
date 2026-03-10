// ============================================================
// DRJ FOODS — Static Data Store
// ============================================================

const restaurants = [
  {
    id: 1,
    name: "Bella Italia",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: "25-35",
    priceRange: "₹₹",
    image: "images/restaurants/bella-italia.png",
    featured: true,
    description: "Authentic Italian flavors crafted with love. Hand-tossed pizzas, creamy pastas, and decadent desserts.",
    address: "12, MG Road, Connaught Place"
  },
  {
    id: 2,
    name: "Spice Garden",
    cuisine: "Indian",
    rating: 4.7,
    deliveryTime: "30-40",
    priceRange: "₹₹",
    image: "images/restaurants/spice-garden.png",
    featured: true,
    description: "A royal feast of traditional Indian recipes. Aromatic biryanis, rich curries, and tandoori delights.",
    address: "45, Jubilee Hills, Hyderabad"
  },
  {
    id: 3,
    name: "Dragon Wok",
    cuisine: "Chinese",
    rating: 4.3,
    deliveryTime: "20-30",
    priceRange: "₹₹",
    image: "images/restaurants/dragon-wok.png",
    featured: true,
    description: "Sizzling woks and umami-rich sauces. Dim sums, noodles, and fiery Szechuan specialties.",
    address: "8, Park Street, Kolkata"
  },
  {
    id: 4,
    name: "Burger Barn",
    cuisine: "American",
    rating: 4.4,
    deliveryTime: "15-25",
    priceRange: "₹",
    image: "images/restaurants/burger-barn.png",
    featured: false,
    description: "Stacked high, grilled to perfection. Juicy burgers, crispy fries, and thick shakes.",
    address: "22, Linking Road, Mumbai"
  },
  {
    id: 5,
    name: "Sakura Sushi",
    cuisine: "Japanese",
    rating: 4.8,
    deliveryTime: "35-45",
    priceRange: "₹₹₹",
    image: "images/restaurants/sakura-sushi.png",
    featured: false,
    description: "Omakase-inspired precision. Fresh sashimi, handcrafted maki, and soul-warming ramen bowls.",
    address: "3, Indiranagar, Bangalore"
  },
  {
    id: 6,
    name: "Green Bowl",
    cuisine: "Healthy",
    rating: 4.6,
    deliveryTime: "20-30",
    priceRange: "₹₹",
    image: "images/restaurants/green-bowl.png",
    featured: false,
    description: "Clean eating, zero guilt. Superfood bowls, fresh salads, and cold-pressed juices.",
    address: "67, Koregaon Park, Pune"
  }
];

const menuItems = [
  // ═══════════════════════════════════════════
  // 🍕 Bella Italia (id: 1) — Italian
  // ═══════════════════════════════════════════
  { id: 101, restaurantId: 1, name: "Margherita Pizza", description: "San Marzano tomatoes, fresh mozzarella, basil on a hand-stretched thin crust", price: 349, image: "images/food/margherita-pizza.png", category: "Main", isVeg: true },
  { id: 102, restaurantId: 1, name: "Pasta Carbonara", description: "Creamy egg yolk sauce with crispy guanciale, pecorino, and cracked black pepper", price: 399, image: "images/food/pasta-carbonara.png", category: "Main", isVeg: false },
  { id: 103, restaurantId: 1, name: "Pepperoni Pizza", description: "Spicy pepperoni, mozzarella, oregano on our signature tomato base", price: 429, image: "images/food/margherita-pizza.png", category: "Main", isVeg: false },
  { id: 104, restaurantId: 1, name: "Penne Arrabbiata", description: "Al dente penne in a fiery tomato-garlic-chilli sauce with fresh basil", price: 319, image: "images/food/pasta-carbonara.png", category: "Main", isVeg: true },
  { id: 105, restaurantId: 1, name: "Bruschetta Classica", description: "Toasted ciabatta topped with diced Roma tomatoes, garlic, basil, balsamic glaze", price: 199, image: "images/food/spring-rolls.png", category: "Starter", isVeg: true },
  { id: 106, restaurantId: 1, name: "Garlic Bread with Cheese", description: "Warm house-baked bread loaded with garlic butter and melted mozzarella", price: 179, image: "images/food/margherita-pizza.png", category: "Starter", isVeg: true },
  { id: 107, restaurantId: 1, name: "Minestrone Soup", description: "Hearty Italian vegetable soup with beans, pasta, and Parmigiano", price: 159, image: "images/food/pasta-carbonara.png", category: "Starter", isVeg: true },
  { id: 108, restaurantId: 1, name: "Classic Tiramisu", description: "Coffee-soaked ladyfingers layered with mascarpone cream, dusted with cocoa", price: 249, image: "images/food/caesar-salad.png", category: "Dessert", isVeg: true },
  { id: 109, restaurantId: 1, name: "Panna Cotta", description: "Silky vanilla cream pudding with a tangy mixed berry compote", price: 229, image: "images/food/caesar-salad.png", category: "Dessert", isVeg: true },
  { id: 110, restaurantId: 1, name: "Italian Lemonade", description: "Freshly squeezed lemons blended with sparkling water, mint, and honey", price: 129, image: "images/food/caesar-salad.png", category: "Drink", isVeg: true },

  // ═══════════════════════════════════════════
  // 🍛 Spice Garden (id: 2) — Indian
  // ═══════════════════════════════════════════
  { id: 201, restaurantId: 2, name: "Butter Chicken", description: "Tender tandoori chicken simmered in a velvety tomato-butter-cream gravy", price: 329, image: "images/food/butter-chicken.png", category: "Main", isVeg: false },
  { id: 202, restaurantId: 2, name: "Hyderabadi Biryani", description: "Dum-cooked fragrant basmati rice with succulent chicken, saffron, and crispy onions", price: 379, image: "images/food/biryani.png", category: "Main", isVeg: false },
  { id: 203, restaurantId: 2, name: "Dal Makhani", description: "Slow-cooked black lentils simmered overnight with butter, cream, and spices", price: 259, image: "images/food/butter-chicken.png", category: "Main", isVeg: true },
  { id: 204, restaurantId: 2, name: "Palak Paneer", description: "Cottage cheese cubes in a smooth spinach gravy with garlic and cumin", price: 279, image: "images/food/biryani.png", category: "Main", isVeg: true },
  { id: 205, restaurantId: 2, name: "Chicken Tikka", description: "Smoky charcoal-grilled chicken marinated in yoghurt and aromatic spices", price: 299, image: "images/food/butter-chicken.png", category: "Starter", isVeg: false },
  { id: 206, restaurantId: 2, name: "Paneer Tikka", description: "Chargrilled cottage cheese cubes with bell peppers in spiced yoghurt marinade", price: 249, image: "images/food/biryani.png", category: "Starter", isVeg: true },
  { id: 207, restaurantId: 2, name: "Samosa (2 pcs)", description: "Crispy golden pastry stuffed with spiced potatoes, peas, and cumin", price: 99, image: "images/food/spring-rolls.png", category: "Starter", isVeg: true },
  { id: 208, restaurantId: 2, name: "Tandoori Roti (2 pcs)", description: "Soft whole-wheat flatbread baked in a clay tandoor oven", price: 59, image: "images/food/biryani.png", category: "Starter", isVeg: true },
  { id: 209, restaurantId: 2, name: "Gulab Jamun (4 pcs)", description: "Golden deep-fried milk dumplings soaked in rose-cardamom sugar syrup", price: 149, image: "images/food/butter-chicken.png", category: "Dessert", isVeg: true },
  { id: 210, restaurantId: 2, name: "Rasmalai", description: "Soft spongy cheese dumplings soaked in chilled saffron-cardamom milk", price: 169, image: "images/food/biryani.png", category: "Dessert", isVeg: true },
  { id: 211, restaurantId: 2, name: "Mango Lassi", description: "Thick creamy yoghurt blended with fresh Alphonso mangoes", price: 119, image: "images/food/caesar-salad.png", category: "Drink", isVeg: true },
  { id: 212, restaurantId: 2, name: "Masala Chai", description: "Strong Assam tea brewed with ginger, cardamom, clove, and milk", price: 69, image: "images/food/caesar-salad.png", category: "Drink", isVeg: true },

  // ═══════════════════════════════════════════
  // 🥡 Dragon Wok (id: 3) — Chinese
  // ═══════════════════════════════════════════
  { id: 301, restaurantId: 3, name: "Kung Pao Chicken", description: "Wok-tossed chicken with peanuts, dried red chilies, and Szechuan pepper", price: 299, image: "images/food/kung-pao-chicken.png", category: "Main", isVeg: false },
  { id: 302, restaurantId: 3, name: "Schezwan Fried Rice", description: "Fiery stir-fried rice with vegetables, egg, and spicy Schezwan sauce", price: 249, image: "images/food/kung-pao-chicken.png", category: "Main", isVeg: false },
  { id: 303, restaurantId: 3, name: "Hakka Noodles", description: "Stir-fried egg noodles tossed with crunchy vegetables and soy-chilli sauce", price: 229, image: "images/food/kung-pao-chicken.png", category: "Main", isVeg: true },
  { id: 304, restaurantId: 3, name: "Manchurian Gravy", description: "Crispy veg balls smothered in a tangy soy-ginger-garlic Manchurian sauce", price: 219, image: "images/food/spring-rolls.png", category: "Main", isVeg: true },
  { id: 305, restaurantId: 3, name: "Chilli Chicken Dry", description: "Crispy chicken tossed with green chilies, bell peppers, and soy glaze", price: 279, image: "images/food/kung-pao-chicken.png", category: "Main", isVeg: false },
  { id: 306, restaurantId: 3, name: "Veg Spring Rolls (4 pcs)", description: "Crispy golden wonton rolls stuffed with cabbage, carrots, and glass noodles", price: 179, image: "images/food/spring-rolls.png", category: "Starter", isVeg: true },
  { id: 307, restaurantId: 3, name: "Honey Chilli Potato", description: "Crispy potato fingers tossed in sweet honey-chilli glaze with sesame", price: 199, image: "images/food/spring-rolls.png", category: "Starter", isVeg: true },
  { id: 308, restaurantId: 3, name: "Dim Sum Basket (6 pcs)", description: "Steamed crystal-skin dumplings filled with vegetables and water chestnuts", price: 249, image: "images/food/spring-rolls.png", category: "Starter", isVeg: true },
  { id: 309, restaurantId: 3, name: "Hot & Sour Soup", description: "Spicy and tangy broth with shredded vegetables, tofu, and bamboo shoots", price: 139, image: "images/food/kung-pao-chicken.png", category: "Starter", isVeg: true },
  { id: 310, restaurantId: 3, name: "Toffee Banana", description: "Crispy battered banana drizzled with hot caramel toffee and sesame seeds", price: 169, image: "images/food/spring-rolls.png", category: "Dessert", isVeg: true },
  { id: 311, restaurantId: 3, name: "Iced Lemon Tea", description: "Chilled black tea with fresh lemon juice, honey, and crushed ice", price: 99, image: "images/food/caesar-salad.png", category: "Drink", isVeg: true },

  // ═══════════════════════════════════════════
  // 🍔 Burger Barn (id: 4) — American
  // ═══════════════════════════════════════════
  { id: 401, restaurantId: 4, name: "Classic Smash Burger", description: "Double smashed beef patty, melted cheddar, pickles, secret sauce on brioche", price: 279, image: "images/food/classic-burger.png", category: "Main", isVeg: false },
  { id: 402, restaurantId: 4, name: "BBQ Bacon Burger", description: "Grilled patty with crispy bacon, smoky BBQ sauce, caramelized onions", price: 329, image: "images/food/classic-burger.png", category: "Main", isVeg: false },
  { id: 403, restaurantId: 4, name: "Mushroom Swiss Burger", description: "Juicy patty topped with sautéed mushrooms, Swiss cheese, and truffle aioli", price: 349, image: "images/food/classic-burger.png", category: "Main", isVeg: false },
  { id: 404, restaurantId: 4, name: "Veggie Crunch Burger", description: "Crispy vegetable and bean patty, lettuce, tomato, chipotle mayo", price: 229, image: "images/food/caesar-salad.png", category: "Main", isVeg: true },
  { id: 405, restaurantId: 4, name: "Spicy Chicken Burger", description: "Crispy fried chicken fillet, jalapeño slaw, spicy mayo on a toasted bun", price: 299, image: "images/food/classic-burger.png", category: "Main", isVeg: false },
  { id: 406, restaurantId: 4, name: "Loaded Cheese Fries", description: "Crispy golden fries smothered in cheese sauce, jalapeños, and bacon bits", price: 199, image: "images/food/classic-burger.png", category: "Starter", isVeg: false },
  { id: 407, restaurantId: 4, name: "Onion Rings", description: "Beer-battered crispy onion rings served with smoky chipotle dip", price: 159, image: "images/food/spring-rolls.png", category: "Starter", isVeg: true },
  { id: 408, restaurantId: 4, name: "Chicken Wings (8 pcs)", description: "Crispy fried wings tossed in your choice of Buffalo, BBQ, or Garlic Parm", price: 299, image: "images/food/kung-pao-chicken.png", category: "Starter", isVeg: false },
  { id: 409, restaurantId: 4, name: "Chocolate Brownie Sundae", description: "Warm fudgy brownie topped with vanilla ice cream, hot fudge, and whipped cream", price: 199, image: "images/food/caesar-salad.png", category: "Dessert", isVeg: true },
  { id: 410, restaurantId: 4, name: "Chocolate Shake", description: "Thick and creamy dark chocolate milkshake with whipped cream and cookie crumble", price: 149, image: "images/food/caesar-salad.png", category: "Drink", isVeg: true },
  { id: 411, restaurantId: 4, name: "Oreo Shake", description: "Crushed Oreo cookies blended with vanilla ice cream and cold milk", price: 169, image: "images/food/caesar-salad.png", category: "Drink", isVeg: true },
  { id: 412, restaurantId: 4, name: "Classic Lemonade", description: "Fresh-squeezed lemonade with a hint of mint and crushed ice", price: 99, image: "images/food/caesar-salad.png", category: "Drink", isVeg: true },

  // ═══════════════════════════════════════════
  // 🍣 Sakura Sushi (id: 5) — Japanese
  // ═══════════════════════════════════════════
  { id: 501, restaurantId: 5, name: "Chef's Sushi Platter", description: "Chef's signature selection of 12 pieces — salmon nigiri, tuna maki, and prawn sashimi", price: 699, image: "images/food/sushi-platter.png", category: "Main", isVeg: false },
  { id: 502, restaurantId: 5, name: "Tonkotsu Ramen", description: "18-hour pork-bone broth with chashu, ajitama egg, nori, and scallions", price: 449, image: "images/food/sushi-platter.png", category: "Main", isVeg: false },
  { id: 503, restaurantId: 5, name: "Salmon Teriyaki Don", description: "Grilled salmon fillet glazed with sweet teriyaki sauce on steamed Japanese rice", price: 529, image: "images/food/sushi-platter.png", category: "Main", isVeg: false },
  { id: 504, restaurantId: 5, name: "Chicken Katsu Curry", description: "Crispy panko-crusted chicken cutlet served with Japanese golden curry and rice", price: 399, image: "images/food/kung-pao-chicken.png", category: "Main", isVeg: false },
  { id: 505, restaurantId: 5, name: "Vegetable Tempura Roll", description: "Crispy tempura vegetables rolled with sushi rice and nori, drizzled with spicy mayo", price: 349, image: "images/food/spring-rolls.png", category: "Main", isVeg: true },
  { id: 506, restaurantId: 5, name: "Edamame", description: "Steamed young soybeans lightly seasoned with flaky sea salt", price: 149, image: "images/food/caesar-salad.png", category: "Starter", isVeg: true },
  { id: 507, restaurantId: 5, name: "Gyoza (6 pcs)", description: "Pan-fried Japanese dumplings filled with chicken and vegetables, served with ponzu", price: 229, image: "images/food/spring-rolls.png", category: "Starter", isVeg: false },
  { id: 508, restaurantId: 5, name: "Miso Soup", description: "Traditional dashi broth with silken tofu, wakame seaweed, and spring onions", price: 119, image: "images/food/caesar-salad.png", category: "Starter", isVeg: true },
  { id: 509, restaurantId: 5, name: "Matcha Ice Cream", description: "Handcrafted Japanese green-tea ice cream served with mochi rice cakes", price: 199, image: "images/food/caesar-salad.png", category: "Dessert", isVeg: true },
  { id: 510, restaurantId: 5, name: "Mochi Assortment (3 pcs)", description: "Soft chewy rice cakes filled with red bean, matcha, and strawberry ice cream", price: 249, image: "images/food/caesar-salad.png", category: "Dessert", isVeg: true },
  { id: 511, restaurantId: 5, name: "Japanese Iced Coffee", description: "Single-origin pour-over coffee flash-brewed over ice for bold, smooth flavor", price: 149, image: "images/food/caesar-salad.png", category: "Drink", isVeg: true },

  // ═══════════════════════════════════════════
  // 🥗 Green Bowl (id: 6) — Healthy
  // ═══════════════════════════════════════════
  { id: 601, restaurantId: 6, name: "Grilled Chicken Caesar Salad", description: "Crisp romaine, herb-grilled chicken breast, shaved parmesan, sourdough croutons", price: 279, image: "images/food/caesar-salad.png", category: "Main", isVeg: false },
  { id: 602, restaurantId: 6, name: "Acai Smoothie Bowl", description: "Blended acai berry base topped with granola, sliced banana, berries, and chia seeds", price: 329, image: "images/food/caesar-salad.png", category: "Main", isVeg: true },
  { id: 603, restaurantId: 6, name: "Quinoa Power Bowl", description: "Warm quinoa with roasted sweet potato, avocado, chickpeas, and tahini dressing", price: 309, image: "images/food/caesar-salad.png", category: "Main", isVeg: true },
  { id: 604, restaurantId: 6, name: "Poke Bowl", description: "Fresh diced salmon, edamame, cucumber, mango over sushi rice with sriracha mayo", price: 399, image: "images/food/sushi-platter.png", category: "Main", isVeg: false },
  { id: 605, restaurantId: 6, name: "Mediterranean Wrap", description: "Whole wheat wrap with hummus, falafel, grilled veggies, feta, and tzatziki", price: 259, image: "images/food/caesar-salad.png", category: "Main", isVeg: true },
  { id: 606, restaurantId: 6, name: "Avocado Toast", description: "Sourdough toast topped with smashed avocado, cherry tomatoes, feta, and chilli flakes", price: 229, image: "images/food/caesar-salad.png", category: "Starter", isVeg: true },
  { id: 607, restaurantId: 6, name: "Sweet Potato Soup", description: "Creamy roasted sweet potato soup with coconut milk, ginger, and toasted seeds", price: 179, image: "images/food/caesar-salad.png", category: "Starter", isVeg: true },
  { id: 608, restaurantId: 6, name: "Hummus & Veggie Sticks", description: "Creamy house-made hummus served with carrot, celery, cucumber, and pita chips", price: 169, image: "images/food/spring-rolls.png", category: "Starter", isVeg: true },
  { id: 609, restaurantId: 6, name: "Chia Pudding Parfait", description: "Overnight chia seeds in coconut milk layered with mango coulis and granola", price: 199, image: "images/food/caesar-salad.png", category: "Dessert", isVeg: true },
  { id: 610, restaurantId: 6, name: "Protein Energy Balls (4 pcs)", description: "No-bake oat and peanut butter balls with dark chocolate, flax seeds, and honey", price: 149, image: "images/food/caesar-salad.png", category: "Dessert", isVeg: true },
  { id: 611, restaurantId: 6, name: "Green Detox Juice", description: "Cold-pressed kale, spinach, green apple, ginger, lemon, and celery", price: 179, image: "images/food/caesar-salad.png", category: "Drink", isVeg: true },
  { id: 612, restaurantId: 6, name: "Berry Protein Smoothie", description: "Mixed berries blended with banana, Greek yoghurt, and whey protein", price: 199, image: "images/food/caesar-salad.png", category: "Drink", isVeg: true },
  { id: 613, restaurantId: 6, name: "Turmeric Golden Latte", description: "Warm oat milk infused with turmeric, cinnamon, black pepper, and local honey", price: 149, image: "images/food/caesar-salad.png", category: "Drink", isVeg: true }
];

// Helper: get menus for a restaurant
function getMenuByRestaurant(restaurantId) {
  return menuItems.filter(item => item.restaurantId === restaurantId);
}

// Helper: get restaurant by ID
function getRestaurantById(id) {
  return restaurants.find(r => r.id === id);
}
