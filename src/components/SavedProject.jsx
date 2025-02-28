import Tasks from "./Tasks";

export default function SavedProject({
  onAction,
  dataStore,
  selectedProjectData,
  onDelete
}) {
  
  return (
    <>
      {dataStore.length > 0
        ? dataStore.map((input) => (
            <div
              key={input.projectId}
              id={input.projectId}
              className={
                input.projectId === selectedProjectData.projectId &&
                onAction === "showSavedProject"
                  ? "savedproject-container"
                  : "hidden"
              }
            >
              <div className="savedproject-data">
                <div className="savedproject-title-button-container">
                <h1 className="savedproject-data-title">{input.title}</h1>
                <button className="savedproject-delete-button" onClick={()=>onDelete(input.projectId)}>Delete</button>
                </div>
                <p className="savedproject-data-duedate">
                  {new Date(input.duedate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <p className="savedproject-data-description">
                  {input.description}
                </p>
                <div className="savedproject-breakline"></div>
              </div>

              <Tasks Input={input}/>
            </div>
          ))
        : []}
    </>
  );
}
