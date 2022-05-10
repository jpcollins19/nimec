const Sequelize = require("sequelize");
const db = require("../db.js");
const { STRING, UUID, UUIDV4, BOOLEAN } = Sequelize;

const Client = db.define("clients", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
    defaultValue: null,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  municipalAgg: {
    type: BOOLEAN,
    defaultValue: false,
  },
  organization: {
    type: STRING,
    defaultValue: null,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Client;
