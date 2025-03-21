import React, { useState } from 'react'
import AdderForm from './components/AdderForm'
import useStore from './useStore'

const App = () => {
  const { tasks, deleteTask } = useStore()
  console.log(tasks)

  const handleDelete = (index) => {
    deleteTask(index)
  }

  return (
    <div>
      <div className='flex items-center justify-center mt-[70px]'>
        <AdderForm />
      </div>
      <div className='flex flex-col justify-center items-center mt-[100px] gap-4'>
        {tasks.length > 0 && tasks.map((item, index) => {
          return <div key={index} className='bg-gray-200 flex justify-between p-8 rounded-md w-[600px] items-center'>
            <h3 className='text-[20px]'>{item}</h3>
            <button onClick={() => handleDelete(index)} className='bg-gray-500 p-3 rounded-md hover:bg-gray-400 transition-all text-gray-200'>Delete</button>
            <button>Done</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default App