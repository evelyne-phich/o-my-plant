import axios from "axios";

import { HANDLE_CREATION_PLANT_SUBMIT } from "../actions/plantBdd";

const plantBdd = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_CREATION_PLANT_SUBMIT: {
      const token = localStorage.getItem("token");
      const plant = store.getState().plantBdd;
      const user = store.getState().user;
      console.log(user.id);
      axios
        .post(
          "https://omyplant.herokuapp.com/plantdb",
          {
            commonname: plant.commonname,
            photo: plant.photo,
            description: plant.description,
            member_id: user.id,
            dateadded: "06/06/2022",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log("erreur: ", err.response.data);
        });
      break;
    }
    default:
      next(action);
  }
};

export default plantBdd;
