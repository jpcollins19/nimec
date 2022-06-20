import { useEffect, useeffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadSavings } from "../../store";
import Box from "@mui/material/Box";
import "./Savings.css";

const Savings_Page = () => {
  const dispatch = useDispatch();

  const savings = useSelector((state) => state.savings)[0];

  useEffect(() => {
    dispatch(loadSavings());
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="100vh"
      className="savings-page"
    >
      <div className="savings-header">Savings</div>
      <div className="savings-synopsis">
        <div> {savings && savings.synopsis}</div>
      </div>
      <img className="chart-cont" src={savings && savings.attachment}></img>
    </Box>
  );
};

export default Savings_Page;
