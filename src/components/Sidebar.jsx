import React from "react";
// links data
import { links } from "../utils/data";
// react-router
import { Link } from "react-router-dom";
// react-icons
import { FaTimes } from "react-icons/fa";
// components
import CartButtons from "./CartButtons";
// contexts
import { useProductsContext } from "../contexts/products_context";
import { useUserContext } from "../contexts/user_context";

const Sidebar = () => {
  // destructure from context
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  const { myUser } = useUserContext();

  return (
    <aside
      className={
        isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
      }
    >
      <div className="sidebar-header">
        <Link to="/" onClick={closeSidebar}>
          <h2 className="logo">Logo</h2>
        </Link>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="sidebar-links">
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <Link onClick={closeSidebar} to={url}>
                {text}
              </Link>
            </li>
          );
        })}
        {myUser && (
          <li>
            <Link onClick={closeSidebar} to="/checkout">
              checkout
            </Link>
          </li>
        )}
      </ul>
      <div className="centre-buttons">
        <CartButtons />
      </div>
    </aside>
  );
};

export default Sidebar;
