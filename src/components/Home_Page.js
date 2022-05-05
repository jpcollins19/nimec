import { connect } from "react-redux";
import { logout } from "../store";
import { Link } from "react-router-dom";

const Home_Page = ({ handleClick }) => {
  return <div></div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(null, mapDispatchToProps)(Home_Page);
