import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
<div>
  <nav>
    <div className="nav-wrapper">
      <a className="brand-logo">Title</a>
      <a href="# " data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className={ window.location.pathname === "/" ? "active" : "tab" }>
          <Link to="/">Home</Link>
        </li>
        <li className={ window.location.pathname === "/signup" ? "active" : "tab" }>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li className={ window.location.pathname === "/login" ? "active" : "tab" }>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/signup">Sign Up</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
  </ul>
</div>
);

export default NavTabs;