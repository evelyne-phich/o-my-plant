import {
  CHANGE_FIELD,
  SAVE_USER,
  SAVE_SUBSCRIPTION,
  UPDATE_PROFILE,
  LOGIN,
  LOGOUT,
} from "../actions/user";

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
    case LOGIN:
      return {
        ...state,
        logged: true,
      };
    case LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default reducer;
