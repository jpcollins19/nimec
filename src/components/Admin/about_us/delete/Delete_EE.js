import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formatFirstLettertoUpperCase, deleteEE } from "../../../../store";
import Select from "react-select";
import Input_Cont_Delete from "./Input_Cont_Delete";

const Delete_EE = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [ee, setEE] = useState(null);

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

  const params = ["name", "title", "email", "phone", "synopsis", "order"];

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      console.log("delete submit ran");
      // dispatch(deleteEE(ee, history));
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
          const val = ee[param];
          return (
            <Input_Cont_Delete
              key={param}
              val={val}
              param={formatFirstLettertoUpperCase(param)}
            />
          );
        })}
      {ee && (
        <div className="submit-cont-admin">
          <button>Delete EE</button>
        </div>
      )}
    </form>
  );
};

export default Delete_EE;
