const Input_Cont_Delete = ({ val, param }) => {
  return (
    <div className="input-cont">
      <div className="param-name">{param && param}:</div>
      <div className="param-val">{val && val}</div>
    </div>
  );
};

export default Input_Cont_Delete;
