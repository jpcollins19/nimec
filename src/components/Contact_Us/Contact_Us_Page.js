import Box from "@mui/material/Box";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../store";
import Input_Cont from "./Input_Cont";
import toast, { Toaster } from "react-hot-toast";
import Alert from "@mui/material/Alert";
import "./Contact_Us.css";

const Contact_Us_Page = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [attachments, setAttachments] = useState([]);

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

      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setAttachments([]);
      clearArr(namesArr);
      messageSent();
      evt.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const namesArr = [];

  const onChange = (e) => {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileReader = new FileReader();
      fileReader.fileName = file.name;
      fileReader.onload = (ev) => {
        if (fileReader.readyState === 2) {
          namesArr.push(ev.target.fileName);
        }
      };

      fileReader.readAsText(file);
    }

    setTimeout(() => {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileReader = new FileReader();
        fileReader.fileName = file.name;
        fileReader.onload = (ev) => {
          if (fileReader.readyState === 2) {
            setAttachments((prevAttachments) => [
              ...prevAttachments,
              { url: fileReader.result, name: namesArr[i] },
            ]);
          }
        };
        fileReader.readAsDataURL(file);
      }
    }, 500);
  };

  const remove = (url) => {};

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
      <form onSubmit={onSubmit}>
        <ul className="form-style-1">
          <Input_Cont value={"First Name"} setFirstName={setFirstName} />
          <Input_Cont value={"Last Name"} setLastName={setLastName} />
          <Input_Cont value={"Email"} setEmail={setEmail} />
          <Input_Cont value={"Message"} setMessage={setMessage} />
          <div>Drop files below, or click inside the box to choose a file</div>
          <li className="attachments">
            <input
              type="file"
              accept="application/pdf"
              multiple
              onChange={onChange}
            />
            <div>
              {attachments.length ? (
                attachments.map((attachment, idx) => (
                  <div key={idx} className="attachment-single-cont">
                    <div className="fileName-cont">{attachment.name}</div>
                    <div onClick={() => remove(attachment.url)}>X</div>
                  </div>
                ))
              ) : (
                <div className="drag-message">Drag files here</div>
              )}
            </div>
          </li>
          <div className="submit-cont">
            <div>
              <button disabled={firstName.length === 0}>Submit</button>
              <Toaster
                toastOptions={{
                  className: "toaster-submit-confirmation",
                }}
              />
            </div>
            <div className="error-cont">
              <Alert severity="error" className="error-text">
                Error Info goes here
              </Alert>
            </div>
          </div>
        </ul>
      </form>
    </Box>
  );
};

export default Contact_Us_Page;
