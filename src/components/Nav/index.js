import { Link, NavLink } from "react-router-dom";

import "./style.scss";

import logo from "../../assets/images/logo.svg";

import Button from "../Button";

const Nav = () => {
  const getActiveClassname = ({ isActive }) =>
    isActive ? "menu-link menu-link--active" : "menu-link";

  return (
    <nav className="nav">
      <Link className="nav-logo" to="#">
        <img src={logo} alt="logo O'My Plant" />
        <h1 className="nav-title">O'My Plant</h1>
      </Link>
      <div className="nav-menu">
        <NavLink className={getActiveClassname} to="/">
          Accueil
        </NavLink>
        <NavLink className={getActiveClassname} to="/about">
          A propos
        </NavLink>
        <Button />
        <Button />
      </div>
    </nav>
  );
};

export default Nav;
