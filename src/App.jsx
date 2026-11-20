import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Product from "./components/Product";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState(0);

  const products = [
    {
      id: 1,
      name: "HP Laptop",
      category: "Electronics",
      price: 55000,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 1999,
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 3,
      name: "Smart Watch",
      category: "Accessories",
      price: 2999,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 4,
      name: "Running Shoes",
      category: "Fashion",
      price: 2499,
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 5,
      name: "Digital Camera",
      category: "Electronics",
      price: 35000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    },
    {
      id: 6,
      name: "Backpack",
      category: "Accessories",
      price: 1499,
      rating: 4.0,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    },
    {
      id: 7,
      name: "Backpack",
      category: "Accessories",
      price: 799,
      rating: 3.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqCO6SchfN3jAoBR-7A471pb-xwfudwGdp5frklrUZwA&s=10",
    },
    {
      id: 8,
      name: "full kit",
      category: "Accessories",
      price: 5999,
      rating: 4.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltNm1TOD5p0zorFhq0cb6wtEIkXt6yPw3XSyfUq7V0A&s=10",
    },
    {
      id: 9,
      name: "puma speedcat",
      category: "Fashion",
      price: 9999,
      rating: 4.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9z0cqU4i0LP1OF9qnlHcQYroZmJRVXLlIqvnV41uDHg&s=10",
    },
    {
      id: 10,
      name: "ink tattoo",
      category: "Tattoo",
      price: 299,
      rating: 4.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsEyRc3COZfyPsRxsXk5U0H6Y9AloN02tegC3IzMvew&s",
    },
  ];

  const filteredProducts = products.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category)
    );
  });

  return (
    <>
      <Header setSearch={setSearch} cart={cart} />

      <div className="main-container">
        <Sidebar category={category} setCategory={setCategory} />

        <div className="products-section">
          <h2>Discover Products</h2>
          <p>Explore our latest collection</p>

          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <Product
                  key={item.id}
                  data={item}
                  addToCart={() => setCart(cart + 1)}
                />
              ))
            ) : (
              <h3>No Products Found!</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
