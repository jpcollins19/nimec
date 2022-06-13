import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Select from "react-select";
import Service_A from "./Service_A";
import "./Services_A.css";

const Services_Page_A = () => {
  const services = useSelector((state) => state.services).map((service) => {
    return {
      value: service,
      label: service.service,
    };
  });

  const [service, setService] = useState(null);
  const [changeNewsletter, setChangeNewsletter] = useState(false);

  useEffect(() => {
    setChangeNewsletter(false);
  }, [service]);

  const styles = {
    placeholder: (styles) => {
      return {
        ...styles,
        color: "black",
      };
    },
    dropdownIndicator: (styles) => {
      return {
        ...styles,
        color: "black",
        "&:hover": {
          color: "black",
        },
      };
    },
    indicatorSeparator: (styles) => {
      return {
        ...styles,
        background: "black",
      };
    },
    control: (styles) => {
      return {
        ...styles,
        background: "none",
        color: "black",
        border: "solid black 1px",
        cursor: "pointer",
        width: "14rem",
        height: 38,
        minHeight: 38,
        fontSize: "1rem",
        textAlign: "center",
        "&:hover": {
          border: "solid black 1px",
        },
      };
    },
    option: (styles) => {
      return {
        ...styles,
        background: "white",
        color: "black",
        borderBottom: "solid lightGrey 2px",
        cursor: "pointer",
        width: "14rem",
        height: "2.5rem",
        fontSize: "1rem",
        textAlign: "center",
        "&:hover": {
          background: "rgb(242, 242, 234)",
        },
      };
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="100vh"
      className="services-page-a"
    >
      <div className="header-admin">Services - Admin</div>
      <div className="services-dropdown-admin-page">
        <Select
          options={services && services}
          onChange={(value) => setService(value.value)}
          styles={styles}
          placeholder={"Select Service"}
          className="services-select-admin-page"
        />
      </div>
      {service && (
        <Service_A
          service={service}
          changeNewsletter={changeNewsletter}
          setChangeNewsletter={setChangeNewsletter}
        />
      )}
    </Box>
  );
};

export default Services_Page_A;
