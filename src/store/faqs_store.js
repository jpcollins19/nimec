import axios from "axios";

const LOAD_FAQS = "LOAD_FAQS";
// const ADD_ATTACHMENT = "ADD_ATTACHMENT";
// const DELETE_ATTACHMENT = "DELETE_ATTACHMENT";

const _loadFaqs = (faqs) => {
  return { type: LOAD_FAQS, faqs };
};

// const _addAttachment = (attachment) => {
//   return { type: ADD_ATTACHMENT, attachment };
// };

// const _deleteAttachment = (attachment) => {
//   return { type: DELETE_ATTACHMENT, attachment };
// };

export const loadFaqs = () => {
  return async (dispatch) => {
    const faqs = (await axios.get("/api/faqs")).data;
    dispatch(_loadFaqs(faqs));
  };
};

// export const addAttachment = (attachment) => {
//   return async (dispatch) => {
//     attachment = (await axios.post("/api/attachments", attachment)).data;
//     dispatch(_addAttachment(attachment));
//   };
// };

// export const deleteAttachment = (attachment) => {
//   return async (dispatch) => {
//     await axios.delete(`/api/attachments/${attachment.id}`);
//     dispatch(_deleteAttachment(attachment));
//   };
// };

export const faqs = (state = [], action) => {
  switch (action.type) {
    case LOAD_FAQS:
      return action.faqs;
    // case ADD_ATTACHMENT:
    //   return [...state, action.attachment];
    // case DELETE_ATTACHMENT:
    //   return [...state].filter(
    //     (attachment) => attachment.id !== action.attachment.id
    //   );
    default:
      return state;
  }
};
