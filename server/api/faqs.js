const app = require("express").Router();

const {
  models: { FAQ },
} = require("../db/index.js");

app.get("/api/faqs", async (req, res, next) => {
  try {
    const faqs = await FAQ.findAll();
    res.send(faqs);
  } catch (err) {
    next(err);
  }
});

app.post("/api/faqs", async (req, res, next) => {
  try {
    const faq = await { ...req.body };
    res.status(201).send(await FAQ.create(faq));
  } catch (err) {
    next(err);
  }
});

app.put("/api/faqs/:id", async (req, res, next) => {
  try {
    const faq = await FAQ.findByPk(req.params.id);
    res.status(204).send(await faq.update(req.body));
  } catch (err) {
    next(err);
  }
});

app.delete("/api/faqs/:id", async (req, res, next) => {
  try {
    const faq = await FAQ.findByPk(req.params.id);
    await faq.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
