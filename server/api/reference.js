const app = require("express").Router();

const {
  models: { Reference },
} = require("../db/index.js");

app.get("/api/references", async (req, res, next) => {
  try {
    const references = await Reference.findAll();
    res.send(references);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
