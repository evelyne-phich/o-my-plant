import { useDispatch, useSelector } from "react-redux";

import Field from "../Field";
import { changeField, updateProfile } from "../../actions/user";

import "./style.scss";

const Profile = () => {
  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();
  const changeFieldInput = (value, name) => dispatch(changeField(value, name));
  const enableProfileUpdate = () => dispatch(updateProfile());

  return (
    <div className="profile-container">
      <form className="profile-form" method="POST">
        <div className="profile">
          <div className="profile-left">
            <div className="profile-pseudo">
              <label htmlFor="pseudo">Pseudo du profil</label>
              <Field
                name="pseudo"
                type="text"
                onChange={changeFieldInput}
                value={currentState.user.pseudo}
                disabled={currentState.user.profileUpdateDisabled}
              />
            </div>
            <label htmlFor="firstname">Prénom</label>
            <Field
              name="firstname"
              type="text"
              onChange={changeFieldInput}
              value={currentState.user.firstname}
              disabled={currentState.user.profileUpdateDisabled}
            />
            <label htmlFor="lastname">Nom</label>
            <Field
              name="lastname"
              type="text"
              onChange={changeFieldInput}
              value={currentState.user.lastname}
              disabled={currentState.user.profileUpdateDisabled}
            />
            <label htmlFor="dateofbirth">Date de naissance</label>
            <Field
              name="dateofbirth"
              type="date"
              onChange={changeFieldInput}
              value={currentState.user.dateofbirth}
              disabled={currentState.user.profileUpdateDisabled}
            />
            <label htmlFor="mail">Mail</label>
            <Field
              name="mail"
              type="email"
              onChange={changeFieldInput}
              value={currentState.user.mail}
              disabled={currentState.user.profileUpdateDisabled}
            />
            <label htmlFor="telephone">Téléphone</label>
            <Field
              name="telephone"
              type="tel"
              onChange={changeFieldInput}
              value={currentState.user.telephone}
              disabled={currentState.user.profileUpdateDisabled}
            />
          </div>
          <div className="profile-right">
            <div className="profile-picture-and-level">
              <img
                className="profile-picture"
                src={currentState.user.profilepicture}
                alt="avatar"
              ></img>
              <div className="profile-level">Niveau :</div>
            </div>
            <label htmlFor="profilepicture">Photo de profil</label>
            <Field
              name="profilepicture"
              type="file"
              onChange={changeFieldInput}
              value={currentState.user.profilepicture}
              disabled={currentState.user.profileUpdateDisabled}
            />
            <div className="profile-biography">
              <label htmlFor="biography">Bio</label>
              <textarea
                name="biography"
                rows="18"
                cols="33"
                className="profile-biography-content"
                value={currentState.user.biography}
                disabled={currentState.user.profileUpdateDisabled}
              ></textarea>
            </div>
          </div>
        </div>
        <button
          className="profile-submit"
          type="submit"
          onClick={enableProfileUpdate}
        >
          Modifier
        </button>
      </form>
    </div>
  );
};

export default Profile;
