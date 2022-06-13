const Input_Cont_Delete = ({ val, param }) => {
  const municipalAgg =
    param && param === "MunicipalAgg" ? (val ? "Yes" : "No") : "";

  return (
    <div className="input-cont">
      <div className="param-name">{param && param}:</div>
      <div className="param-val">
        {param && param === "MunicipalAgg" ? municipalAgg : val && val}
      </div>
    </div>
  );
};

export default Input_Cont_Delete;
