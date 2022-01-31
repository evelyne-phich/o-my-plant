import Proptypes from "prop-types";
import CardPlant from "../CardPlant";
import "./style.scss";

const MyGarden = () => (
  <div className="mygarden">
    <CardPlant />
  </div>
);

MyGarden.propTypes = {};

export default MyGarden;
