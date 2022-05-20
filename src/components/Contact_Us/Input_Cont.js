const Input_Cont = ({
  value,
  setFirstName,
  setLastName,
  setEmail,
  setNumber,
  setMessage,
}) => {
  const regex = /\S/g;
  const combined = value.match(regex).join("");
  const set = eval(`set${combined}`);

  return (
    <li className={value !== "Message" ? "joint-cont-li" : "message-file"}>
      <label>
        {value} {value !== "Number" && <span className="required">*</span>}
      </label>
      {value === "Message" ? (
        <textarea
          className="field-long field-textarea"
          placeholder="Your Message"
          onChange={(ev) => set(ev.target.value)}
        ></textarea>
      ) : (
        <input
          type={value === "Email" ? "email" : "text"}
          className="field-divided"
          placeholder={value}
          onChange={(ev) => set(ev.target.value)}
        />
      )}
    </li>
  );
};

export default Input_Cont;
