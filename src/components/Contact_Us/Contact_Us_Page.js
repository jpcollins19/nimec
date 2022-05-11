import Box from "@mui/material/Box";
import toast, { Toaster } from "react-hot-toast";
import Alert from "@mui/material/Alert";
import "./Contact_Us.css";

const Contact_Us_Page = () => {
  const notify = () =>
    toast("Your information has been sent to a NIMEC representative.");

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
      <form>
        <ul class="form-style-1">
          <li>
            <label>
              Name <span class="required">*</span>
            </label>
            <input
              type="text"
              name="field2"
              class="field-divided"
              placeholder="Name"
            />
          </li>
          <li>
            <label>
              Email <span class="required">*</span>
            </label>
            <input
              type="email"
              name="field3"
              class="field-long"
              placeholder="Email"
            />
          </li>
          <li>
            <label>
              Your Message <span class="required">*</span>
            </label>
            <textarea
              name="field5"
              id="field5"
              class="field-long field-textarea"
              placeholder="Your Message"
            ></textarea>
          </li>
          <div className="submit-cont">
            <div>
              <button onClick={notify}>Submit</button>
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
