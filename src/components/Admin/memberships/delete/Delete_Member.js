import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formatFirstLettertoUpperCase, deleteClient } from "../../../../store";
import Select from "react-select";
import Input_Cont_Delete from "./Input_Cont_Delete";

const Delete_Member = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [client, setClient] = useState(null);

  const clients = useSelector((state) => state.clients)
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
    .map((client) => {
      return { value: client, label: client.name };
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

  const params = ["name", "municipalAgg", "organization"];

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      dispatch(deleteClient(client, history));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={onSubmit} className="member-cont">
      <div className="membs-dropdown-admin-page">
        <Select
          options={clients.length && clients}
          onChange={(value) => setClient(value.value)}
          styles={styles}
          isSearchable={true}
          placeholder={"Search For Member"}
          className="mems-select-admin-page"
        />
      </div>
      {client &&
        params.map((param) => {
          const val = client[param];
          return (
            <Input_Cont_Delete
              key={param}
              val={val}
              param={formatFirstLettertoUpperCase(param)}
            />
          );
        })}
      {client && (
        <div className="submit-cont-admin">
          <button>Delete Member</button>
        </div>
      )}
    </form>
  );
};

export default Delete_Member;
