import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadEEs } from "../../store";
import Box from "@mui/material/Box";
import "./AboutUs.css";

const AboutUs_Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEEs());
  }, []);

  const EEs = useSelector((state) => state.EEs).sort(
    (a, b) => a.order - b.order
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="100vh"
      className="about-us-page"
    >
      {EEs &&
        EEs.map((ee) => (
          <div key={ee.id} className="single-ee-cont">
            <div className="general-info-cont">
              <div
                className="photo"
                style={{ backgroundImage: `url(${ee.photo})` }}
              ></div>
              <h1>{ee.name}</h1>
              <h2>{ee.title}</h2>
              <div className="phone-email">
                <h4>{ee.email}</h4>
                <h4>{ee.phone}</h4>
              </div>
            </div>
            <div className="about-me-cont">
              <h1>About {ee.name.split(" ")[0]}</h1>
              <div>{ee.synopsis}</div>
            </div>
          </div>
        ))}
    </Box>
  );
};

export default AboutUs_Page;
