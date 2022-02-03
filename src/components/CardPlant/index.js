import PropTypes from "prop-types";
import "./style.scss";

const CardPlant = ({
  title,
  contentButton,
  img,
  onCardClick,
  onAddClick,
  value,
}) => (
  <div className="card" onClick={onCardClick}>
    <div className="card-image">
      <img src={img} alt={title} />
    </div>
    <div className="card-bottom-part">
      <div className="card-desc">
        <p className="card-desc-title">{title}</p>
      </div>
      {contentButton && (
        <div className="card-button">
          <button onClick={onAddClick} value={value}>
            {contentButton}
          </button>
        </div>
      )}
    </div>
  </div>
);

CardPlant.propTypes = {
  title: PropTypes.string,
  contentButton: PropTypes.string,
  img: PropTypes.string,
  onCardClick: PropTypes.func,
  onAddClick: PropTypes.func,
  value: PropTypes.number,
};

export default CardPlant;
