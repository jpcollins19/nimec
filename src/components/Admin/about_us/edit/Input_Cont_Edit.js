const Input_Cont_Edit = ({ onChange, set, val, param }) => {
  return (
    <div className="input-cont">
      <div className="param-name">{param}:</div>
      {param && param === "Synopsis" ? (
        <textarea
          defaultValue={val}
          onChange={(ev) => onChange(ev.target.value, set)}
        ></textarea>
      ) : (
        <input
          defaultValue={val}
          onChange={(ev) => onChange(ev.target.value, set)}
        ></input>
      )}
    </div>
  );
};

export default Input_Cont_Edit;
