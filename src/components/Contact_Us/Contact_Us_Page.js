import Box from "@mui/material/Box";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, addAttachment, deleteAttachment } from "../../store";
import Input_Cont from "./Input_Cont";
import toast, { Toaster } from "react-hot-toast";
import "./Contact_Us.css";

const Contact_Us_Page = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const attachments = useSelector((state) => state.attachments);

  const messageSent = () => {
    toast(
      `Thank you ${firstName}!
      
      Your information has been sent to a NIMEC representative.`,
      {
        duration: 5000,
      }
    );
  };

  const clearArr = (arr) => {
    while (arr.length) {
      arr.pop();
      return clearArr(arr);
    }
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const emailContent = {
        firstName,
        lastName,
        email,
        message,
        attachments,
      };

      dispatch(sendMessage(emailContent));

      attachments.forEach((attachment) =>
        dispatch(deleteAttachment(attachment))
      );

      clearArr(attachments);
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      messageSent();
      evt.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    const fileInfo = e.target.files;

    for (let i = 0; i < fileInfo.length; i++) {
      const file = fileInfo[i];
      const fileReader = new FileReader();
      fileReader.onload = (ev) => {
        if (fileReader.readyState === 2) {
          const name = file.name;
          const url = ev.target.result;
          dispatch(addAttachment({ name, url }));
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="100vh"
      className="contact-us-page"
    >
      <ul className="form-style-1">
        <form id="my-form" onSubmit={onSubmit}>
          <Input_Cont value={"First Name"} setFirstName={setFirstName} />
          <Input_Cont value={"Last Name"} setLastName={setLastName} />
          <Input_Cont value={"Email"} setEmail={setEmail} />
          <Input_Cont value={"Message"} setMessage={setMessage} />
        </form>
        <h4>Drop files below, or click inside the box to choose a file</h4>
        <h5>**File(s) must be pdf**</h5>
        <li className="attachments">
          <input
            type="file"
            accept="application/pdf"
            multiple
            onChange={onChange}
          />
          <div>
            {attachments && attachments.length ? (
              attachments.map((attachment, idx) => (
                <div key={idx} className="attachment-single-cont">
                  <div className="fileName-cont">{attachment.name}</div>
                  <button
                    onClick={() => dispatch(deleteAttachment(attachment))}
                    className="clear"
                  >
                    X
                  </button>
                </div>
              ))
            ) : (
              <div className="drag-message">Drag pdf files here</div>
            )}
          </div>
        </li>

        <div className="submit-cont">
          <button
            form="my-form"
            type="submit"
            disabled={
              firstName.length === 0 ||
              lastName.length === 0 ||
              email.length === 0 ||
              message.length === 0
            }
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
          <Toaster
            toastOptions={{
              className: "toaster-submit-confirmation",
            }}
          />
        </div>
      </ul>
    </Box>
  );
};

export default Contact_Us_Page;
