const db = require("./db");
const User = require("./models/User");
const Client = require("./models/Client");
const Article = require("./models/Article");
const Chart = require("./models/Chart");
const EE = require("./models/EE");
const Reference = require("./models/Reference");

Client.hasMany(Reference);
Reference.belongsTo(Client);

module.exports = {
  db,
  models: {
    User,
    Client,
    Article,
    Chart,
    EE,
    Reference,
  },
};
