export default function Sidebar({
  onStartProject,
  dataStore,
  buttonRef,
  onOpenProject,
}) {
  return (
    <div className="sidebar-container">
      <h1 className="sidebar-title">YOUR PROJECTS</h1>
      <button className="sidebar-button" onClick={onStartProject}>
        + Add Project
      </button>

      <div className="sidebar-savedprojects-buttons"></div>
      {dataStore.length > 0
        ? dataStore.map((input) => {
            const { projectId, title } = input;
            return (
              <button
                ref={buttonRef}
                key={projectId}
                id={projectId}
                onClick={() => onOpenProject(projectId)}
                className="savedproject-button"
              >
                {title}
              </button>
            );
          })
        : null}
    </div>
  );
}
