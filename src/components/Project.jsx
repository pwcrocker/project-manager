import { useState } from 'react';
import TaskList from "./TaskList";

export default function Project({ project: { name, date, description, tasks }, handleRemoveProj, handleAddTask, handleRemoveTask }) {
  const [newTask, setNewTask] = useState('');

  function handleAddTaskOverride(newTask) {
    setNewTask('');
    handleAddTask(newTask);
  }

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  // should have prob split this up
  return (
    <div className="w-full mt-20 mr-40">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">{name}</h1>
        <button className="text-stone-700 hover:text-red-500 pr-6" onClick={handleRemoveProj}>Delete</button>
      </div>
      <p className="text-stone-400 mb-4">{date}</p>
      <p className="mb-4">{description}</p>
      <header className="pb-4 mb-4 border-b-2 border-stone-300" />
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className='flex justify-between gap-4 my-4'>
        <span className="w-2/3 relative">
          <input id="taskInput" className='relative w-full pl-2 pr-1 py-1 mt-1 rounded-sm bg-stone-200' onChange={handleChange} value={newTask} />
          {!newTask && <span class="absolute top-1 right-0 flex h-2 w-2">
            <span class="animate-ping absolute h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>}
        </span>
        <span className="w-1/3">
          <button className='w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 disabled:bg-gray-300 disabled:text-gray-400'
            onClick={() => handleAddTaskOverride(newTask)}
            disabled={!newTask}>
            Add Task
          </button>
        </span>

      </div>
      {tasks?.length > 0 ? <TaskList tasks={tasks} handleRemoveTask={handleRemoveTask} /> : <p>No tasks listed for project {name}</p>}
    </div>
  );
}
