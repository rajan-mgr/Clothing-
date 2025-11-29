// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FaShoppingCart } from "react-icons/fa"; // Using react-icons for cart icon

function Header() {
  return (
    <header>
        <Link to="/">
      <h1 className="logo">Store</h1>
      </Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/explore">Explore</Link></li>
         
        </ul>
      </nav>
       <div className="nav-right">
        <Link to="/cart">
          <FaShoppingCart size={24} color="black" />
        </Link>
        </div>
    </header>
  );
}

export default Header;
