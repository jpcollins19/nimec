import Newsletter_FileReader from "../../savings/Newsletter_FileReader";

const Input_Cont_Edit = ({
  onChange,
  set,
  val,
  param,
  uploadImage,
  attachmentUploaded,
  setAttachmentUploaded,
  setCanSubmit,
  loading,
  setLoading,
  attachments,
}) => {
  return (
    <div className="input-cont-about-us-admin">
      <div className="param-name">{param}:</div>
      {param && param === "Synopsis" ? (
        <textarea
          defaultValue={val}
          onChange={(ev) => onChange(ev.target.value, set)}
        ></textarea>
      ) : param === "Photo" ? (
        <Newsletter_FileReader
          uploadImage={uploadImage}
          attachmentUploaded={attachmentUploaded}
          setAttachmentUploaded={setAttachmentUploaded}
          setCanSubmit={setCanSubmit}
          loading={loading}
          setLoading={setLoading}
          attachments={attachments}
        />
      ) : (
        <input
          type="text"
          defaultValue={val}
          onChange={(ev) => onChange(ev.target.value, set)}
        ></input>
      )}
    </div>
  );
};

export default Input_Cont_Edit;
