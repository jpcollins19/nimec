import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import "./Navbar.css";

const Navbar_Item = ({ category }) => {
  const { pathname } = useLocation();
  const [dropdown, setDropdown] = useState(false);

  const item = {
    color: "rgb(255, 255, 255)",
    "&:hover, &:focus": {
      bgcolor: "#162c49;",
    },
  };

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const services = ["Municipalities", "Commercial", "Residential"];

  const adminPages = [
    "Home",
    "Memberships",
    "FAQs",
    "Savings",
    "Services",
    "About_us",
  ];

  return category && category.title === "Our Services" ? (
    <Box key={category.title} sx={{ bgcolor: "#101F33", pt: 1, pb: 1 }}>
      <ListItem
        disablePadding
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        sx={{
          backgroundColor:
            pathname.split("/")[2] === "municipalities"
              ? "rgba(19, 139, 213, 0.397)"
              : pathname.split("/")[2] === "commercial"
              ? "rgba(19, 139, 213, 0.397)"
              : pathname.split("/")[2] === "residential"
              ? "rgba(19, 139, 213, 0.397)"
              : "#101F33",
        }}
      >
        <ListItemButton
          sx={item}
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown(true)}
        >
          <ListItemIcon
            sx={{
              color:
                pathname.split("/")[2] === "municipalities"
                  ? "rgb(0, 191, 255)"
                  : pathname.split("/")[2] === "commercial"
                  ? "rgb(0, 191, 255)"
                  : pathname.split("/")[2] === "residential"
                  ? "rgb(0, 191, 255)"
                  : "rgb(215, 209, 209)",
            }}
          >
            {category.icon}
          </ListItemIcon>
          <ListItemText>
            <div
              className={
                pathname.split("/")[2] === "municipalities"
                  ? "navbar-text-selected"
                  : pathname.split("/")[2] === "commercial"
                  ? "navbar-text-selected"
                  : pathname.split("/")[2] === "residential"
                  ? "navbar-text-selected"
                  : "navbar-text"
              }
            >
              {category.title}
            </div>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      {dropdown && (
        <Box
          sx={{
            position: "fixed",
            ml: "17%",
            mt: "-2.75%",
            bgcolor: "#101F33",
            pt: 1,
            pb: 1,
          }}
        >
          <ListItem
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor:
                pathname === category.url
                  ? "rgba(19, 139, 213, 0.397)"
                  : "#101F33",
            }}
          >
            {services.map((service, idx) => (
              <Link
                to={`/our_services/${service.toLowerCase()}`}
                style={{ textDecoration: "none" }}
                key={idx}
              >
                <ListItemButton sx={item}>
                  <ListItemText>
                    <div className="navbar-text">{service}</div>
                  </ListItemText>
                </ListItemButton>
              </Link>
            ))}
          </ListItem>
        </Box>
      )}
    </Box>
  ) : category.title === "Admin" ? (
    <Box key={category.title} sx={{ bgcolor: "#101F33", pt: 1, pb: 1 }}>
      <ListItem
        disablePadding
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        sx={{
          backgroundColor:
            pathname.split("/")[2] === "home"
              ? "rgba(19, 139, 213, 0.397)"
              : pathname.split("/")[2] === "memberships"
              ? "rgba(19, 139, 213, 0.397)"
              : pathname.split("/")[2] === "services"
              ? "rgba(19, 139, 213, 0.397)"
              : pathname.split("/")[2] === "faq"
              ? "rgba(19, 139, 213, 0.397)"
              : pathname.split("/")[2] === "savings"
              ? "rgba(19, 139, 213, 0.397)"
              : pathname.split("/")[2] === "about"
              ? "rgba(19, 139, 213, 0.397)"
              : "#101F33",
        }}
      >
        <ListItemButton
          sx={item}
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown(true)}
        >
          <ListItemIcon
            sx={{
              color:
                pathname.split("/")[2] === "home"
                  ? "rgb(0, 191, 255)"
                  : pathname.split("/")[2] === "memberships"
                  ? "rgb(0, 191, 255)"
                  : pathname.split("/")[2] === "services"
                  ? "rgb(0, 191, 255)"
                  : pathname.split("/")[2] === "faq"
                  ? "rgb(0, 191, 255)"
                  : pathname.split("/")[2] === "savings"
                  ? "rgb(0, 191, 255)"
                  : pathname.split("/")[2] === "about"
                  ? "rgb(0, 191, 255)"
                  : "rgb(215, 209, 209)",
            }}
          >
            {category.icon}
          </ListItemIcon>
          <ListItemText>
            <div
              className={
                pathname.split("/")[2] === "home"
                  ? "navbar-text-selected"
                  : pathname.split("/")[2] === "memberships"
                  ? "navbar-text-selected"
                  : pathname.split("/")[2] === "services"
                  ? "navbar-text-selected"
                  : pathname.split("/")[2] === "faq"
                  ? "navbar-text-selected"
                  : pathname.split("/")[2] === "savings"
                  ? "navbar-text-selected"
                  : pathname.split("/")[2] === "about"
                  ? "navbar-text-selected"
                  : "navbar-text"
              }
            >
              {category.title}
            </div>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      {dropdown && (
        <Box
          sx={{
            position: "fixed",
            ml: "17%",
            mt: "-3%",
            bgcolor: "#101F33",
            pt: 1,
            pb: 1,
          }}
        >
          <ListItem
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor:
                pathname === category.url
                  ? "rgba(19, 139, 213, 0.397)"
                  : "#101F33",
            }}
          >
            {adminPages.map((page, idx) => (
              <Link
                to={`/admin/${page.toLowerCase()}`}
                style={{ textDecoration: "none" }}
                key={idx}
              >
                <ListItemButton sx={item}>
                  <ListItemText>
                    <div className="navbar-text">{page}</div>
                  </ListItemText>
                </ListItemButton>
              </Link>
            ))}
          </ListItem>
        </Box>
      )}
    </Box>
  ) : (
    <Box key={category.title} sx={{ bgcolor: "#101F33", pt: 1, pb: 1 }}>
      <Link to={category.url} style={{ textDecoration: "none" }}>
        <ListItem
          disablePadding
          sx={{
            backgroundColor:
              pathname === category.url
                ? "rgba(19, 139, 213, 0.397)"
                : "#101F33",
          }}
        >
          <ListItemButton sx={item}>
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
              <div
                className={
                  pathname === category.url
                    ? "navbar-text-selected"
                    : "navbar-text"
                }
              >
                {category.title}
              </div>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
    </Box>
  );
};

export default Navbar_Item;
