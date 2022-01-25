import { useDispatch, useSelector } from "react-redux";

import Field from "../Field";
import { changeField, subscribe } from "../../actions/user";

import "./style.scss";

const SubscribeForm = () => {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state);
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
          value={currentState.pseudo}
        />
        <Field
          name="mail"
          type="email"
          placeholder="E-mail"
          onChange={changeFieldInput}
          value={currentState.mail}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeFieldInput}
          value={currentState.password}
        />
        <Field
          name="passwordConfirmation"
          type="password"
          placeholder="Confirmation du mot de passe"
          onChange={changeFieldInput}
          value={currentState.password}
        />
        <button type="submit" className="subscribe-form-button">
          Valider
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
