import Proptypes from "prop-types";

import SearchIcon from "@mui/icons-material/Search";

import "./style.scss";

const MyGarden = () => {
  return (
    <div className="myGarden">
      <div className="myGarden-data">
        <h1 className="myGarden-data-title">
          Ajoutez des nouvelles plantes dans votre jardin !
        </h1>
        <p className="myGarden-data-description">
          Si votre plante n'existe pas encore dans notre base de données,
          n'hésitez pas à la rajouter !
        </p>
        <div className="myGarden-data-search">
          <input
            type="search"
            placeholder="Rechercher une plante dans la base de données..."
            className="myGarden-data-search-input"
          />
          <SearchIcon className="myGarden-data-search-icon" />
        </div>
      </div>
      <div className="myGarden-garden">
        <h1 className="myGarden-garden-title">Mon jardin</h1>
        <div className="myGarden-garden-search">
          <input
            type="search"
            placeholder="Rechercher une plante dans mon jardin..."
            className="myGarden-garden-search-input"
          />
          <SearchIcon className="myGarden-garden-search-icon" />
        </div>
        <div className="myGarden-garden-plants"></div>
      </div>
    </div>
  );
};

MyGarden.propTypes = {};

export default MyGarden;
