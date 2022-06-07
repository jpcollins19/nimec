const Sequelize = require("sequelize");
const db = require("../db.js");
const { UUID, UUIDV4, TEXT, INTEGER } = Sequelize;

const Mission = db.define("missions", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  idd: {
    type: INTEGER,
  },
  statement: { type: TEXT },
});

module.exports = Mission;
