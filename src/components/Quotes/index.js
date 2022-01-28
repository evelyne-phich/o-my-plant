import Proptypes from "prop-types";
import "./style.scss";

const Quotes = ({ page, quote, author }) => {
  return (
    <div className={page}>
      <p className="contain">{quote}</p>
      <p className="author">{author}</p>
    </div>
  );
};

Quotes.propTypes = {
  page: Proptypes.string.isRequired,
  quote: Proptypes.element.isRequired,
  author: Proptypes.string.isRequired,
};

export default Quotes;
