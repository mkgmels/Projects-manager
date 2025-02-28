import { useState, useRef } from "react";

export default function Tasks({Input}) {
  
    const taskInput = useRef();
    const clearButton = useRef();
    const [taskState, setTaskState] = useState({});
  
    function handleAddTask(projectId) {
      const taskName = {
        name: taskInput.current.value,
        id: Date.now().toString(),
      };
  
      setTaskState((prevState) => ({
        ...prevState,
        [projectId]: [...(prevState[projectId] || []), taskName],
      }));
      taskInput.current.value="";
    }
  
    function handleClearTask(projectId,targetId) {
      setTaskState((prevState) => ({
        ...prevState,
        [projectId]: prevState[projectId].filter((task) => task.id !== targetId),
      }));
    }
  
  
    return (
    <div className="tasks-container">
      <h1 className="tasks-title">Tasks</h1>
      <div className="tasks-input-section">
        <input
          required
          ref={taskInput}
          className="tasks-input"
          type="text"
          name="taskName"
          placeholder="Enter a task..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTask(Input.projectId);
              taskInput.current.value=""
            }
          }}
        />
        <button
          className="add-task-button"
          onClick={() => handleAddTask(Input.projectId)}
        >
          + Add task
        </button>
      </div>
      <ul className="tasks-list">
        {(taskState[Input.projectId] || []).map((task) => (
          <li key={Input.projectId} className="task-group">
            <p>{task.name}</p>
            <button
              onClick={() => handleClearTask(Input.projectId, task.id)}
              ref={clearButton}
              className="clear-task-button"
            >
              Clear
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
