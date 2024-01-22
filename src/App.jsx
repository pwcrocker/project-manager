import {useState} from "react";
import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import ProjectForm from "./components/ProjectForm";
import NoProject from "./components/NoProject";

const projects = [
  {
    name: 'Shop for baby gates',
    date: new Date().toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'}),
    description: `We need baby gates at the top and bottom of the stairs, but the strange baseboards are causing issues.`,
    tasks: ['Measure baseboard top of stairs', 'Measure baseboard bottom of stairs', 'Buy gate']
  },{
    name: 'Buy meat',
    date: new Date().toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'}),
    description: `Buy meat from Acme farms, and don't forget to check chicken.`,
    tasks: []
  },{
    name: 'Make bone broth',
    date: new Date().toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'}),
    description: `These are the steps for making bone broth.`,
    tasks: ['Thaw bones', 'Roast bones', 'Cover bones in dutch oven just over top with water', 'Add salt', 'Add peppercorns', 'Get to extremely slow simmer']
  }
]

function App() {
  const [allProjects, setAllProjects] = useState(projects);
  const [curIdx, setCurIdx] = useState(0);
  const [isAddProject, setIsAddProject] = useState(false);

  function handleSidebarClick(index) {
    setIsAddProject(false);
    setCurIdx(index);
  }

  function handleAddProjectClick(index) {
    setIsAddProject(true);
  }

  function handleSaveProjectSubmit(newProject) {
    newProject.date = new Date(newProject.date).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});
    newProject.tasks = [];
    setAllProjects(prevProjects => [...prevProjects, newProject]);
    setIsAddProject(false);
  }

  function handleRemoveProjectClick() {
    setAllProjects((prevProjects) => {
      return [...prevProjects.filter((element, idx) => idx !== curIdx)];
    });
    setCurIdx(0);
  }

  function handleAddTaskClick(taskName) {
    setAllProjects(prevProjects => {
      const newAllProjects = [...prevProjects];
      newAllProjects[curIdx] = { ...newAllProjects[curIdx], tasks: [...newAllProjects[curIdx].tasks, taskName] };
      return newAllProjects;
    })
  }

  function handleRemoveTaskClick(taskIdx) {
    setAllProjects(prevProjects => {
      const newAllProjects = [...prevProjects];
      newAllProjects[curIdx] = {...newAllProjects[curIdx], tasks: [...newAllProjects[curIdx].tasks.filter((element, idx) => idx !== taskIdx)]};
      return newAllProjects;
    })
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={allProjects} handleClick={handleSidebarClick} handleAddProject={handleAddProjectClick} activeIndex={curIdx} />
      {(allProjects.length === 0 && !isAddProject) && <NoProject handleCreateClick={handleAddProjectClick}/>}
      {(allProjects.length >= 1 && !isAddProject) && <Project project={allProjects[curIdx]} handleRemoveProj={handleRemoveProjectClick} handleAddTask={handleAddTaskClick} handleRemoveTask={handleRemoveTaskClick}/>}
      {isAddProject && <ProjectForm handleSubmit={handleSaveProjectSubmit} />}
    </main>
  );
}

export default App;
