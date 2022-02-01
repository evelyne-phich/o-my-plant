import axios from "axios";

import {
  saveUser,
  FETCH_USER,
  LOGOUT,
  HANDLE_UPDATE_PROFILE_SUBMIT,
  SEND_IMAGE,
} from "../actions/user";

const auth = (store) => (next) => (action) => {
  switch (action.type) {
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
    case SEND_IMAGE: {
      const state = store.getState();
      console.log("middleware send image");
      console.log(state.user.profilepicture);
      /*
      axios
        .post(
          `https://omyplant.herokuapp.com/???`,
          {
            profilepicture: state.user.profilepicture,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          store.dispatch(saveUser(res.data));
          console.log("reponse fetch", res);
        })
        .catch((err) => console.log("err", err.response.data));
        */
      break;
    }
    default:
      next(action);
  }
};

export default auth;
