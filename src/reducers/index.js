import { combineReducers } from "redux";

import userReducer from "./user";
import userPLantReducer from "./plantUser";

const rootReducer = combineReducers({
  user: userReducer,
  plant: userPLantReducer,
});

export default rootReducer;
