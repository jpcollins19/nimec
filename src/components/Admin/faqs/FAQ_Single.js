const FAQ_Single = ({ faq }) => {
  return (
    <div className="faq-single-cont-admin">
      <div>{faq && faq.Q}</div>
    </div>
  );
};

export default FAQ_Single;
