const Member_Column = ({ clientList }) => {
  return (
    clientList &&
    clientList.map((client) => (
      <div key={client.id}>
        {client.name} {client.municipalAgg && "*"}
      </div>
    ))
  );
};

export default Member_Column;
