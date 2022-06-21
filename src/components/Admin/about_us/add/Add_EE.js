import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  formatFirstLettertoUpperCase,
  addEE,
  addAttachment,
  resetAttachments,
  resetAttachmentCount,
} from "../../../../store";
import Input_Cont_Add from "./Input_Cont_Add";
import Alert from "@mui/material/Alert";

const Add_EE = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [order, setOrder] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");

  const attachments = useSelector((state) => state.attachments);
  const count = useSelector((state) => state.attachmentCount);

  const [attachmentUploaded, setAttachmentUploaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    attachments.length === count ? setLoading(false) : setLoading(true);
    attachments.length === 0 && setAttachmentUploaded(false);
  }, [count]);

  useEffect(() => {
    attachments.length === count ? setLoading(false) : setLoading(true);
    attachments.length && !attachmentUploaded && dispatch(resetAttachments());
  }, [attachments]);

  const onChange = (val, set) => {
    set(val);
    setError("");
  };

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
          setPhoto(fileReader.result);
        }
      };

      fileReader.readAsDataURL(file);
    }
  };

  const params = [
    "name",
    "title",
    "email",
    "phone",
    "synopsis",
    "order",
    "photo",
  ];

  const lengths = params.map((param) => {
    return eval(param).length;
  });

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      if (isNaN(Number(order))) {
        return setError("Order needs to be a number");
      }

      const obj = {
        name,
        title,
        email,
        phone,
        synopsis,
        order: Number(order),
        photo,
      };

      dispatch(addEE(obj, history));

      dispatch(resetAttachments());
      dispatch(resetAttachmentCount());
      setCanSubmit(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={onSubmit} className="member-cont">
      <div className="submit-cont-about-us-admin">
        <button disabled={lengths.includes(0)}>Submit EE</button>
        <div className="error-cont-admin">
          {error && <Alert severity="error">{error}</Alert>}
        </div>
      </div>
      {params.map((param) => {
        const set = eval(`set${formatFirstLettertoUpperCase(param)}`);
        return (
          <Input_Cont_Add
            key={param}
            onChange={onChange}
            set={set}
            param={formatFirstLettertoUpperCase(param)}
            uploadImage={uploadImage}
            attachmentUploaded={attachmentUploaded}
            setAttachmentUploaded={setAttachmentUploaded}
            setCanSubmit={setCanSubmit}
            loading={loading}
            setLoading={setLoading}
            attachments={attachments}
          />
        );
      })}
    </form>
  );
};

export default Add_EE;
