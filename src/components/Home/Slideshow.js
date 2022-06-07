import { useSelector } from "react-redux";
import Quote from "@mui/icons-material/FormatQuote";
import "./Home.css";

const Home_Page = () => {
  const references = useSelector((state) => state.clients).filter(
    (client) => client.references.length
  );

  return (
    <div className="slideshow">
      {references &&
        references.map((client, idx) => (
          <div key={idx}>
            <div>
              <Quote
                fontSize="large"
                sx={{
                  color: "rgb(149, 149, 207)",
                }}
              />
              {client.references.map((reference) => (
                <div key={reference.id} className="quote">
                  {reference.quote}
                  <p className="quotee">
                    - {reference.name && `${reference.name}, `}
                    {reference.title} @ {client.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home_Page;
