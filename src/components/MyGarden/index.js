import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { fetchPlant } from "../../actions/plant";

import "./style.scss";

import CardPlant from "../CardPlant";
import Modal from "../Modal";

const MyGarden = () => {
  const currentPlant = useSelector((state) => state.plant);

  const [search, setSearch] = useState("");
  const [plants, setPlants] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpenGardenPlant = () => setOpen(true);
  const handleCloseGardenPlant = () => setOpen(false);
  const dispatch = useDispatch();

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
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <SearchIcon className="myGarden-search-icon" />
        </div>
        <Link to="/add-plant" className="myGarden-add-plant">
          Ajouter une plante
        </Link>
      </div>
      <div className="myGarden-plants">
        {plants.length > 0 ? (
          plants
            .filter((plant) =>
              plant.commonname.toLowerCase().includes(search.toLowerCase()),
            )
            .map((plant) => (
              <Fragment key={plant.id}>
                <CardPlant
                  title={plant.commonname}
                  img={
                    currentPlant.photo_member
                      ? currentPlant.photo_member
                      : plant.photo
                  }
                  onClick={() => {
                    handleOpenGardenPlant();
                    dispatch(fetchPlant());
                  }}
                />
                <Modal
                  onClose={handleCloseGardenPlant}
                  open={open}
                  form="user-plant-form"
                />
              </Fragment>
            ))
        ) : (
          <div className="myGarden-empty">Votre jardin est vide.</div>
        )}
      </div>
    </div>
  );
};

export default MyGarden;
