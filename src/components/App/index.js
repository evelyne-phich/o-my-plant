import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Nav from "../Nav";
import About from "../About";
import Home from "../Home";
import LoginSubscribe from "../LoginSubscribe";
import Profile from "../Profile";
import "./style.scss";
import { fetchUser } from "../../actions/user";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, []);

  return (
    <>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" />
          <Route
            path="/login"
            element={<LoginSubscribe title="Se connecter" />}
          />
          <Route
            path="/subscribe"
            element={<LoginSubscribe title="S'inscrire" />}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
