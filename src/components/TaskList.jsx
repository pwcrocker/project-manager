import { useState } from 'react';

export default function TaskList({ tasks, handleRemoveTask }) {
  const [checkedTasks, setCheckedTasks] = useState([]);

  function handleCheckboxChange(checkedIdx) {
    setCheckedTasks((prevCheckedTasks) => {
      const isChecked = prevCheckedTasks.includes(checkedIdx);
      return isChecked
        ? prevCheckedTasks.filter((curIdx) => curIdx !== checkedIdx)
        : [...prevCheckedTasks, checkedIdx];
    });
  }

  return (
      <ul className='px-8 py-2 mt-8 rounded-md bg-stone-100'>
        {
          tasks.map((task, idx) => {
            return (
              <li key={task} className='flex justify-between my-4'>
                <span className={checkedTasks.includes(idx) ? 'line-through' : ''}>
                  <input
                    type="checkbox"
                    checked={checkedTasks.includes(idx)}
                    onChange={() => handleCheckboxChange(idx)}
                    className="mr-2"
                  />
                  {task}
                </span>
                <span><button className='text-stone-700 hover:text-red-500' onClick={() => handleRemoveTask(idx)}>Clear</button></span>
              </li>
            )
          })
        }
      </ul>
    )
  }
