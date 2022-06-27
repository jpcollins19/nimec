import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { formatFirstLettertoUpperCase, loadServices } from "../../store";
import { useSelector } from "react-redux";
import { Document, Page, pdfjs } from "react-pdf";
import Youtube_Video from "./Youtube_Video";
import Pagination from "./Pagination";
import "./OurServices.css";

const Service = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(loadServices());
  }, []);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  const service = useSelector((state) => state.services).find(
    (service) =>
      service.service === formatFirstLettertoUpperCase(pathname.split("/")[2])
  );

  const onDocumentLoadSuccess = (numPages) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

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
        <h2> NIMEC Newsletter</h2>
        <div>
          <Document
            file={service && service.newsletter}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </div>
      <Pagination
        pageNumber={pageNumber}
        numPages={numPages}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  );
};

export default Service;
