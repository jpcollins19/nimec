import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "./OurServices.css";

const OurServices_Page = () => {
  const services = ["Municipalities", "Commercial", "Residential"];

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
      <div className="services-navbar">service info goes here</div>
    </Box>
  );
};

export default OurServices_Page;
