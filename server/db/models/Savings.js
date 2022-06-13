const Sequelize = require("sequelize");
const db = require("../db.js");
const { UUID, UUIDV4, TEXT, INTEGER } = Sequelize;

const Savings = db.define("savings", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  idd: {
    type: INTEGER,
  },
  synopsis: {
    type: TEXT,
    defaultValue: null,
    validate: {
      notEmpty: true,
    },
  },
  attachment: {
    type: TEXT,
    defaultValue: null,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Savings;
