import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers";
import authMW from "../middlewares/auth";
import plantMW from "../middlewares/plant";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(authMW, plantMW));

const store = createStore(reducer, enhancers);

export default store;
