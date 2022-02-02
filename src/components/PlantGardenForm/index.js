import Proptypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import {
  changeField,
  updatePlant,
  handlePlantUpdateSubmit,
  fetchPlant,
} from "../../actions/plant";

import Field from "../Field";
import FieldImage from "../FieldImage";

import "./style.scss";

const PlantGardenForm = () => {
  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();

  const [image, setImage] = useState(""); // fichier image sélectionné
  const [imageUrl, setImageUrl] = useState(""); // blob image url
  const [fileInputName, setFileInputName] = useState(""); // to set the name of the fieldImage
  // à chaque changement du state image
  // l'image en cours s'affiche sur la page
  useEffect(() => {
    if (image) {
      console.log(image);
      const imgUrl = URL.createObjectURL(image); //blob
      setImageUrl(imgUrl);
      updateImage();
    }
  }, [image]);

  const updateImage = () => {
    console.log(imageUrl);
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      dispatch(changeField(reader.result, fileInputName));
    };
    reader.onerror = () => {
      console.error("La validation du formulaire a échoué :( => FileReader ");
    };
  };

  const changeFieldInput = (value, name) => {
    console.log(value);
    dispatch(changeField(value, name));
  };

  const enablePlantUpdate = (event) => {
    event.preventDefault();
    dispatch(updatePlant());
  };

  const onSubmitClick = (event) => {
    event.preventDefault();
    console.log("je passe dans le submit form", event);
    dispatch(handlePlantUpdateSubmit());
    dispatch(updatePlant());
    //dispatch(fetchPlant());
  };

  return (
    <form className="user-plant-form" onSubmit={onSubmitClick}>
      <div className="form-container">
        <div className="form-description-part">
          <h2>Titre</h2>
          <label htmlFor="nickname">
            {currentState.plant.nickname || "Surnom"}
          </label>
          <Field
            name="nickname"
            type="text"
            className={`${
              currentState.plant.plantUpdateDisabled
                ? "hidden-input"
                : "plant-input-field"
            }`}
            onChange={changeFieldInput}
            placeholder="Surnom de la plante"
            value={currentState.plant.nickname || ""}
            disabled={currentState.plant.plantUpdateDisabled}
          />

          <img
            className="plant-picture"
            src={
              currentState.plant.photo_member
                ? currentState.plant.photo_member
                : "https://res.cloudinary.com/dtnoanxmt/image/upload/v1643722681/plant-img/plant_urtcoa.jpg"
            }
            alt="plant"
          />
          <FieldImage
            type="file"
            name="photo_member"
            className={`${
              currentState.plant.plantUpdateDisabled
                ? "hidden-input"
                : "plant-file-input"
            }`}
            accept=".jpg, .jpeg, .png"
            disabled={currentState.plant.plantUpdateDisabled}
            onChange={(e) => {
              setImage(e.target.files[0]);
              setFileInputName(e.target.name);
            }}
          />
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            tristique velit vel nisl pellentesque, eu finibus erat dapibus.
            Pellentesque tempor odio aliquam odio lacinia, sagittis feugiat mi
            accumsan. Donec eget risus felis. Mauris justo magna, finibus eget
            molestie id, interdum quis lectus. Curabitur pretium enim quis magna
            placerat feugiat. Curabitur hendrerit placerat metus, a tempus nisi
            vestibulum at. In vel neque rhoncus, tempus nisl sit amet, rutrum
            tellus. Etiam finibus semper urna et auctor. Aliquam erat volutpat.{" "}
          </p>
        </div>
        <div className="form-care-part">
          <h3>Entretien</h3>
          <fieldset className="form-care-watering">
            <legend>Fréquence d'arrosage</legend>
            <label htmlFor="wateringfrequency">
              Périodicité: {currentState.plant.wateringfrequency || "A définir"}
              <select
                //value={currentState.plant.wateringfrequency}
                id="wateringfrequency"
                name="wateringfrequency"
                disabled={currentState.plant.plantUpdateDisabled}
                className={`${
                  currentState.plant.plantUpdateDisabled
                    ? "hidden-input"
                    : "plant-input-select"
                }`}
                onChange={changeFieldInput}
              >
                <option value="">
                  Sélectionnez votre périodicité d'arrosage
                </option>
                <option value="jour">Jour</option>
                <option value="semaine">Semaine</option>
                <option value="mois">Mois</option>
              </select>
            </label>

            <label htmlFor="numberoftimes">
              Nombre de fois: {currentState.plant.numberoftimes || "A définir"}
            </label>
            <Field
              name="numberoftimes"
              type="number"
              className={`${
                currentState.plant.plantUpdateDisabled
                  ? "hidden-input"
                  : "plant-input-field"
              }`}
              onChange={changeFieldInput}
              value={currentState.plant.numberoftimes || null}
              disabled={currentState.plant.plantUpdateDisabled}
            />
          </fieldset>
          <label htmlFor="site">
            Emplacement: {currentState.plant.site || "A définir"}
          </label>
          <Field
            name="site"
            type="text"
            className={`${
              currentState.plant.plantUpdateDisabled
                ? "hidden-input"
                : "plant-input-field"
            }`}
            onChange={changeFieldInput}
            value={currentState.plant.site || ""}
            disabled={currentState.plant.plantUpdateDisabled}
          />
          <label htmlFor="exposure">
            Exposition: {currentState.plant.exposure || "A définir"}
            <select
              id="exposure"
              name="exposure"
              onChange={changeFieldInput}
              disabled={currentState.plant.plantUpdateDisabled}
              className={`${
                currentState.plant.plantUpdateDisabled
                  ? "hidden-input"
                  : "plant-input-select"
              }`}
            >
              <option>Sélectionnez l'exposition de votre plante</option>
              <option value="faible">Faible</option>
              <option value="modérée">Modérée</option>
              <option value="elevée">Elevée</option>
            </select>
          </label>
          <label htmlFor="trimming">
            Taille: {currentState.plant.trimming || "A définir"}
            <select
              id="trimming"
              name="trimming"
              onChange={changeFieldInput}
              disabled={currentState.plant.plantUpdateDisabled}
              className={`${
                currentState.plant.plantUpdateDisabled
                  ? "hidden-input"
                  : "plant-input-select"
              }`}
            >
              <option>Sélectionnez votre mois de taille</option>
              <option value="janvier">Janvier</option>
              <option value="février">Février</option>
              <option value="mars">Mars</option>
              <option value="avril">Avril</option>
              <option value="mai">Mai</option>
              <option value="juin">Juin</option>
              <option value="juillet">Juillet</option>
              <option value="août">Août</option>
              <option value="septembre">Septembre</option>
              <option value="octobre">Octobre</option>
              <option value="novembre">Novembre</option>
              <option value="décembre">Décembre</option>
            </select>
          </label>
          <label htmlFor="reppoting">
            Rempotage: {currentState.plant.reppoting || "A définir"}
            <select
              id="trimming"
              name="trimming"
              onChange={changeFieldInput}
              disabled={currentState.plant.plantUpdateDisabled}
              className={`${
                currentState.plant.plantUpdateDisabled
                  ? "hidden-input"
                  : "plant-input-select"
              }`}
            >
              <option>Sélectionnez votre mois de taille</option>
              <option value="janvier">Janvier</option>
              <option value="février">Février</option>
              <option value="mars">Mars</option>
              <option value="avril">Avril</option>
              <option value="mai">Mai</option>
              <option value="juin">Juin</option>
              <option value="juillet">Juillet</option>
              <option value="août">Août</option>
              <option value="septembre">Septembre</option>
              <option value="octobre">Octobre</option>
              <option value="novembre">Novembre</option>
              <option value="décembre">Décembre</option>
            </select>
          </label>
        </div>
      </div>
      {currentState.plant.plantUpdateDisabled && (
        <button
          className="profile-button"
          type="button"
          onClick={enablePlantUpdate}
        >
          Modifier
        </button>
      )}
      {!currentState.plant.plantUpdateDisabled && (
        <button className="profile-button" type="submit">
          Sauvegarder
        </button>
      )}
    </form>
  );
};

PlantGardenForm.propTypes = {};

export default PlantGardenForm;
