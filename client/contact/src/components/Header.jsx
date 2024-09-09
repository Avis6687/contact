import React, { useState } from "react";
import logo from "../assets/Logo.png";
import menu_icon from "../assets/menu-icon.png";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="container">
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu ? "show" : ""}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about-Us">About Us</a>
        </li>
        <li>
          <a href="#contact-us">Contact Us</a>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Header;
