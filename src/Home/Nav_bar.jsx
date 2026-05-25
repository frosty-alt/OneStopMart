import React, { useState, useEffect } from 'react'
import { FaShoppingCart, FaUser, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Nav_bar.css';

const placeholders = [
  'Search for Apples...',
  'Search for Milk...',
  'Search for Bread...',
  'Search for Eggs...',
  'Search for Rice...',
  'Search for Chicken...',
  'Search for Tomatoes...',
  'Search for Noodles...',
];

const Nav_bar = () => {
  const [query, setQuery] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPlaceholderIndex(i => (i + 1) % placeholders.length);
        setFade(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-inner">

        {/* Brand */}
        <Link to="/Home" className="nav-brand">
          <img src="https://onestopmart.sgp1.cdn.digitaloceanspaces.com/adaptive-icon.png" alt="OneStopMart logo" />
          <span>OneStopMart</span>
        </Link>

        {/* Nav Links */}
        <div className="navitems">
          <Link to="/bakery">Bakery</Link>
          <Link to="/deals">Deals</Link>
          <Link to="/local-farms">Local Farms</Link>
          <Link to="/organic">Organic</Link>
          <Link to="/groceries">Groceries</Link>
        </div>

        {/* Search */}
        <div className={`nav-search ${focused ? 'nav-search-expanded' : ''}`}>
          <FaSearch className="search-icon" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholders[placeholderIndex]}
            className={fade ? 'placeholder-fade-in' : 'placeholder-fade-out'}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </div>

        {/* Location */}
        <div className="nav-location">
          <FaMapMarkerAlt />
          <span>Kathmandu, Nepal</span>
        </div>

        {/* Icons */}
        <div className="nav-icons">
          <Link to="/cart" className="nav-icon-btn cart">
            <FaShoppingCart />
            <span>Cart</span>
            <span className="cart-count">3</span>
          </Link>
          <Link to="/profile" className="nav-icon-btn">
            <FaUser />
            <span>Profile</span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Nav_bar;
