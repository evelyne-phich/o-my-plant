import Proptypes from "prop-types";
import LoginForm from "../LoginForm";
import SubscribeForm from "../SubscribeForm";
import "./style.scss";

const LoginSubscribe = ({ title }) => (
  <main className="login-container">
    <h1 className="login-title">{title}</h1>
    {title === "Se connecter" ? <LoginForm /> : <SubscribeForm />}
  </main>
);

LoginSubscribe.propTypes = {};

export default LoginSubscribe;
