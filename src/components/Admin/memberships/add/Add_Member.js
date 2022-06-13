import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formatFirstLettertoUpperCase, addClient } from "../../../../store";
import Input_Cont_Add from "./Input_Cont_Add";

const Add_Member = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [municipalAgg, setMunicipalAgg] = useState(false);
  const [organization, setOrganization] = useState("");

  const onChange = (val, set) => {
    set(val);
  };

  const toggle = () => setMunicipalAgg((value) => !value);

  const params = ["name", "municipalAgg", "organization"];

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const obj = {
        name,
        municipalAgg,
        organization,
      };

      dispatch(addClient(obj, history));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={onSubmit} className="member-cont">
      {params.map((param) => {
        const set = eval(`set${formatFirstLettertoUpperCase(param)}`);
        return (
          <Input_Cont_Add
            key={param}
            onChange={onChange}
            toggle={toggle}
            set={set}
            param={formatFirstLettertoUpperCase(param)}
          />
        );
      })}
      <div className="submit-cont-admin">
        <button disabled={name.length === 0 || organization.length === 0}>
          Add Member
        </button>
      </div>
    </form>
  );
};

export default Add_Member;
