import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import auth from "./auth_store";

const { clients } = require("./clients_store");

const reducer = combineReducers({ auth, clients });
const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth_store";
export * from "./clients_store";
export * from "./funcs";