import { Routes, Route } from "react-router-dom";
// import Axios from "axios";
import Nav from "../Nav";
import About from "../About";
import Home from "../Home";
import Login from "../Login";
import "./style.scss";

const App = () => {
  // const tst = () => {
  //   Axios.get("https://omyplant.herokuapp.com/").then((response) => {
  //     console.log(response.data);
  //   });
  // };

  return (
    <>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <button type="button" onClick={tst}>
          tst
        </button> */}
      </div>
    </>
  );
};

export default App;
