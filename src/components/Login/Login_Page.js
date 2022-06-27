import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticate } from "../../store";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Login.css";

const useStyles = makeStyles((theme) => ({
  textField: {
    border: "solid 1px black",
    borderRadius: "9px",
  },
}));

const Login_Page = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPW, setShowPW] = useState(false);
  const [error, setError] = useState("");

  const classes = useStyles();

  const showPwClick = () => {
    setShowPW(!showPW);
  };

  const onChange = (ev) => {
    ev.target.name === "email"
      ? setEmail(ev.target.value)
      : setPassword(ev.target.value);
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    try {
      dispatch(authenticate(email, password, history));
      location.hash = "#/home";
    } catch (err) {
      console.log(err.response);
      setError(err.response);
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
      className="login-page"
    >
      <Box
        sx={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="main-cont-login"
      >
        <Typography component="h1" variant="h">
          Sign in
        </Typography>

        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            onChange={onChange}
            sx={{
              margin: 1,
              padding: 0,
              width: 275,
            }}
            margin="normal"
            required
            label="Email Address"
            variant="filled"
            name="email"
            InputProps={{ disableUnderline: true }}
            inputProps={{
              style: {
                color: "black",
                fontWeight: "bold",
                textAlign: "center",
              },
            }}
            InputLabelProps={{
              style: {
                display: "flex",
                justifyContent: "center",
                color: "black",
                marginLeft: "25%",
              },
            }}
            className={classes.textField}
          />
          <TextField
            onChange={onChange}
            sx={{
              margin: 1,
              padding: 0,
              width: 275,
            }}
            margin="normal"
            required
            label="Password"
            variant="filled"
            name="password"
            InputProps={{ disableUnderline: true }}
            inputProps={{
              style: {
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
              },
            }}
            InputLabelProps={{
              style: {
                textAlign: "center",
                color: "black",
                marginLeft: "30%",
              },
            }}
            className={classes.textField}
            type={showPW ? "text" : "password"}
          />
          <div className="view-pw" onClick={() => showPwClick()}>
            View Password
          </div>
          <div className="button-cont-login">
            <button disabled={!email || !password}>
              <span> Sign In</span>
            </button>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Login_Page;
