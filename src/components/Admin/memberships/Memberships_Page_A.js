import { useState } from "react";
import Box from "@mui/material/Box";
import Edit_Page from "./Edit_Page";
import "./Memberships_A.css";

const Memberships_Page_A = () => {
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
      className="memberships-page-a"
    >
      <div className="header-admin">Memberships - Admin</div>
      <div className="buttons-cont">
        {buttons.map((button) => (
          <button key={button.action} onClick={() => setAction(button.action)}>
            {button.word}
          </button>
        ))}
      </div>
      {action && <Edit_Page action={action} setAction={setAction} />}
    </Box>
  );
};

export default Memberships_Page_A;
