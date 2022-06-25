import React from "react";
import "./Style/Navbar.css";

function Navbar() {
  return (
    <>
      <header>
        <div id="menu" className="fas fa-bars"></div>

        <a href="" className="logo">
          EduLogy
        </a>

        <nav className="navbar">
          <ul>
            <li>
              <a className="active" href="#home">
                home
              </a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#course">course</a>
            </li>
            <li>
              <a href="#team">teacher</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>

        <div id="login" className="fas fa-user-circle"></div>
      </header>
    </>
  );
}

export default Navbar;
