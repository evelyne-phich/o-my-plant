import "./style.scss";
import homeHeaderImage from "../../assets/img/home/home-bgd.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-part-left">
        <div className="header-part-left-contain">
          <h1>O'My Plant</h1>
          <p>
            Même vos plantes
            <br /> ont leur agenda
          </p>
        </div>
      </div>
      <div className="header-part-right"></div>
    </header>
  );
};

export default Header;
