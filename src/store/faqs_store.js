import axios from "axios";

const LOAD_FAQS = "LOAD_FAQS";

const _loadFaqs = (faqs) => {
  return { type: LOAD_FAQS, faqs };
};

export const loadFaqs = () => {
  return async (dispatch) => {
    const faqs = (await axios.get("/api/faqs")).data;
    dispatch(_loadFaqs(faqs));
  };
};

export const faqs = (state = [], action) => {
  switch (action.type) {
    case LOAD_FAQS:
      return action.faqs;
    default:
      return state;
  }
};
