import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Nav from "../Nav";
import Footer from "../Footer";
import About from "../About";
import Home from "../Home";
import Login from "../Login";
import Subscribe from "../Subscribe";
import Profile from "../Profile";
import MyGarden from "../MyGarden";
import Database from "../Database";
import "./style.scss";
import { fetchUser } from "../../actions/user";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  return (
    <>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login title="Se connecter" />} />
          <Route path="/subscribe" element={<Subscribe title="S'inscrire" />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Navigate to="/" replace />} />
          <Route path="/my-garden" element={<MyGarden />} />
          <Route path="/add-plant" element={<Database />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
