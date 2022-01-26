import { CHANGE_FIELD, SAVE_USER, SAVE_SUBSCRIPTION } from "../actions/user";

export const initialState = {
  logged: false,
  subscribed: false,
  id: "",
  mail: "",
  pseudo: "",
  firstname: "",
  lastname: "",
  profilepicture: "",
  dateofbirth: "",
  level: "",
  biography: "",
  telephone: "",
  role: "",
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case SAVE_USER:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload.member,
        logged: true,
        subscribed: false,
      };
    case SAVE_SUBSCRIPTION:
      return {
        ...state,
        subscribed: true,
      };
    /*
      case LOGOUT: {
        // on vient faire un reset du state
        // en déversant le state initial dans un nouvel objet
        return {
          ...initialState,
        };
      }*/
    default:
      return state;
  }
};

export default reducer;
