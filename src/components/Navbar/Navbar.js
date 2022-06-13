import { useDispatch } from "react-redux";
import { logout } from "../../store";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Home from "@mui/icons-material/Home";
import WindPower from "@mui/icons-material/WindPower";
import QuestionAnswer from "@mui/icons-material/QuestionAnswer";
import HelpCenter from "@mui/icons-material/HelpCenter";
import Paid from "@mui/icons-material/Paid";
import EmojiPeople from "@mui/icons-material/EmojiPeople";
import Groups from "@mui/icons-material/Groups";
import Admin from "@mui/icons-material/SportsSoccer";
import Navbar_Item from "./Navbar_Item";

import "./Navbar.css";

const Navbar = ({ auth }) => {
  const dispatch = useDispatch();

  const categories = [
    { title: "Home", icon: <Home />, url: "/home" },
    {
      title: "Memberships",
      icon: <Groups />,
      url: "/memberships",
    },
    {
      title: "Our Services",
      icon: <WindPower />,
      url: "/our_services",
    },
    { title: "Municipal Aggregation FAQ", icon: <HelpCenter />, url: "/faqs" },
    {
      title: "Savings Comparison",
      icon: <Paid />,
      url: "/savings",
    },
    {
      title: "About Us",
      icon: <EmojiPeople />,
      url: "/about_us",
    },
    {
      title: "Contact Us",
      icon: <QuestionAnswer />,
      url: "/contact_us",
    },
  ];

  return (
    <Drawer variant="permanent">
      <List disablePadding>
        <Box
          height="100vh"
          width="17vw"
          sx={{
            bgcolor: "#101F33",
            pb: 3,
          }}
        >
          <ListItem
            sx={{
              bgcolor: "#ffffff",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="/public/pics/nimecLogo.png" className="logo" />
          </ListItem>
          {auth.id && (
            <Navbar_Item
              category={{ title: "Admin", icon: <Admin />, url: "/admin" }}
            />
          )}
          {categories.map((category, idx) => (
            <Navbar_Item key={idx} category={category} />
          ))}
          {auth.id && (
            <div className="logout" onClick={() => dispatch(logout())}>
              <Link to="/home" style={{ textDecoration: "none" }}>
                Sign Out
              </Link>
            </div>
          )}
        </Box>
      </List>
    </Drawer>
  );
};

export default Navbar;
