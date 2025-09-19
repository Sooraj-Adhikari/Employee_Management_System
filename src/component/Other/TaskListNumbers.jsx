import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-5 justify-between gap-5' >
      <div className='bg-red-400 py-6 px-9 w-[45%] rounded-xl'>
        <h1 className='text-3xl font-semibold'>{data.taskCount.newTask}</h1>
        <h1 className='text-xl font-medium'>New Task</h1>
      </div>

      <div className='bg-blue-400 py-6 px-9 w-[45%] rounded-xl'>
        <h1 className='text-3xl font-semibold'>{data.taskCount.completed}</h1>
        <h1 className='text-xl font-medium'>Completed Task</h1>
      </div>

      <div className='bg-green-400 py-6 px-9 w-[45%] rounded-xl'>
        <h1 className='text-3xl font-semibold'>{data.taskCount.active}</h1>
        <h1 className='text-xl font-medium'>Accepted Task</h1>
      </div>

      <div className='bg-yellow-400 py-6 px-9 w-[45%] rounded-xl'>
        <h1 className='text-3xl font-semibold'>{data.taskCount.failed}</h1>
        <h1 className='text-xl font-medium'>Failed Task</h1>
      </div>
    </div>
  )
}

export default TaskListNumbers
