const products = [
  {name: "Smartphone", category: "Electronics", price: 499, rating: 4.5},
  {name: "Laptop", category: "Electronics", price: 899, rating: 4.8},
  {name: "T-Shirt", category: "Clothing", price: 25, rating: 4.1},
  {name: "Jeans", category: "Clothing", price: 60, rating: 4.3},
  {name: "Book: JS Basics", category: "Books", price: 15, rating: 4.7},
  {name: "Book: CSS Mastery", category: "Books", price: 20, rating: 4.9}
];

const productsGrid = document.getElementById("productsGrid");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

function renderProducts(list) {
  productsGrid.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: $${p.price}</p>
      <p>Rating: ⭐ ${p.rating}</p>
    `;

    productsGrid.appendChild(card);
  });
}

function updateProducts() {
  let filtered = [...products];
  const category = categoryFilter.value;
  const sort = sortFilter.value;

  if(category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if(sort === "price-asc") filtered.sort((a,b)=> a.price - b.price);
  else if(sort === "price-desc") filtered.sort((a,b)=> b.price - a.price);
  else if(sort === "rating-desc") filtered.sort((a,b)=> b.rating - a.rating);

  renderProducts(filtered);
}

categoryFilter.addEventListener('change', updateProducts);
sortFilter.addEventListener('change', updateProducts);

renderProducts(products);