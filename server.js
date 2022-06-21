//final css work on all pages - hoovs directions

////after ccs work complete, roll through each file and delete commented out info

//connect the hover website to the heroku app

////////logged in user////////////////////////////////

////about us - do

////////logged in user////////////////////////////////

/////next call with hoov
//test out sendgrid from local state.  assuming it works, need to adjust heroku app and then test from heroku app
//remind him about "our services" municpal pdf
//figure out sendgrid - test with local state first - see sendgrid email
//waiting on pics for all, and all of chads info

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

app.use("/", require("./server/api/savings.js"));
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
