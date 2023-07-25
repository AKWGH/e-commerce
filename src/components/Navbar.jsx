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
import { useUserContext } from "../contexts/user_context";

const Navbar = () => {
  // destructure context
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <nav className="navbar">
      {/* logo to go here */}
      <Link className="logo" to="/">
        <h2>logo</h2>
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
        {myUser && (
          <li>
            <Link to="/checkout">checkout</Link>
          </li>
        )}
      </ul>
      <div className="cart-buttons-control">
        <CartButtons />
      </div>
    </nav>
  );
};

export default Navbar;
