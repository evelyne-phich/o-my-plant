import Proptypes from "prop-types";
import errImg from "../../assets/img/404/404logo.svg";
import "./style.scss";

const Page404 = () => (
  <div className="page-404">
    <h1 className="page-404-h1">
      Oops ! Vous ne
      <br /> devriez pas êtes ici
    </h1>
    <img className="page-404-img" src={errImg} />
  </div>
);

Page404.propTypes = {};

export default Page404;
