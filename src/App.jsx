import BaseContent from "./components/BaseContent";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import SavedProject from "./components/SavedProject";
import Modal from "./components/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useState, useRef } from "react";

function App() {
  const [generalState, setGeneralState] = useState({
    action: "showBaseContent",
    projectsData: [],
  });

  const [selectedProject, setSelectedProject] = useState({});
  const form = useRef();
  const button = useRef();
  const modal = useRef();

  function handleStartProject() {
    setGeneralState((prevState) => {
      return {
        ...prevState,
        action: "showNewProject",
      };
    });
  }

  function handleSaveProject() {
    const inputs = form.current;
    const formData = new FormData(inputs);
    const inputData = Object.fromEntries(formData.entries());
    if (
      inputData.title.trim() === "" ||
      inputData.duedate.trim() === "" ||
      inputData.description.trim() === ""
    ) {

      modal.current.open();

      return;
    }

    inputData.projectId = Date.now().toString();

    setGeneralState((prevState) => {
      return {
        action: "showBaseContent",

        projectsData: [...prevState.projectsData, inputData],
      };
    });
  }

  function handleCancel() {
    setGeneralState((prevState) => {
      return {
        ...prevState,
        action: "showBaseContent",
      };
    });
  }
  function handleDelete(id){
    setGeneralState((prevState) => {
      return {
        action:"showBaseContent",
        projectsData: prevState.projectsData.filter((p)=>p.projectId!==id),
      };
    });
  }

  function handleSelectProject(id) {
    const targetProjectData = generalState.projectsData.find(
      (p) => p.projectId === id
    );
    setSelectedProject(targetProjectData);
    setGeneralState((prevState) => {
      return {
        ...prevState,
        action: "showSavedProject",
      };
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Ok"/>
      <div className="root-container">
        <Sidebar
          onStartProject={handleStartProject}
          dataStore={generalState.projectsData}
          buttonRef={button}
          onOpenProject={handleSelectProject}
        />
        <BaseContent
          onAction={generalState.action}
          onStartProject={handleStartProject}
        />
        <NewProject
          onAction={generalState.action}
          onSaveProject={handleSaveProject}
          formRef={form}
          onCancel={handleCancel}
        />
        <SavedProject
          onAction={generalState.action}
          dataStore={generalState.projectsData}
          selectedProjectData={selectedProject}
          onDelete={handleDelete}
        />

      </div>
    </>
  );
}

export default App;
