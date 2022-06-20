import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formatFirstLettertoUpperCase, addEE } from "../../../../store";
import Input_Cont_Add from "./Input_Cont_Add";

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

  const onChange = (val, set) => {
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

  const lengths = params.map((param) => {
    return eval(param).length;
  });

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      console.log("add EE submit ran");
      // const obj = {
      //   name,
      //   title,
      //   email,
      //   phone,
      //   synopsis,
      //   order,
      //   //photo
      // };

      // dispatch(addEE(obj, history));
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
            set={set}
            param={formatFirstLettertoUpperCase(param)}
          />
        );
      })}
      <div className="submit-cont-admin">
        <button disabled={lengths.includes(0)}>Add EE</button>
      </div>
    </form>
  );
};

export default Add_EE;
