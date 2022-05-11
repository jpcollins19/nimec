import { useState } from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import Member_Column from "./Member_Column";
import Select from "react-select";
import "./Memberships.css";

const Memberships_Page = () => {
  const [selectedOrg, setSelectedOrg] = useState(null);

  const organizations = useSelector((state) => state.clients)
    .filter((client) => client.organization !== null)
    .map((client) => client.organization)
    .reduce((a, name) => {
      !a.includes(name) && a.push(name);

      return a;
    }, [])
    .sort()
    .reduce((a, name) => {
      const obj = {
        value: name,
        label: name,
      };

      a.push(obj);

      return a;
    }, []);

  const clients = useSelector((state) => state.clients).sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  let targetClients;

  targetClients = clients.filter((client) => client);

  if (selectedOrg) {
    targetClients = targetClients.filter(
      (client) => client.organization === selectedOrg.value
    );
  }

  const clientLength = Math.ceil(targetClients.length / 3);

  const clientList1 = targetClients.slice(0, clientLength);
  const clientList2 = targetClients.slice(clientLength, clientLength * 2);
  const clientList3 = targetClients.slice(clientLength * 2);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="100vh"
      className="membs-page"
    >
      <div className="selected-org-header">Memberships</div>
      <div className="membs-dropdown">
        <Select
          className="membs-select"
          onChange={(value) => setSelectedOrg(value)}
          options={organizations.length && organizations}
          value={selectedOrg}
          placeholder={"Filter by Organization"}
        />
        <button onClick={() => setSelectedOrg(null)}>Clear Filter</button>
      </div>
      <div className="asterisk-cont">* Municipality member </div>
      <div className="membs-cont">
        <div className="membs-text-cont">
          <div>{clientList1 && <Member_Column clientList={clientList1} />}</div>
          <div>{clientList2 && <Member_Column clientList={clientList2} />}</div>
          <div>{clientList3 && <Member_Column clientList={clientList3} />}</div>
        </div>
      </div>
    </Box>
  );
};

export default Memberships_Page;
