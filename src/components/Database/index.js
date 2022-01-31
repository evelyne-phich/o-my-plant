import SearchIcon from "@mui/icons-material/Search";

import CardPlant from "../CardPlant";

import "./style.scss";

const Database = () => {
  return (
    <div className="database">
      <h1 className="database-title">
        Ajoutez des nouvelles plantes dans votre jardin !
      </h1>
      <p className="database-description">
        Si votre plante n'existe pas encore dans notre base de données,
        n'hésitez pas à la rajouter !
      </p>
      <div className="database-search">
        <input
          type="search"
          placeholder="Rechercher une plante"
          className="database-search-input"
        />
        <SearchIcon className="database-search-icon" />
      </div>
      <div className="database-plants">
        <CardPlant contentButton="Ajouter" />
      </div>
    </div>
  );
};

export default Database;
