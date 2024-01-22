import { useState } from "react"

export default function ProjectForm({ handleSubmit }) {
  const [projectForm, setProjectForm] = useState({
    name: '',
    description: '',
    date: ''
  });

  function handleInputChange(event) {
    setProjectForm(prev => setProjectForm({ ...prev, [event.target.id]: event.target.value }));
  }

  return (
    <form onSubmit={() => handleSubmit(projectForm)} className="w-2/3 mt-4 text-right">
      <div className="flex justify-end">
        <button className="text-stone-700 hover:text-red-500 mr-4">
          Cancel
        </button>
        <button type="submit" className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
          Save
        </button>
      </div>

      <div className="mt-2 mb-4 text-left">
        <label className="text-sm font-bold uppercase text-stone-500">
          Name
        </label>
        <input id="name" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          onChange={handleInputChange}
          value={projectForm?.name || ''}
          required />
      </div>

      <div className="mb-4 text-left">
        <label className="text-sm font-bold uppercase text-stone-500">
          Description
        </label>
        <textarea id="description" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          onChange={handleInputChange}
          value={projectForm?.description || ''} 
          required />
      </div>

      <div className="mb-4 text-left">
        <label className="text-sm font-bold uppercase text-stone-500">
          Due Date
        </label>
        <input id="date" 
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type="date" 
          onChange={handleInputChange} 
          value={projectForm?.date || ''} required />
      </div>

    </form>
  )
}
