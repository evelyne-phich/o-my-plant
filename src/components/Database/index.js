import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect, Fragment, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import CardPlant from "../CardPlant";
import Modal from "../Modal";
import Loader from "../Loader";

import { handleAddClick } from "../../actions/plant";
import { emptyFields } from "../../actions/plantBdd";

import "./style.scss";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Database = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const currentState = useSelector((state) => state.plantBdd);
  const [search, setSearch] = useState("");
  const [plants, setPlants] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenGardenPlant = () => setOpen(true);
  const handleCloseGardenPlant = () => {
    setOpen(false);
    dispatch(emptyFields());
  };
  const dispatch = useDispatch();
  const handleAddPlantClick = (event) => {
    dispatch(handleAddClick(event.target.value));
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const request = () => {
    const token = localStorage.getItem("token");
    setLoading(true);

    axios
      .get("https://omyplant.herokuapp.com/plantdb", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPlants(res.data);
      })
      .catch((err) => {
        console.log("erreur: ", err.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    request();
  }, [currentState.plantCreated]);

  if (loading) {
    return <Loader />;
  }

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
        <Modal
          onClose={handleCloseGardenPlant}
          open={open}
          form="bdd-plant-form"
        />
        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            La plante a bien été ajoutée à votre jardin !
          </Alert>
        </Snackbar>
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
              </Fragment>
            ))
        ) : (
          <div className="database-empty">La base de données est vide.</div>
        )}
      </div>
    </div>
  );
};

export default Database;
