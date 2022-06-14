import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  updateService,
  addAttachment,
  resetAttachments,
  resetAttachmentCount,
} from "../../../store";
import Newsletter_FileReader from "./Newsletter_FileReader";

const Service_A = ({ service, changeNewsletter, setChangeNewsletter }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [synopsis, setSynopsis] = useState(service && service.synopsis);
  const [newsletter, setNewsletter] = useState("");
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
          setNewsletter(fileReader.result);
          setCanSubmit(true);
        }
      };

      fileReader.readAsDataURL(file);
    }
  };

  const onSynopsisChange = (e) => {
    setCanSubmit(true);
    setSynopsis(e.target.value);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const obj = {
        id: service && service.id,
        service: service && service.service,
        synopsis,
      };

      if (attachmentUploaded) {
        obj.newsletter = newsletter;
      }

      dispatch(updateService(obj, history));

      dispatch(resetAttachments());
      dispatch(resetAttachmentCount());
      setCanSubmit(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="service-cont-admin">
      <form id="services-form" onSubmit={onSubmit}>
        <div className="service-cont-header"> {service && service.service}</div>
        <button form="services-form" type="submit" disabled={!canSubmit}>
          Update Service Info
        </button>
      </form>
      <textarea
        className="service-synopsis-admin"
        defaultValue={service && service.synopsis}
        onChange={onSynopsisChange}
      ></textarea>
      <div
        onClick={() => setChangeNewsletter(true)}
        className="change-newsletter-button"
      >
        Change Newsletter
      </div>

      {changeNewsletter && changeNewsletter && (
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
    </div>
  );
};

export default Service_A;
