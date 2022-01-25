import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo/logo.svg";

import "./style.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../Button";

const Nav = () => {
  const getActiveClassname = ({ isActive }) =>
    isActive ? "nav-menu-link nav-menu-link--active" : "nav-menu-link";
  /*
  const [navStatus, setNavStatus] = useState("transparent");
  const [windowStatus, setWindowStatus] = useState(0);*/
  /*
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setWindowStatus(document.scrollingElement.scrollTop);
      if (windowStatus >= 20) {
        setNavStatus("color"); // the class where you add the chosen background below 15
      } else {
        setNavStatus("transparent"); // the class where you add the chosen background after 15
      }
    });
  }, [windowStatus]);*/

  const user = useSelector((state) => state.user);

  return (
    <nav className={`nav`}>
      <div className="nav-logo">
        <Link
          className="nav-logo-container"
          to="/"
          style={{ textDecoration: "none" }}
        >
          <img src={logo} className="nav-logo-img" alt="logo O'My Plant" />
          <h1 className="nav-title">O'My Plant</h1>
        </Link>
      </div>
      <div className="nav-menu">
        <NavLink className={getActiveClassname} to="/">
          Accueil
        </NavLink>
        <NavLink className={getActiveClassname} to="/about">
          A propos
        </NavLink>
        {(user.role === "member" || user.role === "admin") && (
          <>
            <NavLink className={getActiveClassname} to="/my-garden">
              Mon jardin
            </NavLink>
            <NavLink className={getActiveClassname} to="/water-today">
              Water today
            </NavLink>
          </>
        )}
        {user.role === "admin" && (
          <NavLink className={getActiveClassname} to="/admin">
            Admin
          </NavLink>
        )}
        {!user.logged && (
          <>
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
          </>
        )}
        {user.logged && (
          <div className="nav-menu-loggedMessage">Bonjour {user.pseudo}</div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
