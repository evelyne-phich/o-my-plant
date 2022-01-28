import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "../LoginForm";
import "./style.scss";

const Login = ({ title }) => {
  const user = useSelector((state) => state.user);
  if (user.logged) {
    return <Navigate to="/" replace />;
  }
  return (
    <main className="login-container">
      <h1 className="login-title">{title}</h1>
      <LoginForm />
    </main>
  );
};

Login.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Login;
