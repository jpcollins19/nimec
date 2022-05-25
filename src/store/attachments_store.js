import axios from "axios";

const LOAD_ATTACHMENTS = "LOAD_ATTACHMENTS";
const ADD_ATTACHMENT = "ADD_ATTACHMENT";
const DELETE_ATTACHMENT = "DELETE_ATTACHMENT";
const RESET_ATTACHMENTS = "RESET_ATTACHMENTS";
const INCREASE_ATTACHMENT_COUNT = "INCREASE_ATTACHMENT_COUNT";
const DECREASE_ATTACHMENT_COUNT = "DECREASE_ATTACHMENT_COUNT";
const RESET_ATTACHMENT_COUNT = "RESET_ATTACHMENT_COUNT";

const _loadAttachments = (attachments) => {
  return { type: LOAD_ATTACHMENTS, attachments };
};

const _addAttachment = (attachment) => {
  return { type: ADD_ATTACHMENT, attachment };
};

const _deleteAttachment = (attachment) => {
  return { type: DELETE_ATTACHMENT, attachment };
};

const _resetAttachments = () => {
  return { type: RESET_ATTACHMENTS };
};

const _increaseAttachmentCount = () => {
  return { type: INCREASE_ATTACHMENT_COUNT };
};

const _decreaseAttachmentCount = () => {
  return { type: DECREASE_ATTACHMENT_COUNT };
};

const _resetAttachmentCount = () => {
  return { type: RESET_ATTACHMENT_COUNT };
};

export const loadAttachments = () => {
  return async (dispatch) => {
    const attachments = (await axios.get("/api/attachments")).data;
    dispatch(_loadAttachments(attachments));
  };
};

export const addAttachment = (attachment, options) => {
  return async (dispatch) => {
    attachment = (await axios.post("/api/attachments", attachment, options))
      .data;

    dispatch(_addAttachment(attachment));

    setTimeout(() => {
      dispatch(_increaseAttachmentCount());
    }, 2000);
  };
};

export const deleteAttachment = (attachment) => {
  return async (dispatch) => {
    await axios.delete(`/api/attachments/${attachment.id}`);
    dispatch(_deleteAttachment(attachment));
    dispatch(_decreaseAttachmentCount());
  };
};

export const resetAttachments = () => {
  return async (dispatch) => {
    dispatch(_resetAttachments());
  };
};

export const resetAttachmentCount = () => {
  return async (dispatch) => {
    dispatch(_resetAttachmentCount());
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
    case RESET_ATTACHMENTS:
      state = [];
      return state;
    default:
      return state;
  }
};

export const attachmentCount = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_ATTACHMENT_COUNT:
      return state + 1;
    case DECREASE_ATTACHMENT_COUNT:
      return state - 1;
    case RESET_ATTACHMENT_COUNT:
      state = 0;
      return state;
    default:
      return state;
  }
};
