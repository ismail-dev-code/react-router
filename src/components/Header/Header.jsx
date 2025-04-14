import React from "react";
import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2>this is header</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/mobiles">Mobiles</Link>
        <Link to="/laptops">Laptops</Link>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default Header;
