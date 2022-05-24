const Sequelize = require("sequelize");
const db = require("../db.js");
const { UUID, UUIDV4, TEXT, INTEGER, BOOLEAN, STRING } = Sequelize;

const FAQ = db.define("faqs", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  order: { type: INTEGER },
  Q: { type: TEXT },
  A: { type: TEXT },
  linkNeeded: { type: BOOLEAN, defaultValue: false },
  link: { type: STRING, defaultValue: null },
  linkWord: { type: STRING, defaultValue: null },
});

module.exports = FAQ;
