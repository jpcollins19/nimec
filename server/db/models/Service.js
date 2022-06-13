const Sequelize = require("sequelize");
const db = require("../db.js");
const { STRING, UUID, UUIDV4, TEXT } = Sequelize;

const Service = db.define("services", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  service: {
    type: STRING,
    defaultValue: null,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  synopsis: {
    type: TEXT,
    defaultValue: null,
    validate: {
      notEmpty: true,
    },
  },
  newsletter: {
    type: TEXT,
    defaultValue: null,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Service;
