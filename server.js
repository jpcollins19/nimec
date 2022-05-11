////contact us
//react-hot-toast = how to submit so the user gets an email...i think
//uploading images: step 4 of roomer app:
//Yup -- validates # of images?
//Formik - easier way to submit a form?

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
