import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full shrink-0 bg-blue-400 w-[300px] p-5 rounded-xl'>
        <div className='flex justify-between items-center '>
            <h3 className='text-sm bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
            <h4 text-sm>{data.date}</h4>
        </div>

<h2 className='mt-5 font-semibold text-2xl '>{data.title}</h2>

<p className='text-sm mt-2'>{data.description}</p>

<div className='mt-2'>
    <button className='w-full p-[2px] bg-green-500 rounded'>Completed</button>
</div>

      </div>
  )
}

export default CompleteTask
