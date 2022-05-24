import axios from "axios";

const LOAD_ATTACHMENTS = "LOAD_ATTACHMENTS";
const ADD_ATTACHMENT = "ADD_ATTACHMENT";
const DELETE_ATTACHMENT = "DELETE_ATTACHMENT";
const ATTACHMENT_LOADING = "ATTACHMENT_LOADING";

const _loadAttachments = (attachments) => {
  return { type: LOAD_ATTACHMENTS, attachments };
};

const _attachmentLoading = (boolean) => {
  return { type: ATTACHMENT_LOADING, boolean };
};

const _addAttachment = (attachment) => {
  return { type: ADD_ATTACHMENT, attachment };
};

const _deleteAttachment = (attachment) => {
  return { type: DELETE_ATTACHMENT, attachment };
};

export const loadAttachments = () => {
  return async (dispatch) => {
    const attachments = (await axios.get("/api/attachments")).data;
    dispatch(_loadAttachments(attachments));
  };
};

export const addAttachment = (attachment, options) => {
  return async (dispatch) => {
    dispatch(_attachmentLoading(true));
    attachment = (await axios.post("/api/attachments", attachment, options))
      .data;
    dispatch(_addAttachment(attachment));
    dispatch(_attachmentLoading(false));
  };
};

export const deleteAttachment = (attachment) => {
  return async (dispatch) => {
    await axios.delete(`/api/attachments/${attachment.id}`);
    dispatch(_deleteAttachment(attachment));
  };
};

export const attachments = (state = [], action) => {
  switch (action.type) {
    case LOAD_ATTACHMENTS:
      return action.attachments;
    case ADD_ATTACHMENT:
      return [...state, action.attachment];
    case DELETE_ATTACHMENT:
      return [...state].filter(
        (attachment) => attachment.id !== action.attachment.id
      );
    default:
      return state;
  }
};

export const attachmentsLoading = (state = false, action) => {
  switch (action.type) {
    case ATTACHMENT_LOADING:
      return action.boolean;
    default:
      return state;
  }
};
