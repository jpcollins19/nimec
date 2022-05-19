import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, addAttachment, deleteAttachment } from "../../store";
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
  const [error, setError] = useState("");

  const attachments = useSelector((state) => state.attachments);

  useEffect(() => {
    console.log("attachments", attachments);
  }, [attachments]);

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

  // const onChange = (e) => {
  //   const fileInfo = e.target.files;

  //   for (let i = 0; i < fileInfo.length; i++) {
  //     const file = fileInfo[i];
  //     const fileReader = new FileReader();
  //     fileReader.onload = (ev) => {
  //       if (fileReader.readyState === 2) {
  //         id++;
  //         console.log("id", id);
  //         setUpdatedId(id);
  //         setAttachments((prevAttachments) => [
  //           ...prevAttachments,
  //           { id, url: fileReader.result, name: null },
  //         ]);
  //         setFiles((prevFiles) => [
  //           ...prevFiles,
  //           { id, file, url: fileReader.result },
  //         ]);
  //       }
  //     };
  //     fileReader.readAsDataURL(file);
  //   }
  // };

  // const remove = (id) => {
  //   let targetAttachments = attachments;

  //   targetAttachments = targetAttachments.filter(
  //     (attachment) => attachment.id !== id
  //   );

  //   setAttachments([]);
  //   setAttachments(targetAttachments);
  // };

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
        <div>Drop files below, or click inside the box to choose a file</div>
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
                  <button className="clear">X</button>
                </div>
              ))
            ) : (
              <div className="drag-message">Drag files here</div>
            )}
          </div>
        </li>
        <div className="submit-cont">
          <div>
            <button
              form="my-form"
              type="submit"
              disabled={firstName.length === 0}
            >
              Submit
            </button>
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
      {/* </form> */}
    </Box>
  );
};

export default Contact_Us_Page;
