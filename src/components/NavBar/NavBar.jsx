/* eslint-disable no-unused-vars */
import React from "react";
import "./nav.css";

function NavBar() {
  return (
    <header className="nav-bar">
      <nav>
        <img src="logo dark.svg" alt="" />
        <h1>LH Chat</h1>
        <div className="user"></div>
      </nav>
    </header>
  );
}

export default NavBar;
