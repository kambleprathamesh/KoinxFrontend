import React from "react";
import { NavLink } from "react-router-dom";

import "../Header/Header.css";
import KoinXLogo from "../../assets/KoinXLogo.png";

const Header = () => {
  return (
    <header className="headerContainer">
      <div className="logoContainer">
        <img src={KoinXLogo} alt="KoinX Logo" loading="lazy" />
      </div>
      <nav className="navtabs">
        <div>
          {" "}
          <NavLink
            to="/cryptoTax"
            aria-label="Crypto Tax"
            activeClassName="activeLink"
          >
            Crypto Taxes
          </NavLink>
        </div>
        <div>
          {" "}
          <NavLink
            to="/tools"
            aria-label="Free Tools"
            activeClassName="activeLink"
          >
            Free Tools
          </NavLink>
        </div>
        <div>
          {" "}
          <NavLink
            to="/resources"
            aria-label="Resource Center"
            activeClassName="activeLink"
          >
            Resource Center
          </NavLink>
        </div>
        <div className="speciaBtn">
          <button>
            <NavLink
              to="/get-started"
              aria-label="Get Started"
              activeClassName="activeLink"
            >
              Get Started
            </NavLink>
          </button>{" "}
        </div>
      </nav>
    </header>
  );
};

export default Header;
