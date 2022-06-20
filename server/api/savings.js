const app = require("express").Router();

const {
  models: { Savings },
} = require("../db/index.js");

app.get("/api/savings", async (req, res, next) => {
  try {
    const savings = await Savings.findAll({ where: { idd: 1 } });
    res.send(savings);
  } catch (err) {
    next(err);
  }
});

app.put("/api/savings/:id", async (req, res, next) => {
  try {
    const savings = await Savings.findByPk(req.params.id);
    res.status(204).send(await savings.update(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = app;
