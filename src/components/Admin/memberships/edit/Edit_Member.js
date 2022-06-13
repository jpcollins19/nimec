import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formatFirstLettertoUpperCase, updateClient } from "../../../../store";
import Select from "react-select";
import Input_Cont_Edit from "./Input_Cont_Edit";

const Edit_Member = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [client, setClient] = useState(null);
  const [name, setName] = useState("");
  const [municipalAgg, setMunicipalAgg] = useState(false);
  const [organization, setOrganization] = useState("");
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if (client) {
      setName(client.name);
      setMunicipalAgg(client.municipalAgg);
      setOrganization(client.organization);
    }
  }, [client]);

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

  const onChange = (val, set) => {
    setChanged(true);
    set(val);
  };

  const toggle = () => {
    setChanged(true);
    setMunicipalAgg((value) => !value);
  };

  const params = ["name", "municipalAgg", "organization"];

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const obj = {
        id: client.id,
        name,
        municipalAgg,
        organization,
      };

      dispatch(updateClient(obj, history));
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
          const set = eval(`set${formatFirstLettertoUpperCase(param)}`);
          const val = eval(param);
          return (
            <Input_Cont_Edit
              key={param}
              onChange={onChange}
              toggle={toggle}
              set={set}
              val={val}
              param={formatFirstLettertoUpperCase(param)}
            />
          );
        })}
      {client && (
        <div className="submit-cont-admin">
          <button disabled={!changed}>Update Member</button>
        </div>
      )}
    </form>
  );
};

export default Edit_Member;
