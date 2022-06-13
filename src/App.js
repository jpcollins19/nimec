import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  loadClients,
  loadServices,
  loadAttachments,
  loadEEs,
  loadFaqs,
  loadMissions,
  loadSavings,
  me,
} from "./store";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./Routes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadClients());
    dispatch(loadServices());
    dispatch(loadAttachments());
    dispatch(loadEEs());
    dispatch(loadFaqs());
    dispatch(loadMissions());
    dispatch(loadSavings());
    dispatch(me());
  }, []);

  const auth = useSelector((state) => state.auth);

  let theme = createTheme({
    palette: {
      primary: {
        light: "#63ccff",
        main: "#009be5",
        dark: "#006db3",
      },
    },
    typography: {
      h5: {
        fontWeight: 500,
        fontSize: 26,
        letterSpacing: 0.5,
      },
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiTab: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
    mixins: {
      toolbar: {
        minHeight: 48,
      },
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
          <CssBaseline />
          <Box
            component="nav"
            sx={{
              width: { sm: "17vw" },
              flexShrink: { sm: 0 },
            }}
          >
            <Route
              path="/"
              render={(props) => <Navbar auth={auth} {...props} />}
            />
          </Box>
          <Box
            component="main"
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: { sm: "83vw" },
              flexShrink: { sm: 0 },
            }}
          >
            <Routes auth={auth} />
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App;
