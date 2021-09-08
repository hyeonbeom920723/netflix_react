import React from "react";
import "./nav.style.css";
const Nav = () => {
  return (
    <nav className="nav-bar">
      <div className="netflix-logo-container">
        <a href="http://localhost:3000/" className="netflix-logo-container">
          <img
            src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            alt="netflix-logo"
            className="netflix-logo"
          ></img>
        </a>
      </div>
      <ul className="nav-menu">
        <li>Movie</li>
        <li>TV</li>
        <li>Search</li>
      </ul>
    </nav>
  );
};

export default Nav;
