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
      <div className="profile-top">
        <div className="profile-pseudo">
          <label htmlFor="pseudo">Pseudo du profil</label>
          <Field
            name="pseudo"
            type="text"
            onChange={changeFieldInput}
            value={currentState.user.pseudo}
          />
        </div>
        <div className="profile-picture-and-level">
          <img
            className="profile-picture"
            src={currentState.user.profilepicture}
            alt="avatar"
          ></img>
          <div className="profile-level">Niveau :</div>
        </div>
      </div>
      <div className="profile-bottom">
        <div className="profile-left">
          <label htmlFor="firstname">Prénom</label>
          <Field
            name="firstname"
            type="text"
            onChange={changeFieldInput}
            value={currentState.user.firstname}
          />
          <label htmlFor="lastname">Nom</label>
          <Field
            name="lastname"
            type="text"
            onChange={changeFieldInput}
            value={currentState.user.lastname}
          />
          <label htmlFor="dateofbirth">Date de naissance</label>
          <Field
            name="dateofbirth"
            type="date"
            onChange={changeFieldInput}
            value={currentState.user.dateofbirth}
          />
          <label htmlFor="mail">Mail</label>
          <Field
            name="mail"
            type="email"
            onChange={changeFieldInput}
            value={currentState.user.mail}
          />
          <label htmlFor="telephone">Téléphone</label>
          <Field
            name="telephone"
            type="tel"
            onChange={changeFieldInput}
            value={currentState.user.telephone}
          />
        </div>
        <div className="profile-right">
          <label htmlFor="profilepicture">Photo de profil</label>
          <Field
            name="profilepicture"
            type="file"
            onChange={changeFieldInput}
            value={currentState.user.profilepicture}
          />
          <div className="profile-biography">
            <label htmlFor="biography">Bio</label>
            <textarea
              name="biography"
              rows="18"
              cols="33"
              className="profile-biography-content"
              value={currentState.user.biography}
            ></textarea>
          </div>
        </div>
      </div>
      <button className="profile-submit" type="submit">
        Modifier
      </button>
    </form>
  );
};

export default Profile;
