import axios from "axios";

const LOAD_FAQS = "LOAD_FAQS";
const ADD_FAQ = "ADD_FAQ";
const DELETE_FAQ = "DELETE FAQ";

const _loadFaqs = (faqs) => {
  return { type: LOAD_FAQS, faqs };
};

const _addFaq = (faq) => {
  return { type: ADD_FAQ, faq };
};

const _deleteFaq = (faq) => {
  return { type: DELETE_FAQ, faq };
};

export const loadFaqs = () => {
  return async (dispatch) => {
    const faqs = (await axios.get("/api/faqs")).data;
    dispatch(_loadFaqs(faqs));
  };
};

export const addFaq = (faq, history) => {
  return async (dispatch) => {
    faq = (await axios.post("/api/faqs", faq)).data;
    dispatch(_addFaq(faq));
    history.push("/faqs");
  };
};

export const updateFaq = (faq, history) => {
  return async (dispatch) => {
    faq = (await axios.put(`/api/faqs/${faq.id}`, faq)).data;
    history.push("/faqs");
  };
};

export const deleteFaq = (faq, history) => {
  return async (dispatch) => {
    await axios.delete(`/api/faqs/${faq.id}`);
    dispatch(_deleteFaq(faq));
    history.push("/faqs");
  };
};

export const faqs = (state = [], action) => {
  switch (action.type) {
    case LOAD_FAQS:
      return action.faqs;
    case ADD_FAQ:
      return [...state, action.faq];
    case DELETE_FAQ:
      return [...state].filter((faq) => faq.id !== action.faq.id);
    default:
      return state;
  }
};
