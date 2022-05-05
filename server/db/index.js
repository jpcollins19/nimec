const db = require("./db");
const User = require("./models/User");
const Client = require("./models/Client");
const Resource = require("./models/Resource");
const Chart = require("./models/Chart");
const EE = require("./models/EE");

module.exports = {
  db,
  models: {
    User,
    Client,
    Resource,
    Chart,
    EE,
  },
};
