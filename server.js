//put video in between synopsis and service-newsletter-cont
//add youtube video: https://www.youtube.com/watch?v=F4Kybq8U3nE
//Learn more about Community Solar from ComEd:

////savings comparison
//waiting on hoov for answers
//this page will house the poppa hoov charts
//chart model/api - need to add/update instance info - no more nicor or comed charts

////who we are - might not be needed - waiting on hoov

////about us
//waiting on pics for all, and all of chads info

////contact us email receipt viewing
//css work via sendGrid's template on their website

//connect the hover website to the heroku app

////login page is last
//copy updated code from world cup app
//create your first page to udpate a page with a logged in user, and then audit on heroku to see if the updates show before you apply web sockets
////FAQ
//look at how julie did the amenities and/or photo stuff in the roomer app for a user friendly way to drag/drop to organize the sort order

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
