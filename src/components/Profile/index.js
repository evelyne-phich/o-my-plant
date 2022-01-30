import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

//import profilePic from "../../assets/img/profilePic.png";

import Field from "../Field";
import FieldImage from "../FieldImage";
import {
  changeField,
  addImage,
  sendImage,
  updateProfile,
  handleProfileUpdateSubmit,
} from "../../actions/user";

import "./style.scss";

const Profile = () => {
  const [image, setImage] = useState(""); // fichier image sélectionné
  const [imageUrl, setImageUrl] = useState(""); // blob image url
  const [fileInputName, setFileInputName] = useState(""); // to set the name of the fieldImage
  // à chaque changement du state image
  // l'image en cours s'affiche sur la page
  useEffect(() => {
    if (image) {
      console.log(image);
      const imgUrl = URL.createObjectURL(image);
      setImageUrl(imgUrl);
      updateImage();
    }
  }, [image]);

  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();

  // Envoi de l'objet image créé au submit du formulaire
  // via une requête vers le serveur
  /*const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("http://localhost:8000/image/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error(err);
    }
  };*/

  const updateImage = () => {
    console.log(imageUrl);
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      // console.log(reader.result);
      // uploadImage(reader.result);
      //dispatch(addImage(reader.result, fileInputName));
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
    dispatch(handleProfileUpdateSubmit());
    dispatch(updateProfile());
    //dispatch(sendImage());
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
            <div>
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
                  console.log(event.target.value);
                  dispatch(changeField(event.target.value, event.target.name));
                }}
                disabled={currentState.user.profileUpdateDisabled}
              ></textarea>
            </div>
          </div>
        </div>
        {currentState.user.profileUpdateDisabled && (
          <button
            className="profile-button"
            type="button"
            onClick={enableProfileUpdate}
          >
            Modifier
          </button>
        )}
        {!currentState.user.profileUpdateDisabled && (
          <button className="profile-button" type="submit">
            Sauvegarder
          </button>
        )}
      </form>
    </main>
  );
};

export default Profile;
