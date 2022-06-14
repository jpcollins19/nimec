import FAQ_Single from "./FAQ_Single";

const FAQ_Listing = ({ faqs }) => {
  return (
    <div className="faq-cont-admin">
      {faqs && faqs.map((faq) => <FAQ_Single faq={faq} />)}
    </div>
  );
};

export default FAQ_Listing;
