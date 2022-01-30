import axios from "axios";

import {
  saveUser,
  LOGIN,
  FETCH_USER,
  LOGOUT,
  HANDLE_UPDATE_PROFILE_SUBMIT,
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
          // stockage du token dans le localStorage
          localStorage.setItem("token", res.headers.authorization);
          console.log("reponse", res.data);
          // stockage des infos de l'api dans le state
          store.dispatch(saveUser(res.data));
          next(action);
        })
        .catch((err) => console.log("erreur", err.response.data));
      break;
    }
    case HANDLE_UPDATE_PROFILE_SUBMIT: {
      const token = localStorage.getItem("token");
      const state = store.getState();
      axios
        .patch(
          `https://omyplant.herokuapp.com/member`,
          {
            mail: state.user.mail,
            pseudo: state.user.pseudo,
            firstname: state.user.firstname,
            lastname: state.user.lastname,
            profilepicture: state.user.profilepicture,
            dateofbirth: state.user.dateofbirth,
            biography: state.user.biography,
            telephone: state.user.telephone,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          console.log(res.data);
          console.log(res.data.member);
          store.dispatch(saveUser(res.data));
        })
        .catch((err) => console.log("erreur: ", err.response.data));
      break;
    }
    case FETCH_USER: {
      // const state = store.getState();
      // on va vérifier si on a un token dans le localStorage
      const token = localStorage.getItem("token");
      console.log(token);
      // si oui on enverra une requête à l'api pour récupérer le username
      axios
        .get(`https://omyplant.herokuapp.com/member/connected`, {
          // on passe le token dans le header Authorization de notre requête
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          store.dispatch(saveUser(res.data));
          console.log("reponse fetch", res);
        })
        .catch((err) => console.log("err", err.response.data));
      break;
    }
    case LOGOUT: {
      console.log("middleware auth.js LOGOUT");
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
