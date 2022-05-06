import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import "./Memberships.css";

const Memberships_Page = () => {
  const [selectedOrg, setSelectedOrg] = useState("");

  const organizations = useSelector((state) => state.clients)
    .filter((client) => client.organization !== null)
    .map((client) => client.organization);

  const clients = useSelector((state) => state.clients);

  let targetClients;

  targetClients = clients.filter((client) => client);

  if (selectedOrg.length) {
    targetClients = targetClients.filter(
      (client) => client.organization === selectedOrg
    );
  }

  // useEffect(() => {
  //   setSelectedClients([...selectedClients, ...clients]);
  //   console.log("selectedClients in effect call", selectedClients);
  // }, []);

  // useEffect(() => {
  //   clients = clients.filter((client) => client.organization === selectedOrg);
  //   console.log("clients", clients);
  //   console.log("selectedOrg", selectedOrg);
  // }, [selectedOrg]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="100vh"
      className="memberships-page"
    >
      <div className="memberships-header">
        <select onChange={(ev) => setSelectedOrg(ev.target.value)}>
          <option>Select Organization</option>
          {organizations &&
            organizations.map((org, idx) => <option key={idx}>{org}</option>)}
        </select>
        <div>{selectedOrg}</div>
      </div>
      <div className="memberships-cont">
        <ul className="memberships-text-cont">
          {targetClients &&
            targetClients.map((client) => (
              <li key={client.id}>{client.name}</li>
            ))}
        </ul>
      </div>
      <button onClick={() => setSelectedOrg("")}>Clear</button>
    </Box>
  );
};

export default Memberships_Page;
