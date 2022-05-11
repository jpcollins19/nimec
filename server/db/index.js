const db = require("./db");
const User = require("./models/User");
const Client = require("./models/Client");
const Chart = require("./models/Chart");
const EE = require("./models/EE");
const Reference = require("./models/Reference");
const Service = require("./models/Service");

Client.hasMany(Reference);
Reference.belongsTo(Client);

module.exports = {
  db,
  models: {
    User,
    Client,
    Chart,
    EE,
    Reference,
    Service,
  },
};
