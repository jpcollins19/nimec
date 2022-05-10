import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import SettingsAccessibility from "@mui/icons-material/SettingsAccessibility";
import Navbar_Item from "./Navbar_Item";
import "./Navbar.css";

const Navbar = () => {
  const categories = [
    { title: "Home", icon: <SettingsAccessibility />, url: "/home" },
    {
      title: "Who We Are",
      icon: <SettingsAccessibility />,
      url: "/who_we_are",
    },
    {
      title: "Memberships",
      icon: <SettingsAccessibility />,
      url: "/memberships",
    },
    {
      title: "Our Services",
      icon: <SettingsAccessibility />,
      url: "/our_services",
    },
    { title: "FAQ", icon: <SettingsAccessibility />, url: "/faq" },
    {
      title: "Resource Center",
      icon: <SettingsAccessibility />,
      url: "/resource_center",
    },
    {
      title: "About Us",
      icon: <SettingsAccessibility />,
      url: "/about_us",
    },
    {
      title: "Contact Us",
      icon: <SettingsAccessibility />,
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
