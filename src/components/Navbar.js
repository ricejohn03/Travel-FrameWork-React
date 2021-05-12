import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMoblieMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMoblieMenu}>
            TRVL <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMoblieMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMoblieMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-links" onClick={closeMoblieMenu}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links-moblie"
                onClick={closeMoblieMenu}
              >
                Sign Up
              </Link>
            </li>
            {click && <Button buttonstyle="btn--outline">SIGN UP</Button>}
          </ul>
          {button && <Button buttonstyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
