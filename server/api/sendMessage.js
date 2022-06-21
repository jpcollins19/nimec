const sendgrid = require("@sendgrid/mail");
const app = require("express").Router();
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (incomingMsg) => {
  const { firstName, lastName, email, number, message, attachments } =
    incomingMsg;

  const attachmentsToSend = attachments.reduce((a, attachment, idx) => {
    const content = attachment.url.split(",")[1];

    const split = attachment.name.split(".");

    const type = `.${split[split.length - 1]}`;

    const obj = {
      content,
      filename: attachment.name,
      type,
      disposition: "attachment",
      contentId: "myText",
    };

    a.push(obj);

    return a;
  }, []);

  const finalMessage = {
    to: process.env.SENDGRID_TO_ADDRESS,
    from: process.env.SENDGRID_FROM_ADDRESS,
    templateId: "d-70d1eb6f21b54dd5bea82b5947780b99",
    dynamicTemplateData: {
      firstName,
      lastName,
      email,
      number,
      message,
    },
    attachments: attachmentsToSend,
  };

  await sendgrid
    .send(finalMessage)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error.response.body);
    });
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
