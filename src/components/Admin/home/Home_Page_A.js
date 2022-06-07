import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateMission } from "../../../store";
import Box from "@mui/material/Box";
import "./Home_A.css";

const Home_Page_A = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const mission = useSelector((state) => state.missions)[0];

  const [statement, setStatement] = useState(mission && mission.statement);
  const [changed, setChanged] = useState(false);

  const onChange = (ev) => {
    setChanged(true);
    setStatement(ev.target.value);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const obj = {
        id: mission.id,
        statement,
      };

      dispatch(updateMission(obj, history));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="100vh"
      className="home-page-a"
    >
      <div className="header-admin">Home - Admin</div>
      <form onSubmit={onSubmit} className="home-admin-cont">
        <textarea
          className="mission-statement"
          defaultValue={statement}
          onChange={onChange}
        ></textarea>
        <button disabled={!changed}>Submit</button>
      </form>
    </Box>
  );
};

export default Home_Page_A;
