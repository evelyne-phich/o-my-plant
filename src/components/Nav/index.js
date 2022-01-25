import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo/logo.svg";

import "./style.scss";
import { useState, useEffect } from "react";
import Button from "../Button";

const Nav = () => {
  const getActiveClassname = ({ isActive }) =>
    isActive ? "nav-menu-link nav-menu-link--active" : "nav-menu-link";

  const [navStatus, setNavStatus] = useState("transparent");
  const [windowStatus, setWindowStatus] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setWindowStatus(document.scrollingElement.scrollTop);
      if (windowStatus >= 20) {
        setNavStatus("color"); // the class where you add the chosen background below 15
      } else {
        setNavStatus("transparent"); // the class where you add the chosen background after 15
      }
    });
  }, [windowStatus]);

  return (
    <nav className={`nav ${navStatus}`}>
      <Link className="nav-logo" to="#" style={{ textDecoration: "none" }}>
        <div className="nav-logo-container">
          <img src={logo} className="nav-logo-img" alt="logo O'My Plant" />
          <h1 className="nav-title">O'My Plant</h1>
        </div>
      </Link>
      <div className="nav-menu">
        <NavLink className={getActiveClassname} to="/">
          Accueil
        </NavLink>
        <NavLink className={getActiveClassname} to="/about">
          A propos
        </NavLink>
        <Link to="/login">
          <Button
            className="nav-menu-link nav-menu-link-btn nav-menu-link-login"
            buttonContent="Connexion"
          />
        </Link>
        <Link to="/subscribe">
          <Button
            className="nav-menu-link nav-menu-link-btn nav-menu-link-signup"
            buttonContent="Inscription"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
