const sendgrid = require("@sendgrid/mail");
const app = require("express").Router();
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (incomingMsg) => {
  const { firstName, lastName, email, message, photos } = incomingMsg;
  const finalMessage = {
    to: process.env.SENDGRID_TO_ADDRESS,
    from: process.env.SENDGRID_FROM_ADDRESS,
    subject: "New Message from website",
    text: message,
    // templateId: "d-9ef6456c848c492490b98b3d57b50375",
    // dynamicTemplateData: {
    //   firstName,
    //   lastName,
    //   email,
    //   message,
    //   photos,
    // },
  };

  console.log("nugget", finalMessage);
  await sendgrid.send(finalMessage);
  // sgMail
  //   .send(finalMessage)
  //   .then(() => {
  //     console.log("Email sent");
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
};

app.post("/api/send-message", async (req, res, next) => {
  try {
    await sendEmail(req.body);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
