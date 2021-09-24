import React from "react";
import { Link } from "react-router-dom";
import "./nav.style.css";
const Nav = () => {
  return (
    <nav className="nav-bar">
      <div className="netflix-logo-container">
        <a href="http://localhost:3000/" className="netflix-logo-container">
          <img src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="netflix-logo" className="netflix-logo"></img>
        </a>
      </div>
      <ul className="nav-menu">
        <li>Movie{/* <Link to="www.naver.com">Movie</Link> */}</li>
        <li>TV{/* <Link to="">Tv</Link> */}</li>
        <li>
          Search
          {/* <Link>Search</Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
