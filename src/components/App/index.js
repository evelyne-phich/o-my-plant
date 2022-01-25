import { Routes, Route } from "react-router-dom";
import Nav from "../Nav";
import About from "../About";
import Home from "../Home";
import LoginSubscribe from "../LoginSubscribe";
import "./style.scss";

const App = () => {
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
        </Routes>
      </div>
    </>
  );
};

export default App;
