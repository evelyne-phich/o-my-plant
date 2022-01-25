import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

import Field from "../Field";
import { changeField, login } from "../../actions/user";

import "./style.scss";

const LoginForm = () => {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state);
  const changeFieldInput = (value, name) => dispatch(changeField(value, name));
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  const navigate = useNavigate();

  return (
    <div className="login-form">
      <form
        autoComplete="off"
        className="login-form-element"
        onSubmit={handleSubmit}
      >
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
        <button
          type="submit"
          className="login-form-button"
          onClick={() => {
            if (currentState.user.logged) {
              navigate("/");
            }
          }}
        >
          Valider
        </button>
      </form>
    </div>
  );
};
/*
LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  loggedMessage: "Connecté",
};*/

export default LoginForm;
