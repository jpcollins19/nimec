import axios from "axios";

const formatFirstLettertoLowerCase = (word) => {
  return word.split("").reduce((a, letter, idx) => {
    if (idx === 0) {
      letter = letter.toLowerCase();
    }
    a += letter;
    return a;
  }, "");
};

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

export const updateService = (service, history) => {
  return async (dispatch) => {
    const pathway = formatFirstLettertoLowerCase(service.service);
    service = (await axios.put(`/api/services/${service.id}`, service)).data;
    history.push(`/our_services/${pathway}`);
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
