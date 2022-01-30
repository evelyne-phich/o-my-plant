import {
  CHANGE_FIELD,
  SAVE_USER,
  UPDATE_PROFILE,
  LOGIN,
  LOGOUT,
} from "../actions/user";

export const initialState = {
  logged: false,
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
      console.log(action.payload);
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profileUpdateDisabled: !state.profileUpdateDisabled,
      };
    case SAVE_USER:
      return {
        ...state,
        ...action.payload,
        dateofbirth: action.payload.dateofbirth
          ? action.payload.dateofbirth.substring(0, 10)
          : "",
        logged: true,
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
