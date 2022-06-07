const app = require("express").Router();

const {
  models: { Mission },
} = require("../db/index.js");

app.get("/api/missions", async (req, res, next) => {
  try {
    const missions = await Mission.findAll({ where: { idd: 1 } });
    res.send(missions);
  } catch (err) {
    next(err);
  }
});

app.put(`/api/missions/:id`, async (req, res, next) => {
  try {
    const mission = await Mission.findByPk(req.params.id);
    res.status(204).send(await mission.update(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = app;
