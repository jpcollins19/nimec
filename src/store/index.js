import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import auth from "./auth_store";

const { clients } = require("./clients_store");
const { services } = require("./services_store");
const { attachments } = require("./attachments_store");

const reducer = combineReducers({ auth, clients, services, attachments });
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth_store";
export * from "./clients_store";
export * from "./services_store";
export * from "./attachments_store";
export * from "./funcs";
