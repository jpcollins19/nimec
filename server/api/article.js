const app = require("express").Router();

const {
  models: { Article },
} = require("../db/index.js");

app.get("/api/articles", async (req, res, next) => {
  try {
    const articles = await Article.findAll();
    res.send(articles);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
