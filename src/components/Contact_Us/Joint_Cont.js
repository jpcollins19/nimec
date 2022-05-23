import Input_Cont from "./Input_Cont";

const Joint_Cont = ({
  cont,
  setFirstName,
  setLastName,
  setEmail,
  setNumber,
  setMessage,
}) => {
  const params = {
    1: ["First Name", "Last Name"],
    2: ["Email", "Number"],
    3: ["Message", "Message"],
  };

  const firstParam = params[cont][0];
  const secondParam = params[cont][1];

  const regex = /\S/g;

  const combined1 = firstParam.match(regex).join("");
  const set1 = eval(`set${combined1}`);

  const combined2 = secondParam.match(regex).join("");
  const set2 = eval(`set${combined2}`);

  return (
    <div className={cont === 3 ? "message-cont" : "joint-cont"}>
      <Input_Cont param={firstParam} set1={set1} />
      {cont !== 3 && <Input_Cont param={secondParam} set2={set2} />}
    </div>
  );
};

export default Joint_Cont;
