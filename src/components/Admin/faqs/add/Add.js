import Input_Cont_A from "./Input_Cont_A";

const Add = ({ onChange, editLinkChecked }) => {
  const inputs = ["order", "Q", "A"];

  const linkInputs = ["link", "linkWord"];

  return (
    <div>
      {inputs.map((input) => (
        <Input_Cont_A key={input} input={input} onChange={onChange} />
      ))}
      {editLinkChecked &&
        linkInputs.map((input) => (
          <Input_Cont_A key={input} input={input} onChange={onChange} />
        ))}
    </div>
  );
};

export default Add;
