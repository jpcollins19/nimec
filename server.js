////our services - resindential
//fix page number css at bottom of newsletter

////savings comparison
//hoov answers in word doc

////about us
//waiting on pics for all, and all of chads info

//final css work onall pages

//connect the hover website to the heroku app

////login page
//add error handling for when you add a new member
//then move into editing a member
////FAQ for logged in user
//look at how julie did the amenities and/or photo stuff in the roomer app for a user friendly way to drag/drop to organize the sort order

////contact us email receipt viewing
//css work via sendGrid's template on their website

const express = require("express");
const app = express();
const syncAndSeed = require("./server/script/seed");
const path = require("path");

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(express.json());

app.use("/dist", express.static(path.join(__dirname, "dist")));

app.use("/public/pics", express.static(path.join(__dirname, "public/pics")));

app.use("/", require("./server/api/mission.js"));
app.use("/", require("./server/api/faqs.js"));
app.use("/", require("./server/api/ees.js"));
app.use("/", require("./server/api/attachments.js"));
app.use("/", require("./server/api/sendMessage.js"));
app.use("/", require("./server/api/services.js"));
app.use("/", require("./server/api/clients.js"));
app.use("/", require("./server/api/auth.js"));
app.use("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "html/main.html"))
);

const init = async () => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 1919;
    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

init();
