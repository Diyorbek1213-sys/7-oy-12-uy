import React, { useState } from 'react'
import AdderForm from './components/AdderForm'
import useStore from './useStore'

const App = () => {
  const { tasks, deleteTask, doneTask, done, handleReturnT} = useStore()

  const handleDelete = (index) => {
    deleteTask(index)
  }

  const handleDone = (index) => {
    doneTask(index)
  }

  const handleReturn = (index) => {
    handleReturnT(index)
  }


  return (
    <div>
      <div className='flex items-center justify-center mt-[70px]'>
        <AdderForm />
      </div>
      <h2 className='text-center text-2xl mt-[100px]'>Tasks</h2>
      <div className='flex flex-col justify-center items-center gap-4'>
        {tasks.length > 0 && tasks.map((item, index) => {
          return <div key={index} className='bg-gray-200 flex justify-between p-8 rounded-md w-[600px] items-center'>
            <h3 className='text-[20px]'>{item}</h3>
            <div className='flex gap-3'>
              <button onClick={() => handleDelete(index)} className='bg-gray-500 p-3 rounded-md hover:bg-gray-400 transition-all text-gray-200'>Delete</button>
              <button onClick={() => handleDone(index)} className='bg-gray-500 p-3 rounded-md hover:bg-gray-400 transition-all text-gray-200'>Done</button>
            </div>
          </div>
        })}
      </div>
      <h2 className='text-center mt-[50px] text-2xl'>Done</h2>
      <div className='flex flex-col justify-center items-center gap-4'>
        {
          done.length > 0 && done.map((item, index) => {
            return <div key={index} className='bg-gray-200 flex justify-between p-8 rounded-md w-[600px] items-center'>
              <h3 className='text-[20px]'>{item}</h3>
              <div className='flex gap-3'>
                <button onClick={() => handleReturn(index)} className='bg-gray-500 p-3 rounded-md hover:bg-gray-400 transition-all text-gray-200'>Return</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App