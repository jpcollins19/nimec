const app = require("express").Router();

const {
  models: { Client, Reference },
} = require("../db/index.js");

app.get("/api/clients", async (req, res, next) => {
  try {
    const clients = await Client.findAll({
      include: [Reference],
    });
    res.send(clients);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
