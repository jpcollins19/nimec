import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMissions } from "../../store";
import Box from "@mui/material/Box";
import Slideshow from "./Slideshow";
import "./Home.css";

const Home_Page = () => {
  const dispatch = useDispatch();

  const clients = useSelector((state) => state.clients);
  const mission = useSelector((state) => state.missions)[0];

  useEffect(() => {
    dispatch(loadMissions());
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="100vh"
      className="home-page"
    >
      <div className="statement">
        NIMEC is a collaborative of {clients && clients.length} municipalities
        that band together to drive down pricing for residential and municipal
        electricity.
      </div>
      <div
        className="home-img"
        style={{
          backgroundImage: `url(
            "https://imageio.forbes.com/specials-images/imageserve/1057157166/Chicago-skyline-aerial-drone-view-from-above--lake-Michigan-and-city-of-Chicago/960x0.jpg?format=jpg&width=960"
          )`,
        }}
      ></div>
      <div className="synopsis-cont">
        <div className="synopsis1">{mission && mission.statement}</div>
      </div>
      <Slideshow />
    </Box>
  );
};

export default Home_Page;
