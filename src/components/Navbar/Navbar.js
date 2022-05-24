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
import Navbar_Item from "./Navbar_Item";
import "./Navbar.css";

const Navbar = () => {
  const categories = [
    { title: "Home", icon: <Home />, url: "/home" },
    {
      title: "Who We Are",
      icon: <Home />,
      url: "/who_we_are",
    },
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
      url: "/savings_comparison",
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
        <Box height="100vh" width="17vw" sx={{ bgcolor: "#101F33", pb: 3 }}>
          <ListItem
            sx={{
              bgcolor: "#ffffff",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="/public/pics/nimecLogo.png" className="logo" />
          </ListItem>
          {categories.map((category, idx) => (
            <Navbar_Item key={idx} category={category} />
          ))}
        </Box>
      </List>
    </Drawer>
  );
};

export default Navbar;
