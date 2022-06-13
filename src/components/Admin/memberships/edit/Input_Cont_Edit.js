const Input_Cont_Edit = ({ onChange, toggle, set, val, param }) => {
  return (
    <div className="input-cont">
      <div className="param-name">{param}:</div>
      <input
        type={param === "MunicipalAgg" ? "checkbox" : "text"}
        checked={val}
        defaultValue={val}
        onChange={
          param === "MunicipalAgg"
            ? toggle
            : (ev) => onChange(ev.target.value, set)
        }
      ></input>
      {param && param === "MunicipalAgg" && <div>check box if true</div>}
    </div>
  );
};

export default Input_Cont_Edit;
