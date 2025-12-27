import React from "react";
import "../styles/common.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="container">

          {/* BRAND */}
          <a href="/" className="navbar-brand">
            <span className="first-name">Pavan</span>
            <span className="last-name ms-1">Kumar</span>
          </a>

        </div>
      </nav>
    </header>
  );
}

export default Header;
