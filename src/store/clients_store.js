import axios from "axios";

const LOAD_CLIENTS = "LOAD_CLIENTS";

const _loadClients = (clients) => {
  return { type: LOAD_CLIENTS, clients };
};

export const loadClients = () => {
  return async (dispatch) => {
    const clients = (await axios.get("/api/clients")).data;
    dispatch(_loadClients(clients));
  };
};

export const clients = (state = [], action) => {
  switch (action.type) {
    case LOAD_CLIENTS:
      return action.clients;
    default:
      return state;
  }
};
