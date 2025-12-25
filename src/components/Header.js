import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/common.css';  
// changes
function Header() {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <span className="site-name">
              <span className="first-name">Pavan</span>
            <span className="last-name">Kumar</span>
          </span>
        </div>
        <ul>
          {/* <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              Home
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
