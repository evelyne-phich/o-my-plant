import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo/logo.svg";

import "./style.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../Button";
import AccountMenu from "../AccountMenu";

const Nav = () => {
  const getActiveClassname = ({ isActive }) =>
    isActive ? "nav-menu-link nav-menu-link--active" : "nav-menu-link";

  const [navStatus, setNavStatus] = useState("transparent");
  const [windowStatus, setWindowStatus] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setWindowStatus(document.scrollingElement.scrollTop);
      if (location.pathname === "/") {
        if (windowStatus >= 700) {
          setNavStatus("plain"); // the class where you add the chosen background below 15
        } else {
          setNavStatus("transparent"); // the class where you add the chosen background after 15
        }
      }
    });
  }, [windowStatus, location]);

  const user = useSelector((state) => state.user);

  return (
    <nav className={`nav ${location.pathname === "/" ? navStatus : "plain"}`}>
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
            <NavLink className={getActiveClassname} to="/add-plant">
              Ajouter une plante
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
            <Link to="/login" className="no-underline">
              <Button
                className="nav-menu-link nav-menu-link-btn nav-menu-link-login"
                buttonContent="Connexion"
              />
            </Link>
            <Link to="/subscribe" className="no-underline">
              <Button
                className="nav-menu-link nav-menu-link-btn nav-menu-link-signup"
                buttonContent="Inscription"
              />
            </Link>
          </>
        )}
        {user.logged && (
          <div className="nav-menu-loggedMessage">
            <span className="nav-menu-loggedMessage-pseudo">
              Bonjour {user.pseudo}
            </span>{" "}
            <AccountMenu />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
