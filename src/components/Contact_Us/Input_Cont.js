const Input_Cont = ({ param, set1, set2 }) => {
  const obj = {
    "First Name": set1,
    "Last Name": set2,
    Email: set1,
    Number: set2,
    Message: set1,
  };

  return (
    <li className={param === "Message" ? "message-file" : "joint-cont-li"}>
      <label>
        {param} {param !== "Number" && <span className="required">*</span>}
      </label>
      {param === "Message" ? (
        <textarea
          type="text"
          className="field-long field-textarea"
          placeholder="Your Message"
          onChange={(ev) => obj[param](ev.target.value)}
        ></textarea>
      ) : (
        <input
          type={param === "Email" ? "email" : "text"}
          className="field-divided"
          placeholder={param}
          onChange={(ev) => obj[param](ev.target.value)}
        />
      )}
    </li>
  );
};

export default Input_Cont;
