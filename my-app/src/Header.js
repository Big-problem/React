import React from "react";
// import logo from "./src/Image/react-logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <img src="./images/React-logo.png" className="header-img"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
