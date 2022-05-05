const Sequelize = require("sequelize");

const config = {
  logging: false,
};

if (process.env.LOGGING) {
  delete config.logging;
}

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/nimec"
);

module.exports = db;
