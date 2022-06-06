const Sequelize = require("sequelize");
const db = require("../db.js");
const { STRING, UUID, UUIDV4, TEXT, INTEGER } = Sequelize;

const Chart = db.define("charts", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  order: {
    type: INTEGER,
    defaultValue: null,
  },
  name: {
    type: STRING,
    defaultValue: null,
  },
  img: {
    type: TEXT,
    defaultValue: null,
  },
  description: {
    type: TEXT,
    defaultValue: null,
  },
});

module.exports = Chart;
