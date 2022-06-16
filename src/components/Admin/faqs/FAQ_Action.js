import Edit from "./edit/Edit";
import Add from "./add/Add";
import Alert from "@mui/material/Alert";

const FAQ_Action = ({
  action,
  currentFAQ,
  onChange,
  updateReady,
  order,
  Q,
  A,
  error,
  onSubmit,
  editLinkChecked,
  setEditLinkChecked,
  setUpdateNeeded,
  setDeleteNeeded,
  deleteNeeded,
  setDeleteConfirmed,
}) => {
  return (
    <div className="faq-cont-admin-action">
      <h2>{action} FAQ Section</h2>
      {action && action === "Add" ? (
        <form onSubmit={onSubmit} className="action-cont">
          <button>Submit FAQ</button>
          <input
            type="checkbox"
            onChange={() => setEditLinkChecked(!editLinkChecked)}
            checked={editLinkChecked ? editLinkChecked : !!editLinkChecked}
          ></input>
          <div>Does the Answer need a link embedded?</div>
        </form>
      ) : (
        <form onSubmit={onSubmit} className="action-cont" id="faq-submit-form">
          {error && <Alert severity="error">{error}</Alert>}
          <button disabled={!updateReady} onClick={() => setUpdateNeeded(true)}>
            Update FAQ
          </button>
          <button onClick={() => setDeleteNeeded(true)}>Delete FAQ</button>
          <input
            type="checkbox"
            onChange={() => setEditLinkChecked(!editLinkChecked)}
            checked={editLinkChecked ? editLinkChecked : !!editLinkChecked}
          ></input>
          <div>Does the Answer need a link embedded?</div>
        </form>
      )}
      {deleteNeeded ? (
        <div>
          <div className="error-cont">
            <Alert severity="error">
              Are you sure you want to delete this FAQ?
            </Alert>
            <button
              form="faq-submit-form"
              onClick={() => setDeleteConfirmed(true)}
            >
              Confirm & Delete FAQ
            </button>
          </div>
        </div>
      ) : action === "Edit" ? (
        <Edit
          currentFAQ={currentFAQ}
          onChange={onChange}
          editLinkChecked={editLinkChecked}
        />
      ) : (
        <Add onChange={onChange} editLinkChecked={editLinkChecked} />
      )}
    </div>
  );
};

export default FAQ_Action;
