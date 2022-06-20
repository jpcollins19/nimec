const Input_Cont_Add = ({ onChange, set, param }) => {
  return (
    <div className="input-cont">
      <div className="param-name">{param}:</div>
      {param && param === "Synopsis" ? (
        <textarea
          placeholder={param}
          onChange={(ev) => onChange(ev.target.value, set)}
        ></textarea>
      ) : (
        <input
          placeholder={param}
          onChange={(ev) => onChange(ev.target.value, set)}
        ></input>
      )}
    </div>
  );
};

export default Input_Cont_Add;
