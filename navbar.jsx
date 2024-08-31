import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menu, setMenu] = useState("Grain trading");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>FARMERS_CONEECT</p>
      </div>
      <ul className="nav-menu">
        <li 
          className={menu === "Grain trading" ? "active" : ""} 
          onClick={() => setMenu("Grain trading")}
        >
          Grain trading
        </li>
        <li 
          className={menu === "grain marketing" ? "active" : ""} 
          onClick={() => setMenu("grain marketing")}
        >
          grain marketing
        </li>
        <li 
          className={menu === "careers" ? "active" : ""} 
          onClick={() => setMenu("careers")}
        >
          careers
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>login</button>
        <ul className="extra">
          <li>1926261306</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
