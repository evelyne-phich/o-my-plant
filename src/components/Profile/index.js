import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Field from "../Field";
import FieldImage from "../FieldImage";
import {
  changeField,
  addImage,
  deleteUser,
  updateProfile,
  handleProfileUpdateSubmit,
} from "../../actions/user";

import Dialog from "../Dialog";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

import "./style.scss";

const Profile = () => {
  const navigate = useNavigate();
  const userDeleted = useSelector((state) => state.user.profile_deleted);
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

  useEffect(() => {
    if (userDeleted) {
      navigate("/");
    }
  }, [userDeleted]);

  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateImage = () => {
    console.log(imageUrl);
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      dispatch(addImage(reader.result, fileInputName));
    };
    reader.onerror = () => {
      console.error("La validation du formulaire a échoué :( => FileReader ");
    };
  };

  const changeFieldInput = (value, name) => {
    console.log(value);
    dispatch(changeField(value, name));
  };

  const enableProfileUpdate = (event) => {
    event.preventDefault();
    dispatch(updateProfile());
  };

  const onSubmitClick = (event) => {
    event.preventDefault();
    console.log("je submit le profil");
    dispatch(handleProfileUpdateSubmit());
    dispatch(updateProfile());
  };

  // Dialog
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main className="profile-container">
      <form className="profile-form" onSubmit={onSubmitClick}>
        <div className="profile">
          <div className="profile-left">
            <div className="profile-input">
              <label htmlFor="pseudo">Pseudo du profil</label>
              <Field
                name="pseudo"
                type="text"
                className="profile-input-field"
                onChange={changeFieldInput}
                value={currentState.user.pseudo || ""}
                disabled={currentState.user.profileUpdateDisabled}
              />
            </div>
            <div className="profile-input">
              <label htmlFor="firstname">Prénom</label>
              <Field
                name="firstname"
                type="text"
                className="profile-input-field"
                onChange={changeFieldInput}
                value={currentState.user.firstname || ""}
                disabled={currentState.user.profileUpdateDisabled}
              />
            </div>

            <div className="profile-input">
              <label htmlFor="lastname">Nom</label>
              <Field
                name="lastname"
                type="text"
                className="profile-input-field"
                onChange={changeFieldInput}
                value={currentState.user.lastname || ""}
                disabled={currentState.user.profileUpdateDisabled}
              />
            </div>

            <div className="profile-input">
              <label htmlFor="dateofbirth">Date de naissance</label>
              <Field
                name="dateofbirth"
                type="date"
                className="profile-input-field"
                onChange={changeFieldInput}
                value={currentState.user.dateofbirth || ""}
                disabled={currentState.user.profileUpdateDisabled}
              />
            </div>
            <div className="profile-input">
              <label htmlFor="mail">Mail</label>
              <Field
                name="mail"
                type="email"
                className="profile-input-field"
                onChange={changeFieldInput}
                value={currentState.user.mail || ""}
                disabled={currentState.user.profileUpdateDisabled}
              />
            </div>
            <div className="profile-input">
              <label htmlFor="telephone">Téléphone</label>
              <Field
                name="telephone"
                type="tel"
                className="profile-input-field"
                onChange={changeFieldInput}
                value={currentState.user.telephone || ""}
                disabled={currentState.user.profileUpdateDisabled}
              />
            </div>
          </div>

          <div className="profile-right">
            <div className="profile-img-container">
              <img
                className="profile-picture"
                src={
                  currentState.user.profilepicture
                    ? currentState.user.profilepicture
                    : "profilePic"
                }
                alt="avatar"
              />
              <div className="profile-avatar-container">
                <FieldImage
                  type="file"
                  name="profilepicture"
                  className={`${
                    currentState.user.profileUpdateDisabled
                      ? "hidden-input"
                      : "profile-file-input"
                  }`}
                  accept=".jpg, .jpeg, .png"
                  disabled={currentState.user.profileUpdateDisabled}
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    setFileInputName(e.target.name);
                  }}
                />
              </div>

              <div className="profile-level">
                Niveau : {currentState.user.level || "Main verte"}
              </div>
            </div>

            <div className="profile-biography">
              <label htmlFor="biography">Bio</label>
              <textarea
                name="biography"
                rows="8"
                cols="33"
                className="profile-biography-content"
                defaultValue={currentState.user.biography || ""}
                onChange={(event) => {
                  dispatch(changeField(event.target.value, event.target.name));
                }}
                disabled={currentState.user.profileUpdateDisabled}
              ></textarea>
            </div>
          </div>
        </div>
        {currentState.user.profileUpdateDisabled && (
          <div className="profile-button-container">
            <button
              className="profile-button"
              type="button"
              onClick={enableProfileUpdate}
            >
              Modifier
              <EditIcon />
            </button>
            <button
              className="profile-button"
              type="button"
              onClick={handleClickOpen}
            >
              Supprimer
              <DeleteIcon />
            </button>
          </div>
        )}
        <Dialog
          open={open}
          onCloseClick={handleClose}
          onConfirmDelete={() => dispatch(deleteUser())}
          message="Souhaitez-vous réellement supprimer votre compte?"
        />
        {!currentState.user.profileUpdateDisabled && (
          <button className="profile-button" type="submit">
            Sauvegarder
            <SaveIcon />
          </button>
        )}
      </form>
    </main>
  );
};

export default Profile;
