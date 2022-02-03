import { CHANGE_FIELD } from "../actions/plantBdd";

const initialState = {
  commonname: "",
  description: "",
  photo: "",
  member_id: "",
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      console.log(action.payload);
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
};

export default reducer;
