const FAQ_Single = ({ faq, edit, currentFAQ }) => {
  return (
    <div
      className={
        faq && currentFAQ && currentFAQ.id === faq.id
          ? "selected"
          : "faq-single-cont-admin"
      }
    >
      <div className="faq-a-order">Order#: {faq && faq.order}</div>
      <div className="q-a-cont">
        <div className="faq-a-q">Q: {faq && faq.Q}</div>
        <div className="faq-a-a">A: {faq && faq.A}</div>
      </div>
      <div className="edit-butt">
        <button
          disabled={faq && currentFAQ && currentFAQ.id === faq.id}
          onClick={() => edit(faq)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default FAQ_Single;
