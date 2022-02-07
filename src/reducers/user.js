import {
  CHANGE_FIELD,
  SAVE_USER,
  SAVE_GARDEN_ID,
  UPDATE_PROFILE,
  LOGIN,
  LOGOUT,
  ADD_IMAGE,
  DELETE_USER,
} from "../actions/user";

export const initialState = {
  logged: false,
  id: "",
  mail: "",
  pseudo: "",
  firstname: "",
  lastname: "",
  profilepicture: "",
  defaultProfilePic: "../assets/profilePic.png",
  dateofbirth: "",
  level: "",
  biography: "",
  telephone: "",
  role: "",
  garden_id: "",
  profileUpdateDisabled: true,
  profile_deleted: false,
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
          : null,
        logged: true,
      };
    case SAVE_GARDEN_ID:
      return {
        ...state,
        garden_id: action.payload,
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
    case ADD_IMAGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case DELETE_USER:
      return {
        ...state,
        profile_deleted: true,
        logged: false,
      };

    default:
      return state;
  }
};

export default reducer;
