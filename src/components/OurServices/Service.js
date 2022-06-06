import { useLocation } from "react-router-dom";
import { formatFirstLettertoUpperCase } from "../../store";
import { useSelector } from "react-redux";
import Youtube_Video from "./Youtube_Video";
import "./OurServices.css";

const Service = () => {
  const { pathname } = useLocation();

  const service = useSelector((state) => state.services).find(
    (service) =>
      service.service === formatFirstLettertoUpperCase(pathname.split("/")[2])
  );

  return (
    <div>
      <div className="service-header">{service && service.service}</div>
      <div className="service-synopsis">
        <div> {service && service.synopsis}</div>
      </div>
      {service && service.service === "Residential" && (
        <h2 className="youtube-video-header">
          Learn more about Community Solar from ComEd:
        </h2>
      )}

      {service && service.service === "Residential" && <Youtube_Video />}
      <div className="service-newsletter-cont">
        <div className="header">
          NIMEC Newsletter - {service && service.date}
        </div>
        <div className="border-services">
          <div className="service-newsletter">
            <div className="newsletter-header">
              <div className="title"> {service && service.title}</div>
            </div>
            <div className="verbiage"> {service && service.newsletter}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
