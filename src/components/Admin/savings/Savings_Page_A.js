import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateSavings, addAttachment, resetAttachments } from "../../../store";
import Newsletter_FileReader from "./Newsletter_FileReader";
import Box from "@mui/material/Box";
import "./Savings_A.css";

const Savings_Page_A = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const savings = useSelector((state) => state.savings)[0];

  const [synopsis, setSynopsis] = useState(savings && savings.synopsis);
  const [attachment, setAttachment] = useState(null);

  const [updateRateComparison, setUpdateRateComparison] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  const [attachmentUploaded, setAttachmentUploaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const attachments = useSelector((state) => state.attachments);
  const count = useSelector((state) => state.attachmentCount);

  useEffect(() => {
    attachments.length === count ? setLoading(false) : setLoading(true);
    attachments.length === 0 && setAttachmentUploaded(false);
  }, [count]);

  useEffect(() => {
    attachments.length === count ? setLoading(false) : setLoading(true);
    attachments.length && !attachmentUploaded && dispatch(resetAttachments());
  }, [attachments]);

  const uploadImage = (e) => {
    setAttachmentUploaded(true);

    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileReader = new FileReader();
      fileReader.onload = (ev) => {
        if (fileReader.readyState === 2) {
          const options = {
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              let percentComplete = Math.floor((loaded * 100) / total);

              percentComplete < 100 && setLoading(true);
            },
          };
          const name = file.name;
          const url = ev.target.result;
          dispatch(addAttachment({ name, url }, options));
          setAttachment(fileReader.result);
          setCanSubmit(true);
        }
      };

      fileReader.readAsDataURL(file);
    }
  };

  const onChange = (ev) => {
    setCanSubmit(true);
    setSynopsis(ev.target.value);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const obj = {
        id: savings && savings.id,
        synopsis,
      };

      if (attachmentUploaded) {
        obj.attachment = attachment;
      }

      dispatch(updateSavings(obj, history));

      dispatch(resetAttachments());
      dispatch(resetAttachmentCount());
      setCanSubmit(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="100vh"
      className="savings-page-a"
    >
      <div className="header-admin">Savings - Admin</div>
      <form onSubmit={onSubmit} className="savings-admin-cont">
        <button disabled={!canSubmit}>Submit</button>
        <textarea
          className="synopsis-statement"
          defaultValue={synopsis && synopsis}
          onChange={onChange}
        ></textarea>
        <div
          className="savings-admin-update-chart"
          onClick={() => setUpdateRateComparison(true)}
        >
          Update Rate Comparison Chart
        </div>
        {updateRateComparison && (
          <Newsletter_FileReader
            uploadImage={uploadImage}
            attachmentUploaded={attachmentUploaded}
            setAttachmentUploaded={setAttachmentUploaded}
            setCanSubmit={setCanSubmit}
            loading={loading}
            setLoading={setLoading}
            attachments={attachments}
          />
        )}
      </form>
    </Box>
  );
};

export default Savings_Page_A;
