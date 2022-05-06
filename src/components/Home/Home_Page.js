import { useSelector } from "react-redux";
import "./Home.css";

const Home_Page = () => {
  const clients = useSelector((state) => state.clients);

  const references = useSelector((state) => state.clients).filter(
    (client) => client.references.length
  );

  console.log(references);
  return (
    <main>
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
                {client.references.map((reference) => (
                  <div key={reference.id}>
                    {reference.quote}
                    <p>
                      - {reference.name && `${reference.name}: `}
                      {reference.title}, {client.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Home_Page;
