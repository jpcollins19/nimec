import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import Quote from "@mui/icons-material/FormatQuote";
import "./Home.css";

const Home_Page = () => {
  const clients = useSelector((state) => state.clients);

  const references = useSelector((state) => state.clients).filter(
    (client) => client.references.length
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="100vh"
      className="home-page"
    >
      <div className="statement">
        <h2>
          NIMEC is a collaborative of {clients && clients.length} municipalities
          that band together to drive down pricing for residential and municipal
          electricity.
        </h2>
      </div>
      <div className="slideshow">
        {references &&
          references.map((client, idx) => (
            <div key={idx}>
              <div>
                <Quote
                  fontSize="large"
                  sx={{
                    color: "rgb(5, 5, 100)",
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
    </Box>
  );
};

export default Home_Page;
