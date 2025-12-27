import React from "react";
import "../styles/common.css";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          {/* BRAND */}
          <a href="/" className="navbar-brand">
            <span className="first-name">Pavan</span>
            <span className="last-name ms-1">Kumar</span>
          </a>

          {/* MOBILE TOGGLE (future-ready) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAV LINKS (EMPTY FOR NOW) */}
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto">
              {/* Add nav items later */}
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;
