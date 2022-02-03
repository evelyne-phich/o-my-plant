import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import CardPlant from "../CardPlant";
import Modal from "../Modal";

import { handleAddClick } from "../../actions/plant";

import "./style.scss";

const Database = () => {
  const [search, setSearch] = useState("");
  const [plants, setPlants] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpenGardenPlant = () => setOpen(true);
  const handleCloseGardenPlant = () => setOpen(false);
  const dispatch = useDispatch();
  const handleAddPlantClick = (event) => {
    dispatch(handleAddClick(event.target.value));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://omyplant.herokuapp.com/plantdb", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("database", res.data);
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
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <SearchIcon className="database-search-icon" />
        </div>
        <button
          type="button"
          className="database-add-plant"
          onClick={() => {
            handleOpenGardenPlant();
          }}
        >
          Ajouter une nouvelle plante
        </button>
      </div>
      <div className="database-plants">
        {plants.length > 0 ? (
          plants
            .filter((plant) =>
              plant.commonname.toLowerCase().includes(search.toLowerCase()),
            )
            .map((plant) => (
              <Fragment key={`bdd${plant.id}`}>
                <CardPlant
                  title={plant.commonname}
                  img={plant.photo}
                  contentButton="Ajouter"
                  onAddClick={handleAddPlantClick}
                  value={plant.id}
                />
                <Modal
                  onClose={handleCloseGardenPlant}
                  open={open}
                  form="bdd-plant-form"
                />
              </Fragment>
            ))
        ) : (
          <div className="database-empty">Votre jardin est vide.</div>
        )}
      </div>
    </div>
  );
};

export default Database;
