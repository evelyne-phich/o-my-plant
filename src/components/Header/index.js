import "./style.scss";
import homeHeaderImage from "../../assets/img/home/home-bgd.jpg";
import logo from "../../assets/img/logo/logo.svg";

console.log(homeHeaderImage);

const Header = () => {
  return (
    <header className="header">
      <div className="header-part-left">
        <img
          className="header-img"
          src={homeHeaderImage}
          alt="background plant"
        />
      </div>
      <div className="header-part-right"></div>
    </header>
  );
};

export default Header;
