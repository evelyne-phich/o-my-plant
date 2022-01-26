import axios from "axios";

import {
  saveUser,
  saveSubscription,
  LOGIN,
  SUBSCRIBE,
  FETCH_USER,
  LOGOUT,
} from "../actions/user";

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      axios
        .post("https://omyplant.herokuapp.com/login", {
          mail: state.user.mail,
          password: state.user.password,
        })
        .then((res) => {
          console.log(res);
          // stockage du token dans le localStorage
          localStorage.setItem("token", res.data.token);
          console.log(localStorage);
          // stockage des infos de l'api dans le state
          store.dispatch(saveUser(res.data));
        })
        .catch((err) => console.log(err.response.data));
      break;
    }
    case SUBSCRIBE: {
      const state = store.getState();
      axios
        .post("https://omyplant.herokuapp.com/subscribe", {
          pseudo: state.user.pseudo,
          mail: state.user.mail,
          password: state.user.password,
        })
        .then((res) => {
          store.dispatch(saveSubscription());
        })
        .catch((err) => console.log("erreur: ", err.response.data));
      break;
    } /*
    case FETCH_USER: {
      // on va vérifier si on a un token dans le localStorage
      const token = localStorage.getItem("token");

      if (token) {
        // si oui on enverra une requête à l'api pour récupérer le username
        axios
          .get("http://localhost:3000/username", {
            // on passe le token dans le header Authorization de notre requête
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          .then((res) => store.dispatch(saveUser(res.data)))
          .catch((err) => console.log(err));
      }
      break;
    }*/
    case LOGOUT: {
      // suppression du token dans le localStorage
      localStorage.removeItem("token");

      // on traite cette action dans le user reducer
      // il faut donc la passer
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default auth;
