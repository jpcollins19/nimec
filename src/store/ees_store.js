import axios from "axios";

const LOAD_EEs = "LOAD_EEs";

const _loadEEs = (EEs) => {
  return { type: LOAD_EEs, EEs };
};

export const loadEEs = () => {
  return async (dispatch) => {
    const EEs = (await axios.get("/api/ees")).data;
    dispatch(_loadEEs(EEs));
  };
};

export const EEs = (state = [], action) => {
  switch (action.type) {
    case LOAD_EEs:
      return action.EEs;
    default:
      return state;
  }
};
