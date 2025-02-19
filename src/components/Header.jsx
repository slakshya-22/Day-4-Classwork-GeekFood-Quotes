import React from "react";
import "../index.css";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>GeekFoods</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Quotes</a>
          </li>
          <li>
            <a href="#">Restaurants</a>
          </li>
          <li>
            <a href="#">Foods</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="get-started">Get Started</button>
    </header>
  );
}

export default Header;
