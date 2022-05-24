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

// app.post("/api/attachments", async (req, res, next) => {
//   try {
//     const attachment = await { ...req.body };
//     res.status(201).send(await Attachment.create(attachment));
//   } catch (err) {
//     next(err);
//   }
// });

// app.delete("/api/attachments/:id", async (req, res, next) => {
//   try {
//     const attachment = await Attachment.findByPk(req.params.id);
//     await attachment.destroy();
//     res.sendStatus(204);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = app;
