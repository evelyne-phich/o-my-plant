import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav";
import Footer from "../Footer";
import About from "../About";
import Home from "../Home";
import Login from "../Login";
import Subscribe from "../Subscribe";
import Profile from "../Profile";
import "./style.scss";
import { fetchUser } from "../../actions/user";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

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
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
