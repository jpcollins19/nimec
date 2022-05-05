const Sequelize = require("sequelize");
const db = require("../db.js");
const { STRING, UUID, UUIDV4 } = Sequelize;

const Chart = db.define("charts", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  comed: {
    type: STRING,
    defaultValue: null,
    img: {
      type: STRING,
    },
  },
  nicor: {
    type: STRING,
    defaultValue: null,
    img: {
      type: STRING,
    },
  },
});

module.exports = Chart;
