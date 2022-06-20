import { useState } from "react";
import Box from "@mui/material/Box";
import Action_Page from "./Action_Page";
import "./About_Us_A.css";

const About_Us_Page_A = () => {
  const [action, setAction] = useState(null);

  const buttons = [
    { word: "Add", action: 1 },
    { word: "Edit", action: 2 },
    { word: "Delete", action: 3 },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="100vh"
      className="about-us-page-a"
    >
      <div className="header-admin">About Us - Admin</div>
      <div className="buttons-cont">
        {buttons.map((button) => (
          <button key={button.action} onClick={() => setAction(button.action)}>
            {button.word}
          </button>
        ))}
      </div>
      {action && <Action_Page action={action} setAction={setAction} />}
    </Box>
  );
};

export default About_Us_Page_A;
