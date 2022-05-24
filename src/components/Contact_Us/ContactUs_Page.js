import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, addAttachment, deleteAttachment } from "../../store";
import Joint_Cont from "./Joint_Cont";
import toast, { Toaster } from "react-hot-toast";
import { ProgressBar } from "react-bootstrap";
// import ProgressBar from "bootstrap-progress-bar";

import "./Contact_Us.css";

const ContactUs_Page = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [percent, setPercent] = useState(0);

  const attachments = useSelector((state) => state.attachments);

  // let notLoadedName = [];
  // let notLoadedObj = [];

  useEffect(() => {
    attachments.forEach((attachment) => dispatch(deleteAttachment(attachment)));

    clearArr(attachments);
  }, []);

  // useEffect(() => {
  //   console.log("notLoadedName", notLoadedName);
  // }, [notLoadedName]);

  // useEffect(() => {
  //   console.log("notLoadedObj", notLoadedObj);
  // }, [notLoadedObj]);

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
        number,
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
      setNumber("");
      setMessage("");
      messageSent();
      evt.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  // { target: { files } }

  const onChange = (e) => {
    const fileInfo = e.target.files;

    console.log(fileInfo[0]);

    for (let i = 0; i < fileInfo.length; i++) {
      const file = fileInfo[i];
      const fileReader = new FileReader();

      const options = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          let percentComplete = Math.floor((loaded * 100) / total);

          setPercent(percentComplete);

          // const obj = {
          //   name: file.name,
          //   percent,
          // };

          // console.log("obj", obj);

          // if (notLoadedName.includes(file.name)) {
          //   notLoadedObj = notLoadedObj.map((obj) => {
          //     if (obj.name === file.name) {
          //       obj.percent = percent;
          //     }
          //     return obj;
          //   });
          // } else {
          //   notLoadedName.push(file.name);
          //   notLoadedObj.push(obj);
          // }

          console.log("loaded", loaded);
          console.log("total", total);
          console.log("perpercentCompletecent", percentComplete);
        },
      };

      fileReader.onload = (ev) => {
        if (fileReader.readyState === 2) {
          const name = file.name;
          const url = ev.target.result;
          dispatch(addAttachment({ name, url }, options));
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
          <Joint_Cont
            cont={1}
            setFirstName={setFirstName}
            setLastName={setLastName}
          />
          <Joint_Cont cont={2} setEmail={setEmail} setNumber={setNumber} />
          <Joint_Cont cont={3} setMessage={setMessage} />
        </form>
        <h4>Drag/drop files below, or click inside the box to choose a file</h4>
        <h5>**File(s) must be pdf, jpg or png**</h5>
        <li className={attachments.length ? "attachments" : "no-attachments"}>
          <input
            type="file"
            accept=".pdf, .png, .jpg"
            multiple
            onChange={onChange}
          />
          <div>
            {attachments &&
              attachments.length > 0 &&
              attachments.map((attachment, idx) => (
                <div key={idx} className="attachment-single-cont">
                  <div className="fileName-cont">{attachment.name}</div>
                  <ProgressBar now={percent} label={`${percent}%`} />

                  <button
                    onClick={() => dispatch(deleteAttachment(attachment))}
                    className="clear"
                  >
                    X
                  </button>
                </div>
              ))}
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

export default ContactUs_Page;