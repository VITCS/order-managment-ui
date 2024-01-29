// Header.js

import React from "react";
import "./Header.css"; // Import your CSS file
import seetmarlogo from "../seetmar-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={seetmarlogo} alt="Setimar Logo" className="logo" />
      </div>
    </div>
  );
};

export default Header;
