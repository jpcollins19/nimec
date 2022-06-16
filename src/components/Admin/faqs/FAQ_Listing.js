import FAQ_Single from "./FAQ_Single";

const FAQ_Listing = ({ faqs, edit, currentFAQ }) => {
  return (
    <div className="faq-cont-admin">
      {faqs &&
        faqs.map((faq) => (
          <FAQ_Single
            key={faq.id}
            faq={faq}
            edit={edit}
            currentFAQ={currentFAQ}
          />
        ))}
    </div>
  );
};

export default FAQ_Listing;
