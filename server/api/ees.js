const app = require("express").Router();

const {
  models: { EE },
} = require("../db/index.js");

app.get("/api/ees", async (req, res, next) => {
  try {
    const ees = await EE.findAll();
    res.send(ees);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
