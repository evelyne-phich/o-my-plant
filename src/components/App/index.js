import { Routes, Route } from "react-router-dom";
import Axios from "axios";
import Nav from "../Nav";
import About from "../About";
import Header from "../Header";
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
        <Header />
        <Routes>
          <Route path="/" />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" />
          <Route path="/login" />
        </Routes>
        {/* <button type="button" onClick={tst}>
          tst
        </button> */}
      </div>
    </>
  );
};

export default App;
