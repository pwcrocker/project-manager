export default function Sidebar({ projects, handleClick, handleAddProject, activeIndex }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h1>
      <button onClick={handleAddProject} className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>
        + Add project
      </button>
      <menu className="flex-col items-center justify-end gap-4 my-4">
        {projects.map((project, idx) => (
          <li key={project.name}>
            <button id={project.name} className={`w-full text-left px-2 py-1 rounded-sm my-1  ${activeIndex === idx ? 'bg-stone-800': 'hover:text-stone-200 hover:bg-stone-800'}`} 
              onClick={() => handleClick(idx)} >
              {project.name}
            </button>
          </li>
        ))}
      </menu>
    </aside>
  );
}
