import axios from "axios";

const LOAD_CLIENTS = "LOAD_CLIENTS";
const ADD_CLIENT = "ADD_CLIENT";
const DELETE_CLIENT = "DELETE CLIENT";

const _loadClients = (clients) => {
  return { type: LOAD_CLIENTS, clients };
};

const _addClient = (client) => {
  return { type: ADD_CLIENT, client };
};

const _deleteClient = (client) => {
  return { type: DELETE_CLIENT, client };
};

export const loadClients = () => {
  return async (dispatch) => {
    const clients = (await axios.get("/api/clients")).data;
    dispatch(_loadClients(clients));
  };
};

export const addClient = (client, history) => {
  return async (dispatch) => {
    client = (await axios.post("/api/clients", client)).data;
    dispatch(_addClient(client));
    history.push("/memberships");
  };
};

export const updateClient = (client, history) => {
  return async (dispatch) => {
    client = (await axios.put(`/api/clients/${client.id}`, client)).data;
    history.push("/memberships");
  };
};

export const deleteClient = (client, history) => {
  return async (dispatch) => {
    await axios.delete(`/api/clients/${client.id}`);
    dispatch(_deleteClient(client));
    history.push("/memberships");
  };
};

export const clients = (state = [], action) => {
  switch (action.type) {
    case LOAD_CLIENTS:
      return action.clients;
    case ADD_CLIENT:
      return [...state, action.client];
    case DELETE_CLIENT:
      return [...state].filter((client) => client.id !== action.client.id);
    default:
      return state;
  }
};
