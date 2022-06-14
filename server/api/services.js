const app = require("express").Router();

const {
  models: { Service },
} = require("../db/index.js");

app.get("/api/services", async (req, res, next) => {
  try {
    const services = await Service.findAll();
    res.send(services);
  } catch (err) {
    next(err);
  }
});

app.put("/api/services/:id", async (req, res, next) => {
  try {
    const service = await Service.findByPk(req.params.id);
    res.status(204).send(await service.update(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = app;
