import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  deleteAttachment,
  resetAttachmentCount,
  resetAttachments,
} from "../../../store";
import Loading from "./Loading";

const Newsletter_FileReader = ({
  uploadImage,
  attachmentUploaded,
  setAttachmentUploaded,
  setCanSubmit,
  loading,
  setLoading,
  attachments,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetAttachments());
    setAttachmentUploaded(false);
    setCanSubmit(false);
    setLoading(false);
    dispatch(resetAttachmentCount());
  }, []);

  return (
    <ul className="newsletter-upload-cont">
      <h5>**File must be pdf**</h5>
      <h5>**Can only upload one file**</h5>
      <li className={!attachmentUploaded ? "no-atchmnts" : "atchmnts"}>
        {attachments && !attachments.length ? (
          <input
            type="file"
            accept=".pdf, .png, .jpg"
            multiple
            onChange={uploadImage}
          />
        ) : (
          <div>
            {loading && loading ? (
              <Loading />
            ) : (
              attachments &&
              attachments.length > 0 &&
              attachments.map((attachment, idx) => (
                <div key={idx} className="atchmnt-single-cont">
                  <div className="fileName-cont-admin">{attachment.name}</div>
                  <button
                    onClick={() => dispatch(deleteAttachment(attachment))}
                    className="clear-admin"
                  >
                    X
                  </button>
                </div>
              ))
            )}
          </div>
        )}
        {}
      </li>
    </ul>
  );
};

export default Newsletter_FileReader;
