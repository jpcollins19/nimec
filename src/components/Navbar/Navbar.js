import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import LibraryBooks from "@mui/icons-material/LibraryBooks";
import SettingsAccessibility from "@mui/icons-material/SettingsAccessibility";
import BarChart from "@mui/icons-material/BarChart";
import EditIcon from "@mui/icons-material/Edit";
import "./Navbar.css";

const Navbar = () => {
  // const part = useSelector((state) => state.part);
  // const SubmittedPicks = useSelector((state) => state.participants).filter(
  //   (part) => part.winningGolfer !== null
  // );

  // const purse = SubmittedPicks.length * 25;

  // const categories = [
  //   { title: "Scorecard", icon: <SettingsAccessibility />, url: "/scorecard" },
  //   { title: "My Picks", icon: <DnsRoundedIcon />, url: "/my_picks" },
  //   { title: "Pool Picks", icon: <PeopleIcon />, url: "/pool_picks" },
  //   { title: "Golfer Odds", icon: <BarChart />, url: "/golfer_odds" },
  //   { title: "Rules/General Info", icon: <LibraryBooks />, url: "/rules" },
  //   { title: "Edit Name", icon: <EditIcon />, url: "/name" },
  // ];

  const { pathname } = useLocation();

  const categories = [
    { title: "Home", icon: <SettingsAccessibility />, url: "/home" },
    {
      title: "Who We Are",
      icon: <SettingsAccessibility />,
      url: "/who_we_are",
      active: false,
    },
    {
      title: "Memberships",
      icon: <SettingsAccessibility />,
      url: "/memberships",
      active: false,
    },
    {
      title: "Our Services",
      icon: <SettingsAccessibility />,
      url: "/our_services",
      active: false,
    },
    {
      title: "FAQ",
      icon: <SettingsAccessibility />,
      url: "/faq",
      active: false,
    },
    {
      title: "Resource Center",
      icon: <SettingsAccessibility />,
      url: "/resource_center",
      active: false,
    },
    {
      title: "About Us",
      icon: <SettingsAccessibility />,
      url: "/about_us",
      active: false,
    },
    {
      title: "Contact Us",
      icon: <SettingsAccessibility />,
      url: "/contact_us",
      active: false,
    },
  ];

  // const item = {
  //   py: "2px",
  //   px: 3,
  //   color: "rgb(25, 234, 245)",
  //   "&:hover, &:focus": {
  //     bgcolor: "rgba(255, 255, 255, 0.08)",
  //   },
  // };

  // const selected = {
  //   py: "2px",
  //   px: 3,
  //   color: "rgba(19, 139, 213, 0.397)",
  //   "&:hover, &:focus": {
  //     bgcolor: "rgba(19, 139, 213, 0.397)",
  //   },
  //   bgcolor: "rgba(19, 139, 213, 0.397)",
  // };

  return (
    <Drawer variant="permanent">
      <List disablePadding>
        <ListItem>
          <img src="/public/pics/nimecLogo.png" className="logo" />
        </ListItem>

        <Box sx={{ bgcolor: "#101F33", pt: 3, pb: 3 }}>
          {categories.map((category) => (
            <Box key={category.title} sx={{ bgcolor: "#101F33", pt: 1, pb: 1 }}>
              <ListItem
                disablePadding
                sx={{
                  backgroundColor:
                    pathname === category.url
                      ? "rgba(19, 139, 213, 0.397)"
                      : "#101F33",
                }}
              >
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      color:
                        pathname === category.url
                          ? "rgb(0, 191, 255)"
                          : "rgb(215, 209, 209)",
                    }}
                  >
                    {category.icon}
                  </ListItemIcon>
                  <ListItemText>
                    <Link
                      to={category.url}
                      style={{ textDecoration: "none" }}
                      className={
                        pathname === category.url
                          ? "navbar-text"
                          : "navbar-text-selected"
                      }
                    >
                      <div> {category.title}</div>
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              {/* <Divider sx={{ pt: 1, pb: 1 }} /> */}
            </Box>
          ))}
        </Box>

        {/* <Box sx={{ bgcolor: "#2E7D32" }}>
          <ListItem sx={{ py: 2, px: 3 }}>
            <ListItemText sx={{ color: "#fff" }}>
              <h3 className="navbar-title-text">phone number goes here</h3>
            </ListItemText>
          </ListItem>
        </Box>
        <Box sx={{ bgcolor: "#2E7D32" }}>
          <ListItem sx={{ py: 2, px: 3 }}>
            <ListItemText sx={{ color: "#fff" }}>
              <h3 className="navbar-title-text">email goes here</h3>
            </ListItemText>
          </ListItem>
        </Box> */}
      </List>
    </Drawer>
  );

  // return (
  //   <Drawer variant="permanent">
  //     <List disablePadding>
  //       <ListItem>
  //         <img src="/public/pics/comedChart.png" className="logo" />
  //       </ListItem>

  //       {/* {part.id && (
  //         <div>
  //           <h5 className="last-updated">Last Updated: Final</h5>
  //           <h5 className="num-picks">
  //             # of submitted picks: {SubmittedPicks.length}
  //           </h5>
  //         </div>
  //       )} */}
  //       <Box sx={{ bgcolor: "#101F33" }}>
  //         <ListItem sx={{ py: 2, px: 3 }}></ListItem>
  //         {/* {part.name === "Joe" && (
  //           <ListItem>
  //             <ListItemButton sx={item}>
  //               <ListItemIcon>
  //                 <SettingsAccessibility />
  //               </ListItemIcon>
  //               <ListItemText>
  //                 <Link
  //                   to={"/admin"}
  //                   className="navbar-option-text"
  //                   style={{ textDecoration: "none" }}
  //                 >
  //                   <div>Admin</div>
  //                 </Link>
  //               </ListItemText>
  //             </ListItemButton>
  //           </ListItem>
  //         )} */}

  //         {categories.map((category) => (
  //           <ListItem key={category.title}>
  //             <ListItemButton sx={item}>
  //               <ListItemIcon>{category.icon}</ListItemIcon>
  //               <ListItemText>
  //                 <Link
  //                   to={category.url}
  //                   style={{ textDecoration: "none" }}
  //                   sx={{ color: "rgb(248, 180, 180)" }}
  //                 >
  //                   <div>{category.title}</div>
  //                 </Link>
  //               </ListItemText>
  //             </ListItemButton>
  //           </ListItem>
  //         ))}
  //         <Divider sx={{ mt: 2 }} />
  //       </Box>
  //       <Box sx={{ bgcolor: "#2E7D32" }}>
  //         <ListItem sx={{ py: 2, px: 3 }}>
  //           <ListItemText sx={{ color: "#fff" }}>
  //             <h3 className="navbar-title-text">phone number goes here</h3>
  //           </ListItemText>
  //         </ListItem>
  //       </Box>
  //       <Box sx={{ bgcolor: "#2E7D32" }}>
  //         <ListItem sx={{ py: 2, px: 3 }}>
  //           <ListItemText sx={{ color: "#fff" }}>
  //             <h3 className="navbar-title-text">email goes here</h3>
  //           </ListItemText>
  //         </ListItem>
  //       </Box>
  //     </List>
  //   </Drawer>
  // );
};

export default Navbar;
