import Proptypes from "prop-types";
import LoginForm from "../LoginForm";
import "./style.scss";

const Login = () => (
  <main className="login-container">
    <h1 className="login-title">Se connecter</h1>
    <LoginForm />
  </main>
);

Login.propTypes = {};

export default Login;
