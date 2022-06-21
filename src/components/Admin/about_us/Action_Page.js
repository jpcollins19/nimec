import Add_EE from "./add/Add_EE";
import Edit_EE from "./edit/Edit_EE";
import Delete_EE from "./delete/Delete_EE";

const Action_Page = ({ action, setAction }) => {
  const obj = {
    1: "Add",
    2: "Edit",
    3: "Delete",
  };

  return (
    <div className="edit-cont-about-us-admin">
      <div className="edit-header">{action && obj[action]} EE</div>
      <div className="cancel-cont">
        <div onClick={() => setAction(null)}>Cancel</div>
      </div>

      {action && action === 1 ? (
        <Add_EE />
      ) : action === 2 ? (
        <Edit_EE />
      ) : action === 3 ? (
        <Delete_EE />
      ) : (
        ""
      )}
    </div>
  );
};

export default Action_Page;
