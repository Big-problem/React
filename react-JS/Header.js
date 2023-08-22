import React from "react";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <img src="Image/react-logo.png" className="header-img"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
