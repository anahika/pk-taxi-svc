import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex p-3 justify-content-center bg-blue">
      <nav className="headerMenu text-warning">
        <NavLink to="/" className="p-2 text-warning">
          Home
        </NavLink>{" "}
        |
        <NavLink to="/destinations" className="p-2 text-warning">
          {" "}
          Destinations
        </NavLink>
        |
        <NavLink to="/contact-us" className="p-2 text-warning">
          {" "}
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
