import React from "react";

function Product({ data, addToCart }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={data.image} alt={data.name} />
      </div>

      <div className="product-info">
        <h3>{data.name}</h3>

        <p className="rating">⭐ {data.rating} / 5</p>

        <h2>₹{data.price.toLocaleString("en-IN")}</h2>

        <p className="delivery">FREE Delivery</p>

        <button className="add-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
