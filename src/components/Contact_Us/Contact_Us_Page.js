import Box from "@mui/material/Box";
import toast, { Toaster } from "react-hot-toast";

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
      <div>
        <button onClick={notify}>Submit</button>
        <Toaster />
      </div>
    </Box>
  );
};

export default Contact_Us_Page;
