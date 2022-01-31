import Proptypes from "prop-types";
import "./style.scss";

const CardPlant = ({ title, contentButton, img }) => (
  <div className="card">
    <div className="card-image">
      <img src={img} alt="photo plant"></img>
    </div>
    <div className="card-bottom-part">
      <div className="card-desc">
        <p className="card-desc-title">{title}</p>
      </div>
      <div className="card-button">
        <button>{contentButton}</button>
      </div>
    </div>
  </div>
);

CardPlant.propTypes = {};

export default CardPlant;
