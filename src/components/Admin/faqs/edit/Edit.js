import Input_Cont_E from "./Input_Cont_E";

const Edit = ({ currentFAQ, onChange, editLinkChecked }) => {
  const inputs = ["order", "Q", "A"];

  const linkInputs = ["link", "linkWord"];

  return (
    <div>
      {inputs.map((input) => (
        <Input_Cont_E
          key={input}
          value={currentFAQ && currentFAQ[input]}
          input={input}
          onChange={onChange}
        />
      ))}
      {editLinkChecked &&
        linkInputs.map((input) => (
          <Input_Cont_E
            key={input}
            value={currentFAQ && currentFAQ[input]}
            input={input}
            onChange={onChange}
          />
        ))}
    </div>
  );
};

export default Edit;
