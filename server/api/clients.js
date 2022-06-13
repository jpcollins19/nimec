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

app.post("/api/clients", async (req, res, next) => {
  try {
    const client = await { ...req.body };
    res.status(201).send(await Client.create(client));
  } catch (err) {
    next(err);
  }
});

app.put("/api/clients/:id", async (req, res, next) => {
  try {
    const client = await Client.findByPk(req.params.id);
    res.status(204).send(await client.update(req.body));
  } catch (err) {
    next(err);
  }
});

app.delete("/api/clients/:id", async (req, res, next) => {
  try {
    const client = await Client.findByPk(req.params.id);
    await client.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
