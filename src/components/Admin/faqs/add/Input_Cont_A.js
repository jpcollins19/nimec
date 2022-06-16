import { formatFirstLettertoUpperCase } from "../../../../store";

const Input_Cont_A = ({ input, onChange }) => {
  return (
    <div className="input-cont" key={input}>
      <div>{input && formatFirstLettertoUpperCase(input)}:</div>
      {input && input === "order" ? (
        <input onChange={(ev) => onChange(input, ev.target.value)}></input>
      ) : (
        <textarea
          onChange={(ev) => onChange(input, ev.target.value)}
        ></textarea>
      )}
    </div>
  );
};

export default Input_Cont_A;
