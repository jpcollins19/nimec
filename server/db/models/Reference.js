const Sequelize = require("sequelize");
const db = require("../db.js");
const { STRING, UUID, UUIDV4, TEXT } = Sequelize;

const Reference = db.define("references", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
    defaultValue: null,
  },
  title: {
    type: STRING,
    defaultValue: null,
    validate: {
      notEmpty: true,
    },
  },
  quote: {
    type: TEXT,
    defaultValue: null,
  },
});

module.exports = Reference;
