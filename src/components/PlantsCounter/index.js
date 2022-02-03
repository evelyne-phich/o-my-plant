import Proptypes from "prop-types";
import { useEffect } from "react";
import axios from "axios";

import "./style.scss";

const PlantsCounter = () => {
  // let numberOfPlants = 0;

  // useEffect(() => {
  //       axios
  //     .get("https://omyplant.herokuapp.com/plantdb")
  //     .then((res) => {
  //       console.log(res.data);
  //       numberOfPlants = res.data;
  //       return numberOfPlants;
  //     })
  //     .catch((err) => {
  //       console.log("erreur: ", err.response.data);
  //     });
  // }, []);

  return (
    <div className="section-plant-counter">
      <div className="plant-counter">
        {/* <p>{`Grâce à vous, déjà ${numberOfPlants} plantes recensées`}</p> */}
      </div>
    </div>
  );
};

PlantsCounter.propTypes = {};

export default PlantsCounter;
