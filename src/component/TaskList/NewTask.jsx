import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='h-full shrink-0 bg-green-400 w-[300px] p-5 rounded-xl'>
    <div className='flex justify-between items-center '>
        <h3 className='text-sm bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
    </div>

<h2 className='mt-5 font-semibold text-2xl '>{data.title}</h2>

<p className='text-sm mt-2'>{data.description}</p>
<div className='mt-4'>
    <button className=' bg-green-500 p-[2px]s rounded'>Accept Task</button>
</div>
  </div>
  )
}

export default NewTask
