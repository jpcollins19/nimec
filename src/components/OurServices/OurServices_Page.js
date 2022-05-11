import Box from "@mui/material/Box";
import Service from "./Service";
import "./OurServices.css";

const OurServices_Page = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="100vh"
      className="our-services-page"
    >
      <Service />
    </Box>
  );
};

export default OurServices_Page;
