import axios from "axios";

const LOAD_SAVINGS = "LOAD_SAVINGS";

const _loadSavings = (savings) => {
  return { type: LOAD_SAVINGS, savings };
};

export const loadSavings = () => {
  return async (dispatch) => {
    const savings = (await axios.get("/api/savings")).data;
    dispatch(_loadSavings(savings));
  };
};

export const savings = (state = [], action) => {
  switch (action.type) {
    case LOAD_SAVINGS:
      return action.savings;
    default:
      return state;
  }
};
