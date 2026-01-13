// Navbar.jsx
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="navbar-container">
      <div className="nav-left">
        {/* Logo */}
        <div className="nav-logo">
          <FaShoppingCart size={24} />
          <span>KART</span>
        </div>
      </div>

      {/* Menu Items, Cart & Login */}
      <div className="nav-actions">
        <ul className="nav-menu">
          <li className="nav-item">Home</li>
          <li className="nav-item">Products</li>
        </ul>

        <div className="cart-icon-wrapper">
          <FaShoppingCart size={22} className="text-gray-700 hover:text-pink-500" />
          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </div>

        <button className="login-btn">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
