import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { loadClients, loadServices, loadAttachments } from "./store";
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
  }, []);

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
            <Route path="/" component={Navbar} />
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
            <Routes />
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App;
