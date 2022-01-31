import Proptypes from "prop-types";
import "./style.scss";

const CardPlant = () => (
  <div className="card">
    <div className="card-image"></div>
    <div className="card-desc">
      <p>titre</p>
      <p>Description</p>
    </div>
    <div className="card-button">
      <button>Modifier</button>
    </div>
  </div>
);

CardPlant.propTypes = {};

export default CardPlant;
