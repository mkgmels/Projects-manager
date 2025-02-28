export default function NewProject({
  onAction,
  onSaveProject,
  formRef,
  onCancel,
}) {
  function handleCancelevent(e){
    e.preventDefault()
    onCancel()
  }
  function handleSubmit(e) {
    e.preventDefault();
    onSaveProject();
    e.target.reset();
  }

  return (
    <form
      className={
        onAction === "showNewProject" ? "newproject-container" : "hidden"
      }
      onSubmit={(e) => handleSubmit(e)}
      ref={formRef}
    >
      <div className="newproject-input-title">
        <h3 className="newproject-input-title-text">TITLE</h3>
        <input
          name="title"
          className="newproject-input-title-box"
          type="text"
        />
      </div>
      <div className="newproject-input-description">
        <h3 className="newproject-input-description-text">DESCRIPTION</h3>
        <textarea
          name="description"
          className="newproject-input-description-box"
          placeholder="Enter your text here..."
        ></textarea>
      </div>
      <div className="newproject-input-duedate">
        <h3 className="newproject-input-duedate-text">DUE DATE</h3>
        <input
          name="duedate"
          className="newproject-input-duedate-box"
          type="date"
        />
      </div>
      <div className="newproject-buttons">
        <button className="newproject-save-button" type="submit">
          Save
        </button>
        <button className="newproject-cancel-button" onClick={(e)=>handleCancelevent(e)}>
          Cancel
        </button>
      </div>
    </form>
  );
}
