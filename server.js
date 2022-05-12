////contact us
//need to figure out the sendgrid stuff - start from scratch with registiring a new api key
//ability to add a pdf or jpg file too
//add the title of the file to the photo info when you choose a file to upload
//make toaster notification say the users name
//after you send a message - the app adds querystringparams to the url
//work on error handling
//css work

////savings comparison
//chart model/api - need to add instance info for more charts
//waiting on hoov, but this page will house the comed/nicor/poppa hoov charts

////who we are - might not be needed

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

//login page is last

const express = require("express");
const app = express();
const syncAndSeed = require("./server/script/seed");
const path = require("path");

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
