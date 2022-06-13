import { useState } from "react";
import Newsletter_FileReader from "./Newsletter_FileReader";

const Service_A = ({ service, changeNewsletter, setChangeNewsletter }) => {
  return (
    <form className="service-cont-admin">
      <div className="service-cont-header"> {service && service.service}</div>
      <textarea
        className="service-synopsis"
        defaultValue={service && service.synopsis}
        // onChange={onChange}
      ></textarea>
      <div
        onClick={() => setChangeNewsletter(true)}
        className="change-newsletter-button"
      >
        Change Newsletter
      </div>
      <div className="newsletter-cont">
        {changeNewsletter && changeNewsletter && <Newsletter_FileReader />}
      </div>

      <button>Submit</button>
    </form>
  );
};

export default Service_A;
