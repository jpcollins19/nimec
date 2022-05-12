import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../store";
import toast, { Toaster } from "react-hot-toast";
import PhotosList from "./PhotosList";
import Alert from "@mui/material/Alert";
import FileUpload from "@mui/icons-material/FileUpload";
import "./Contact_Us.css";

const Contact_Us_Page = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [photos, setPhotos] = useState([]);

  const notify = () =>
    toast("Your information has been sent to a NIMEC representative.");

  // const emailContent1 = {
  //   firstName,
  //   lastName,
  //   email,
  //   message,
  //   photos,
  //   recipientEmail: "jpatcollins@gmail.com",
  // };

  // useEffect(() => {
  //   console.log(emailContent1);
  // }, [emailContent1]);

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const emailContent = {
        firstName,
        lastName,
        email,
        message,
        photos,
      };

      dispatch(sendMessage(emailContent));

      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setPhotos([]);
      notify();
    } catch (err) {
      console.log(err);
    }
  };

  // const filterFormSubmission = (values) => {
  //   const filteredArr = Object.entries(values).filter((pair) => {
  //     if (typeof pair[1] === "string" || typeof pair[1] === "object") {
  //       return pair[1].length;
  //     } else if (typeof pair[1] === "number") {
  //       return pair[1] !== 0;
  //     } else {
  //       return true;
  //     }
  //   });

  //   const arrToObj = Object.fromEntries(filteredArr);
  //   return arrToObj;
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
      <form onSubmit={onSubmit}>
        <ul className="form-style-1">
          <li>
            <label>
              First Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="field2"
              className="field-divided"
              placeholder="First Name"
              onChange={(ev) => setFirstName(ev.target.value)}
            />
          </li>
          <li>
            <label>
              Last Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="field2"
              className="field-divided"
              placeholder="Last Name"
              onChange={(ev) => setLastName(ev.target.value)}
            />
          </li>
          <li>
            <label>
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              name="field3"
              className="field-long"
              placeholder="Email"
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </li>
          <li>
            <label>
              Your Message <span className="required">*</span>
            </label>
            <textarea
              name="field5"
              id="field5"
              className="field-long field-textarea"
              placeholder="Your Message"
              onChange={(ev) => setMessage(ev.target.value)}
            ></textarea>
          </li>
          <li className="photos">
            <label htmlFor="photo">
              <span>
                Upload Files
                <FileUpload className="fileUploadIcon" />
              </span>
              <input
                name="photos"
                accept="image/*"
                type="file"
                multiple
                className="photoInput"
                onChange={(e) => {
                  const files = e.target.files;
                  for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const fileReader = new FileReader();
                    fileReader.onload = (e) => {
                      if (fileReader.readyState === 2) {
                        setPhotos((prevPhotos) => [
                          ...prevPhotos,
                          fileReader.result,
                        ]);
                        setPhotos((prevPhotos) =>
                          prevPhotos.filter((word, idx) => {
                            return prevPhotos.indexOf(word) === idx;
                          })
                        );
                      }
                    };
                    fileReader.readAsDataURL(file);
                  }
                }}
              />
            </label>
          </li>
          <PhotosList photos={photos} />
          <div className="submit-cont">
            <div>
              <button>Submit</button>
              <Toaster />
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
