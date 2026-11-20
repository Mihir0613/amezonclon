import React from "react";

function Sidebar({ category, setCategory }) {
  const categories = ["All", "Electronics", "Fashion", "Accessories", "Tattoo"];

  return (
    <aside className="sidebar">
      <h3>Filters</h3>

      <div className="filter-group">
        <h4>Category</h4>

        {categories.map((item) => (
          <label key={item}>
            <input
              type="radio"
              name="category"
              checked={category === item}
              
              onChange={() => setCategory(item)}
            />
            {item}
          </label>
        ))}
      </div>

      <hr />

      <div className="filter-group">
        <h4>Customer Reviews</h4>
        <p>⭐⭐⭐⭐⭐ & Up</p>
        <p>⭐⭐⭐⭐ & Up</p>
        <p>⭐⭐⭐ & Up</p>
      </div>

      <hr />

      <div className="filter-group">
        <h4>Price</h4>
        <p>Under ₹1,000</p>
        <p>₹1,000 - ₹5,000</p>
        <p>₹5,000 - ₹20,000</p>
        <p>Above ₹20,000</p>
      </div>
    </aside>
  );
}

export default Sidebar;
