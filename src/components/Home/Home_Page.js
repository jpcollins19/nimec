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
        NIMEC is a collaborative of {clients && clients.length} municipalities
        that band together to drive down pricing for residential and municipal
        electricity.
      </div>
      <div className="synopsis-cont">
        <div className="synopsis1">
          NIMEC is the leading municipal aggregator of electricity in northern
          Illinois, having managed 100 municipal aggregations with a population
          base approaching 2,000,000. NIMEC is the leader in Municipal
          Aggregation in Northern Illinois, managing more Municipal Aggregation
          programs than anyone else. Illinois municipalities can now negotiate
          lower electric rates for its residents' home bills. In the same way
          municipalities negotiate community-wide contracts for waste disposal
          or cable television, NIMEC helps communities purchase power for their
          residents. NIMEC's purchasing power of $150 million per year helps our
          members achieve aggressive rates for their residents.
        </div>
        <div className="synopsis2">
          Additionally, NIMEC has been helping its members (libraries, schools,
          fire districts, and park districts) purchase power for their water
          pumping, street lighting, and natural gas. NIMEC's retention rate
          averages 99%, while growing each year.
        </div>
      </div>
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
    </Box>
  );
};

export default Home_Page;
