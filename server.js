////contact us
//when you upload more files than can fit inside the set cont width, a side scroll bar appears
//css-work - on drag/drop area - make it different color on hover
//css work - for files that have been attached
//css work - on toaster notification - "Your information has been sent to Adam Hoover, he will respond shortly."

////savings comparison
//waiting on hoov for answers
//this page will house the comed/nicor/poppa hoov charts
//chart model/api - need to add instance info for more charts

////who we are - might not be needed - waiting on hoov

////about us
//waiting on pics for all, and all of chads info

////our services
//need css work

////membership
//fix the select dropdown to match what you did in world cup
//need css work

////FAQ
//need css work

////contact us email receipt viewing
//css work via sendGrid's template on their website

////login page is last
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
