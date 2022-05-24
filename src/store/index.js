import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import auth from "./auth_store";

const { clients } = require("./clients_store");
const { services } = require("./services_store");
const { attachments, attachmentCount } = require("./attachments_store");
const { EEs } = require("./ees_store");
const { faqs } = require("./faqs_store");

const reducer = combineReducers({
  auth,
  clients,
  services,
  attachments,
  attachmentCount,
  EEs,
  faqs,
});
const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth_store";
export * from "./clients_store";
export * from "./services_store";
export * from "./attachments_store";
export * from "./ees_store";
export * from "./faqs_store";
export * from "./funcs";
