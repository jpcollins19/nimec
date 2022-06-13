const db = require("./db");
const User = require("./models/User");
const Client = require("./models/Client");
const Chart = require("./models/Chart");
const EE = require("./models/EE");
const Reference = require("./models/Reference");
const Service = require("./models/Service");
const Attachment = require("./models/Attachment");
const FAQ = require("./models/FAQ");
const Mission = require("./models/Mission");
const Savings = require("./models/Savings");

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
    Attachment,
    FAQ,
    Mission,
    Savings,
  },
};
