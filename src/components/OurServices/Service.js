import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import { formatFirstLettertoUpperCase } from "../../store";
import { useSelector } from "react-redux";
import "./OurServices.css";

const Service = () => {
  const { pathname } = useLocation();

  const service = useSelector((state) => state.services).find(
    (service) =>
      service.title === formatFirstLettertoUpperCase(pathname.split("/")[2])
  );

  return (
    <div>
      <div className="service-header">{service && service.title}</div>
      <div className="service-synopsis">{service && service.synopsis}</div>
      <div className="service-newsletter">{service && service.newsletter}</div>
    </div>
  );
};

export default Service;
