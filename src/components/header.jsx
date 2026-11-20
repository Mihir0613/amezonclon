import React from "react";

function Header({ setSearch, cart }) {
  return (
    <>
      <header className="header">
        <div className="logo">
          amazon<span>.in</span>
        </div>

        <div className="location">
          <small>Deliver to</small>
          <h4>India</h4>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>🔍</button>
        </div>

        <div className="header-links">
          <div>
            <small>Hello, User</small>
            <h4>Account</h4>
          </div>

          <div>
            <small>Returns</small>
            <h4>& Orders</h4>
          </div>

          <div className="cart">🛒 Cart ({cart})</div>
        </div>
      </header>

      <nav className="navbar">
        <span>☰ All</span>
        <span>Today's Deals</span>
        <span>Customer Service</span>
        <span>Best Sellers</span>
        <span>New Releases</span>
        <span>Electronics</span>
      </nav>
    </>
  );
}

export default Header;
