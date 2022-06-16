import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { urlNeeded, loadFaqs } from "../../store";
import Box from "@mui/material/Box";
import "./FAQs.css";

const FAQs_Page = () => {
  const dispatch = useDispatch();

  const FAQs = useSelector((state) => state.faqs).sort(
    (a, b) => a.order - b.order
  );

  useEffect(() => {
    dispatch(loadFaqs());
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="100vh"
      className="faqs-page"
    >
      <div className="faq-full-cont">
        {FAQs &&
          FAQs.map((faq, idx) =>
            faq.linkNeeded === true ? (
              urlNeeded(faq, idx)
            ) : (
              <div key={idx} className="faq-single-cont">
                <div className="row-cont">
                  <div className="head">Q:</div>
                  <div className="q">{faq.Q}</div>
                </div>
                <div className="row-cont">
                  <div className="head">A:</div>
                  <div className="a">{faq.A}</div>
                </div>
              </div>
            )
          )}
      </div>
    </Box>
  );
};

export default FAQs_Page;
