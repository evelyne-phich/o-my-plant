import Proptypes from "prop-types";
import "./style.scss";
import logo from "../../assets/img/logo/logo-footer.svg";
import Button from "../Button";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left-part">
        <img
          src={logo}
          className="footer-logo-img footer-left-part-logo"
          alt="logo O'My Plant"
        />
        <p>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit.
          <br /> Vivamus tristique velit vel <br />
          pellentesque.
        </p>
      </div>

      <div className="footer-middle-part">
        <h1>Liens utiles</h1>
        <ul>
          <a href="#">
            <li>Mentions légales</li>
          </a>
          <a href="#">
            <li>Politiques confidentialité</li>
          </a>
          <a href="#">
            <li>CGU</li>
          </a>
        </ul>
      </div>

      <div className="footer-right-part">
        <p>
          Nous contacter : <br />
          <br />
          <a href="mailto:oomyplant@gmail.com">oomyplant@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};
Footer.propTypes = {};

export default Footer;
