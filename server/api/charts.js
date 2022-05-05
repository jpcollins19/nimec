const app = require("express").Router();

const {
  models: { Chart },
} = require("../db/index.js");

app.get("/api/charts", async (req, res, next) => {
  try {
    const charts = await Chart.findAll();
    res.send(charts);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
