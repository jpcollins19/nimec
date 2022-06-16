import { formatFirstLettertoUpperCase } from "../../../../store";

const Input_Cont_E = ({ value, input, onChange }) => {
  return (
    <div className="input-cont" key={value}>
      <div>{input && formatFirstLettertoUpperCase(input)}:</div>
      {input && input === "order" ? (
        <input
          onChange={(ev) => onChange(input, ev.target.value)}
          defaultValue={value && value}
        ></input>
      ) : (
        <textarea
          onChange={(ev) => onChange(input, ev.target.value)}
          defaultValue={value && value}
        ></textarea>
      )}
    </div>
  );
};

export default Input_Cont_E;
