import "./style.scss";
import logo from "../../assets/img/logo/logo-footer.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left-part">
        <img
          src={logo}
          className="footer-logo-img footer-left-part-logo"
          alt="logo O'My Plant"
        />
        <h2>O'My Plant</h2>
        <p>
          <br /> Même vos plantes
          <br /> ont leur agenda.
        </p>
      </div>

      <div className="footer-middle-part">
        <h1>Liens utiles</h1>
        <ul>
          <a href="#">
            <li>Mentions légales</li>
          </a>
          <a href="#">
            <li>Politiques de confidentialité</li>
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
          <a href="mailto:oomyplant@gmail.com">omyplant@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
