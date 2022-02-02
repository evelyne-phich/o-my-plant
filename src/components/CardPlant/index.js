import PropTypes from "prop-types";
import "./style.scss";

const CardPlant = ({ title, contentButton, img, onClick }) => (
  <div className="card" onClick={onClick}>
    <div className="card-image">
      <img src={img} alt="photo plant"></img>
    </div>
    <div className="card-bottom-part">
      <div className="card-desc">
        <p className="card-desc-title">{title}</p>
      </div>
      {contentButton && (
        <div className="card-button">
          <button>{contentButton}</button>
        </div>
      )}
    </div>
  </div>
);

CardPlant.propTypes = {
  title: PropTypes.string,
  contentButton: PropTypes.string,
  img: PropTypes.string,
  onClick: PropTypes.func,
};

export default CardPlant;
