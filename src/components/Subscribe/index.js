// import Proptypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SubscribeForm from "../SubscribeForm";
import "./style.scss";

const Subscribe = ({ title }) => {
  const user = useSelector((state) => state.user);

  if (user.subscribed) {
    return <Navigate to="/login" replace />;
  }
  return (
    <main className="login-container">
      <h1 className="login-title">{title}</h1>
      <SubscribeForm />
    </main>
  );
};

export default Subscribe;
