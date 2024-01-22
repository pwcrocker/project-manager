import srcImg from '../assets/no-projects.png';

export default function NoProject({ handleCreateClick }) {
  return <div className="w-full text-center mt-20">
    <img src={srcImg} alt="no project selected" className="w-16 h-16 object-contain mx-auto" />
    <h1 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h1>
    <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={handleCreateClick}>
      Create a new project
    </button>
  </div>
}
