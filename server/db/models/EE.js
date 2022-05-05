const Sequelize = require("sequelize");
const db = require("../db.js");
const { STRING, UUID, UUIDV4, TEXT, INTEGER } = Sequelize;

const EE = db.define("EEs", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
    defaultValue: null,
    validate: {
      notEmpty: true,
    },
  },
  photo: {
    type: STRING,
    defaultValue: null,
    img: { type: STRING },
    validate: {
      notEmpty: true,
    },
  },
  title: {
    type: STRING,
    defaultValue: null,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: STRING,
    defaultValue: null,
    validate: {
      notEmpty: true,
    },
  },
  phone: {
    type: STRING,
    defaultValue: null,
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
  order: {
    type: INTEGER,
    defaultValue: null,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = EE;
