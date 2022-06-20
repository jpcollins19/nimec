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

app.post("/api/ees", async (req, res, next) => {
  try {
    const ee = await { ...req.body };
    res.status(201).send(await EE.create(ee));
  } catch (err) {
    next(err);
  }
});

app.put("/api/ees/:id", async (req, res, next) => {
  try {
    const ee = await EE.findByPk(req.params.id);
    res.status(204).send(await ee.update(req.body));
  } catch (err) {
    next(err);
  }
});

app.delete("/api/ees/:id", async (req, res, next) => {
  try {
    const ee = await EE.findByPk(req.params.id);
    await ee.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
