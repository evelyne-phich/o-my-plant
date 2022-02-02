import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { fetchPlant } from "../../actions/plant";

import "./style.scss";

import CardPlant from "../CardPlant";
import Modal from "../Modal";
//<Button onClick={handleOpen}>Open modal</Button>
const MyGarden = () => {
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
          />
          <SearchIcon className="myGarden-search-icon" />
        </div>
        <Link to="/add-plant" className="myGarden-add-plant">
          Ajouter une plante
        </Link>
      </div>
      <div className="myGarden-plants">
        {plants.map((plant) => (
          <Fragment key={plant.id}>
            <CardPlant
              title={plant.commonname}
              img={plant.photo_member ? plant.photo_member : plant.photo}
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
        ))}
      </div>
    </div>
  );
};

export default MyGarden;
