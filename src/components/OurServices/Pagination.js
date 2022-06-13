import Next from "@mui/icons-material/ArrowForwardIos";
import Previous from "@mui/icons-material/ArrowBackIosNew";

const Pagination = ({ pageNumber, numPages, previousPage, nextPage }) => {
  return (
    <div className="pagination-cont">
      <div>
        Page{" "}
        {(pageNumber && pageNumber) ||
          (numPages && numPages._pdfInfo.numPages ? 1 : "--")}{" "}
        of {(numPages && numPages._pdfInfo.numPages) || "--"}
      </div>
      <div className="button-cont">
        <div className="prev">
          {pageNumber && pageNumber <= 1 ? (
            <Previous sx={{ color: "rgb(193, 189, 189)" }} />
          ) : (
            <Previous onClick={previousPage} />
          )}
        </div>
        <div className="next">
          {pageNumber &&
          numPages &&
          pageNumber === numPages._pdfInfo.numPages ? (
            <Next sx={{ color: "rgb(193, 189, 189)" }} />
          ) : (
            <Next onClick={nextPage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
