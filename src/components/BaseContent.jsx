export default function BaseContent({ onAction, onStartProject }) {
  return (
    <div
      className={
        onAction === "showBaseContent" ? "content-container" : "hidden"
      }
    >
      <img src="/logo.png" alt="project logo" className="content-logo" />
      <h1 className="content-title">No Project Selected</h1>
      <h2 className="content-description">
        Select a project or get started with a new one
      </h2>
      <button className="content-button" onClick={onStartProject}>
        Create new project
      </button>
    </div>
  );
}
