const app = require("express").Router();

const {
  models: { Resource },
} = require("../db/index.js");

app.get("/api/resources", async (req, res, next) => {
  try {
    const resources = await Resource.findAll();
    res.send(resources);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
