import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./style.scss";

import CardPlant from "../CardPlant";

const MyGarden = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://omyplant.herokuapp.com/garden", {
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
        {plants.map((plant) => (
          <CardPlant
            key={plant.id}
            title={plant.commonname}
            img={plant.photo}
            contentButton="Modifier"
          />
        ))}
      </div>
    </div>
  );
};

export default MyGarden;
