import { useDispatch, useSelector } from "react-redux";

import Field from "../Field";
import { changeField, subscribe } from "../../actions/user";

import "./style.scss";

const SubscribeForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const changeFieldInput = (value, name) => dispatch(changeField(value, name));
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(subscribe());
  };

  return (
    <div className="subscribe-form">
      <form
        autoComplete="off"
        className="subscribe-form-element"
        onSubmit={handleSubmit}
      >
        <Field
          name="pseudo"
          type="text"
          placeholder="Pseudo"
          onChange={changeFieldInput}
          value={user.pseudo}
        />
        <Field
          name="mail"
          type="email"
          placeholder="E-mail"
          onChange={changeFieldInput}
          value={user.mail}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeFieldInput}
          value={user.password}
        />
        <Field
          name="passwordConfirmation"
          type="password"
          placeholder="Confirmation du mot de passe"
          onChange={changeFieldInput}
          value={user.password}
        />
        <button type="submit" className="subscribe-form-button">
          Valider
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
