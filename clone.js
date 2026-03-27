const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
  },
  {
    id: 2,
    name: "Headphones",
    price: 2000,
    image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._SX679_.jpg"
  },
  {
    id: 3,
    name: "Smartphone",
    price: 30000,
    image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 5000,
    image: "https://m.media-amazon.com/images/I/61y2VVWcGBL._SX679_.jpg"
  }
];

let cart = [];

function displayProducts() {
  const container = document.getElementById("products-container");
  container.innerHTML = ""; // clear before adding

  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);

  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

displayProducts();