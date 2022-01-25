// import Proptypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "../LoginForm";
import SubscribeForm from "../SubscribeForm";
import "./style.scss";

const LoginSubscribe = ({ title }) => {
  const user = useSelector((state) => state.user);

  if (user.logged) {
    return <Navigate to="/" replace />;
  }

  if (user.subscribed) {
    return <Navigate to="/login" replace />;
  }

  return (
    <main className="login-container">
      <h1 className="login-title">{title}</h1>
      {title === "Se connecter" ? <LoginForm /> : <SubscribeForm />}
    </main>
  );
};

export default LoginSubscribe;
