import { CHANGE_FIELD, SAVE_USER } from "../actions/user";

export const initialState = {
  logged: false,
  mail: "",
  password: "",
  token: "",
  pseudo: "",
  loggedMessage: "",
  firstname: "",
  lastname: "",
  profilepicture: "",
  dateofbirth: "",
  level: "",
  biography: "",
  telephone: "",
};
/*
...state,
        logged: false,
        mail: "",
        password: "",
        token: "",
        pseudo: "",
        loggedMessage: "",
        firstName: "",
        lastName: "",
        pictureUrl: "",
        dateOfBirth: "",
        level: "",
        bio: "",
*/
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case SAVE_USER: {
      return {
        ...state,
        ...action.payload,
        mail: "",
        password: "",
      };
    } /*
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
