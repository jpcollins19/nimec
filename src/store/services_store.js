import axios from "axios";

const LOAD_SERVICES = "LOAD_SERVICES";

const _loadServices = (services) => {
  return { type: LOAD_SERVICES, services };
};

export const loadServices = () => {
  return async (dispatch) => {
    const services = (await axios.get("/api/services")).data;
    dispatch(_loadServices(services));
  };
};

export const services = (state = [], action) => {
  switch (action.type) {
    case LOAD_SERVICES:
      return action.services;
    default:
      return state;
  }
};
