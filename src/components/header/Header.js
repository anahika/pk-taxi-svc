import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="d-flex p-3 justify-content-center">
      <nav className="headerMenu">
        <NavLink to="/" className="p-2">
          Home
        </NavLink>{" "}
        |
        <NavLink to="/about-us" className="p-2">
          {" "}
          About Us
        </NavLink>{" "}
        |
        <NavLink to="/contact-us" className="p-2">
          {" "}
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
