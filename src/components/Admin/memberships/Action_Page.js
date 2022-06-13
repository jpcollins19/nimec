import Add_Member from "./add/Add_Member";
import Edit_Member from "./edit/Edit_Member";
import Delete_Member from "./delete/Delete_Member";

const Action_Page = ({ action, setAction }) => {
  const obj = {
    1: "Add",
    2: "Edit",
    3: "Delete",
  };

  return (
    <div className="edit-cont">
      <div className="edit-header">{action && obj[action]} Member</div>
      <div className="cancel-cont">
        <div onClick={() => setAction(null)}>Cancel</div>
      </div>

      {action && action === 1 ? (
        <Add_Member />
      ) : action === 2 ? (
        <Edit_Member />
      ) : action === 3 ? (
        <Delete_Member />
      ) : (
        ""
      )}
    </div>
  );
};

export default Action_Page;
