const Edit_Page = ({ action, setAction }) => {
  const obj = {
    1: "Add",
    2: "Edit",
    3: "Delete",
  };

  return (
    <form className="edit-cont">
      <div className="edit-header">{action && obj[action]} Member</div>
      <div className="cancel-cont" onClick={() => setAction(null)}>
        Cancel
      </div>
    </form>
  );
};

export default Edit_Page;
