import Axios from "axios";
import Nav from "../Nav";
import "./style.scss";

const App = () => {
  const tst = () => {
    Axios.get("https://omyplant.herokuapp.com/").then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="app">
      Hello World
      <Nav />
      <button type="button" onClick={tst}>
        tst
      </button>
    </div>
  );
};

export default App;
