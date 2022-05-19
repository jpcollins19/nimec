const Sequelize = require("sequelize");
const db = require("../db.js");
const { UUID, UUIDV4, TEXT, STRING } = Sequelize;

const Attachment = db.define("attachments", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  url: { type: TEXT },
  name: { type: STRING },
});

module.exports = Attachment;
