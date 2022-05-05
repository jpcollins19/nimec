const app = require("express").Router();

const {
  models: { Client },
} = require("../db/index.js");

app.get("/api/clients", async (req, res, next) => {
  try {
    const clients = await Client.findAll();
    res.send(clients);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
