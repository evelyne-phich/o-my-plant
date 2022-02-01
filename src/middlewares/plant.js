import axios from "axios";

import {
  HANDLE_UPDATE_PLANT_SUBMIT,
  savePlant,
  FETCH_PLANT,
} from "../actions/plant";

const plant = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_UPDATE_PLANT_SUBMIT: {
      console.log("je suis dans le middleware HANDLE_UPDATE_PLANT_SUBMIT");
      const token = localStorage.getItem("token");
      const plant = store.getState().plant;
      console.log(plant);

      axios
        .patch(
          `https://omyplant.herokuapp.com/garden/1`,
          {
            nickname: plant.nickname,
            wateringfrequency: plant.wateringfrequency,
            numberoftimes: plant.numberoftimes,
            reppoting: plant.reppoting,
            trimming: plant.trimming,
            exposure: plant.exposure,
            site: plant.site,
            photo_member: plant.photo_member,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          console.log("middleware plant", res.data);
          console.log(res.data);
          store.dispatch(savePlant(res.data));
        })
        .catch((err) => console.log("erreur:", err.response.data));
      break;
    }
    case FETCH_PLANT: {
      // const state = store.getState();
      // on va vérifier si on a un token dans le localStorage
      const token = localStorage.getItem("token");
      console.log(token);
      // si oui on enverra une requête à l'api pour récupérer le username
      axios
        .get(`https://omyplant.herokuapp.com/garden/1`, {
          // on passe le token dans le header Authorization de notre requête
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("reponse fetch plant", res.data[0]);
          store.dispatch(savePlant(res.data[0]));
        })
        .catch((err) => console.log("err", err.response.data));
      break;
    }
    default:
      next(action);
  }
};

export default plant;
