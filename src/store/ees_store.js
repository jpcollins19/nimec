import axios from "axios";

const LOAD_EEs = "LOAD_EEs";
const ADD_EE = "ADD_EE";
const DELETE_EE = "DELETE_EE";

const _loadEEs = (EEs) => {
  return { type: LOAD_EEs, EEs };
};

const _addEE = (ee) => {
  return { type: ADD_EE, ee };
};

const _deleteEE = (ee) => {
  return { type: DELETE_EE, ee };
};

export const loadEEs = () => {
  return async (dispatch) => {
    const EEs = (await axios.get("/api/ees")).data;
    dispatch(_loadEEs(EEs));
  };
};

export const addEE = (ee, history) => {
  return async (dispatch) => {
    ee = (await axios.post("/api/ees", ee)).data;
    dispatch(_addEE(ee));
    history.push("/about_us");
  };
};

export const updateEE = (ee, history) => {
  return async (dispatch) => {
    ee = (await axios.put(`/api/ees/${ee.id}`, ee)).data;
    history.push("/about_us");
  };
};

export const deleteEE = (ee, history) => {
  return async (dispatch) => {
    await axios.delete(`/api/ees/${ee.id}`);
    dispatch(_deleteEE(ee));
    history.push("/about_us");
  };
};

export const EEs = (state = [], action) => {
  switch (action.type) {
    case LOAD_EEs:
      return action.EEs;
    case ADD_EE:
      return [...state, action.ee];
    case DELETE_EE:
      return [...state].filter((ee) => ee.id !== action.ee.id);
    default:
      return state;
  }
};
