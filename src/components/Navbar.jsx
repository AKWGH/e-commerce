import React from "react";
// links data
import { links } from "../utils/data";
// react-router
import { Link } from "react-router-dom";
// react-icons
import { FaBars } from "react-icons/fa";
// components
import CartButtons from "./CartButtons";
// context
import { useProductsContext } from "../contexts/products_context";

const Navbar = () => {
  // destructure context
  const { openSidebar } = useProductsContext();
  return (
    <nav className="navbar">
      {/* logo to go here */}
      <Link to="/">
        <h1>logo</h1>
      </Link>
      {/* logo end */}
      <button type="button" className="toggle-nav" onClick={openSidebar}>
        <FaBars />
      </button>
      <ul className="nav-links">
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
      </ul>
      <div className="cart-buttons-control">
        <CartButtons />
      </div>
    </nav>
  );
};

export default Navbar;
