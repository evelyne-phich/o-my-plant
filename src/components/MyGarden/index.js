import Proptypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

import "./style.scss";

import CardPlant from "../CardPlant";

const MyGarden = () => {
  return (
    <div className="myGarden">
      <h1 className="myGarden-title">Mon jardin</h1>
      <div className="myGarden-top">
        <div className="myGarden-search">
          <input
            type="search"
            placeholder="Rechercher une plante"
            className="myGarden-search-input"
          />
          <SearchIcon className="myGarden-search-icon" />
        </div>
        <Link to="/add-plant" className="myGarden-add-plant">
          Ajouter une plante
        </Link>
      </div>
      <div className="myGarden-plants">
        <CardPlant contentButton="Modifier" />
        <CardPlant contentButton="Modifier" />
        <CardPlant contentButton="Modifier" />
        <CardPlant contentButton="Modifier" />
        <CardPlant contentButton="Modifier" />
        <CardPlant contentButton="Modifier" />
        <CardPlant contentButton="Modifier" />
        <CardPlant contentButton="Modifier" />
        <CardPlant contentButton="Modifier" />
      </div>
    </div>
  );
};

export default MyGarden;
