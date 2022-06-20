import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formatFirstLettertoUpperCase, updateEE } from "../../../../store";
import Select from "react-select";
import Input_Cont_Edit from "./Input_Cont_Edit";

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
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if (ee) {
      setName(ee.name);
      setTitle(ee.title);
      setEmail(ee.email);
      setPhone(ee.phone);
      setSynopsis(ee.synopsis);
      setOrder(ee.order);
      // setPhoto(ee.photo);
    }
  }, [ee]);

  const ees = useSelector((state) => state.ees)
    .sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    })
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
    setChanged(true);
    set(val);
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
      console.log("update EE submit ran");
      // const obj = {
      //   id: client.id,
      //   name,
      //   municipalAgg,
      //   organization,
      // };

      // dispatch(updateEE(obj, history));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={onSubmit} className="member-cont">
      <div className="membs-dropdown-admin-page">
        <Select
          options={ees.length && ees}
          onChange={(value) => setEE(value.value)}
          styles={styles}
          placeholder="Search For EE"
          className="mems-select-admin-page"
        />
      </div>
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
            />
          );
        })}
      {ee && (
        <div className="submit-cont-admin">
          <button disabled={!changed}>Update EE</button>
        </div>
      )}
    </form>
  );
};

export default Edit_EE;
