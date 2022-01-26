import {
  CHANGE_FIELD,
  SAVE_USER,
  SAVE_SUBSCRIPTION,
  UPDATE_PROFILE,
} from "../actions/user";

export const initialState = {
  logged: false,
  subscribed: false,
  id: 1,
  mail: "",
  password: "",
  token: "",
  pseudo: "",
  firstname: "",
  lastname: "",
  profilepicture: "",
  dateofbirth: "",
  level: "",
  biography: "",
  telephone: "",
  role: "",
  profileUpdateDisabled: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profileUpdateDisabled: false,
      };
    case SAVE_USER:
      return {
        ...state,
        ...action.payload,
        mail: "",
        password: "",
      };
    case SAVE_SUBSCRIPTION:
      console.log(action.payload);
      return {
        ...state,
        subscribed: action.payload,
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
