import Proptypes from "prop-types";
import "./style.scss";

const Quotes = ({ page }) => (
  <div className={page}>
    <p className="contain">
      “Si tu veux des mangues,
      <br /> plante un manguier"
    </p>
    <p className="author">Proverbe Créole</p>
  </div>
);

Quotes.propTypes = {};

export default Quotes;
