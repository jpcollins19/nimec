// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { updateMission } from "../../../store";
import Box from "@mui/material/Box";
import FAQ_Listing from "./FAQ_Listing";
import FAQ_Action from "./FAQ_Action";
import "./FAQs_A.css";

const FAQs_Page_A = () => {
  // const dispatch = useDispatch();
  // const history = useHistory();

  const faqs = useSelector((state) => state.faqs);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="100vh"
      className="faq-page-a"
    >
      <div className="header-admin">FAQs - Admin</div>
      <FAQ_Listing faqs={faqs} />
      <FAQ_Action />
    </Box>
  );
};

export default FAQs_Page_A;
