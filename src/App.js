import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./Routes";
// import { loadUsers } from "./store";

const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadUsers());
  // }, []);

  const drawerWidth = 256;

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
              width: { sm: drawerWidth },
              flexShrink: { sm: 0 },
            }}
          >
            <Route path="/" component={Navbar} />
          </Box>

          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {/* {part.id ? (
              <Route path="/" component={Header_P} />
            ) : (
              <Route path="/" component={Header_NP} />
            )} */}
            <Box
              component="main"
              sx={{
                flex: 1,
                pt: 18.5,
                pb: 0,
                pl: 2,
                // pb: 3,
                // px: 4,
                // bgcolor: "#9C27B0",
                display: "flex",
                justifyContent: "center",
                minHeight: 9.8 / 10,
              }}
            >
              <Routes />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );

  // return (
  //   <Router>
  //     <Routes />
  //   </Router>
  // );
};

export default App;
