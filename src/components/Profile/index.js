import { useDispatch, useSelector } from "react-redux";

import Field from "../Field";
import { changeField } from "../../actions/user";

import "./style.scss";

const Profile = () => {
  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();
  const changeFieldInput = (value, name) => dispatch(changeField(value, name));

  return (
    <form className="profile" method="POST">
      <div className="profile-picture-and-level">
        <img
          className="profile-picture"
          src="https://maison.20minutes.fr/wp-content/uploads/2020/05/palmier-areca-istock.jpg"
          alt="avatar"
        ></img>
        <div className="profil-level">Niveau :</div>
      </div>
      <div className="profile-update">
        <div className="profile-left">
          <label for="pseudo" className="profile-label">
            Pseudo du profil
          </label>
          <Field
            name="pseudo"
            type="text"
            placeholder={currentState.pseudo}
            onChange={changeFieldInput}
            value={currentState.pseudo}
          />
          <label for="firstname" className="profile-label">
            Prénom
          </label>
          <Field
            name="firstname"
            type="text"
            placeholder={currentState.firstname}
            onChange={changeFieldInput}
            value={currentState.firstname}
          />
          <label for="lastname" className="profile-label">
            Nom
          </label>
          <Field
            name="lastname"
            type="text"
            placeholder={currentState.lastname}
            onChange={changeFieldInput}
            value={currentState.lastname}
          />
          <label for="dateofbirth" className="profile-label">
            Date de naissance
          </label>
          <Field
            name="dateofbirth"
            type="date"
            placeholder={currentState.dateofbirth}
            onChange={changeFieldInput}
            value={currentState.dateofbirth}
          />
          <label for="mail" className="profile-label">
            Mail
          </label>
          <Field
            name="mail"
            type="email"
            placeholder={currentState.mail}
            onChange={changeFieldInput}
            value={currentState.mail}
          />
          <label for="telephone" className="profile-label">
            Téléphone
          </label>
          <Field
            name="telephone"
            type="text"
            placeholder={currentState.telephone}
            onChange={changeFieldInput}
            value={currentState.telephone}
          />
        </div>
        <div className="profile-right">
          <label for="profilepicture" className="profile-label">
            Photo de profil
          </label>
          <Field
            name="profilepicture"
            type="file"
            placeholder=""
            onChange={changeFieldInput}
            value={currentState.profilepicture}
          />
          <label for="biography" className="profile-label">
            Bio
          </label>
          <textarea
            name="biography"
            rows="5"
            cols="33"
            placeholder={currentState.biography}
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default Profile;
