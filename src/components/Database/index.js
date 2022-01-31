import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import axios from "axios";

import CardPlant from "../CardPlant";

import "./style.scss";

const Database = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://omyplant.herokuapp.com/plantdb", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setPlants(res.data);
      })
      .catch((err) => {
        console.log("erreur: ", err.response.data);
      });
  }, []);

  return (
    <div className="database">
      <h1 className="database-title">
        Ajoutez des plantes dans votre jardin !
      </h1>
      <p className="database-description">
        Si votre plante n'existe pas encore dans notre base de données,
        n'hésitez pas à la rajouter !
      </p>
      <div className="database-top">
        <div className="database-search">
          <input
            type="search"
            placeholder="Rechercher une plante"
            className="database-search-input"
          />
          <SearchIcon className="database-search-icon" />
        </div>
        <button type="button" className="database-add-plant">
          Ajouter une nouvelle plante
        </button>
      </div>
      <div className="database-plants">
        {plants.map((plant) => (
          <CardPlant
            key={plant.id}
            title={plant.commonname}
            img={plant.photo}
            contentButton="Ajouter"
          />
        ))}
      </div>
    </div>
  );
};

export default Database;
