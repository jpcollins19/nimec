import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  formatFirstLettertoUpperCase,
  updateEE,
  addAttachment,
  resetAttachments,
  resetAttachmentCount,
} from "../../../../store";
import Select from "react-select";
import Input_Cont_Edit from "./Input_Cont_Edit";
import Alert from "@mui/material/Alert";

const Edit_EE = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [ee, setEE] = useState(null);
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

  useEffect(() => {
    if (ee) {
      setName(ee.name);
      setTitle(ee.title);
      setEmail(ee.email);
      setPhone(ee.phone);
      setSynopsis(ee.synopsis);
      setOrder(ee.order);
      setPhoto(ee.photo);
    }
  }, [ee]);

  const ees = useSelector((state) => state.EEs)
    .sort((a, b) => a.order - b.order)
    .map((ee) => {
      return { value: ee, label: ee.name };
    });

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
        width: "16rem",
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
        width: "15rem",
        height: "2.5rem",
        fontSize: "1rem",
        textAlign: "center",
        "&:hover": {
          background: "rgb(242, 242, 234)",
        },
      };
    },
  };

  const onChange = (val, set) => {
    val.length > 0 ? setCanSubmit(true) : setCanSubmit(false);
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
          setCanSubmit(true);
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

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      if (isNaN(Number(order))) {
        return setError("Order needs to be a number");
      }

      const obj = {
        id: ee && ee.id,
        name,
        title,
        email,
        phone,
        synopsis,
        order: Number(order),
        photo,
      };

      dispatch(updateEE(obj, history));

      dispatch(resetAttachments());
      dispatch(resetAttachmentCount());
      setCanSubmit(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={onSubmit} className="member-cont">
      <div className="membs-dropdown-admin-page">
        <Select
          options={ees && ees}
          onChange={(value) => setEE(value.value)}
          styles={styles}
          placeholder="Search For EE"
          className="mems-select-admin-page"
        />
      </div>
      {ee && (
        <div className="submit-cont-about-us-admin">
          <button disabled={!canSubmit}>Update EE</button>
          <div className="error-cont-admin">
            {error && <Alert severity="error">{error}</Alert>}
          </div>
        </div>
      )}
      {ee &&
        params.map((param) => {
          const set = eval(`set${formatFirstLettertoUpperCase(param)}`);
          const val = eval(param);
          return (
            <Input_Cont_Edit
              key={param}
              onChange={onChange}
              set={set}
              val={val}
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

export default Edit_EE;
