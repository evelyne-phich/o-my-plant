import errImg from "../../assets/img/404/404logo.svg";
import "./style.scss";

const Page404 = () => (
  <div className="page-404">
    <h1 className="page-404-h1">
      Oops ! Vous ne
      <br /> devriez pas être ici !
    </h1>
    <img className="page-404-img" src={errImg} />
  </div>
);

export default Page404;
