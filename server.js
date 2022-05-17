////contact us
//css work - what is looks like after you add a file - what if there are 20+ file added, overflow: auto
//clean up the contactUs.js file
//see if you can make the contactUs.js file clearner by adding more .js files
//work on error handling
//sendgrid - try and remove the unsubscribe from the bottom of the email
//ability to add a png or jpg file too
//css work

////savings comparison
//waiting on hoov, but this page will house the comed/nicor/poppa hoov charts
//chart model/api - need to add instance info for more charts

////who we are - might not be needed - waiting on hoov

////about us
//EE model and api

////FAQ
//need a model and api
//add an order instance? look at how julie did the amenities stuff in the roomer app
//need to control where each FAQ is listed on the web page

////our services
//need css work

////membership
//need css work

////contact us email receipt viewing
//css work via sendGrid's template on their website

//login page is last

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
