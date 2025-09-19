import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div>
         
      <div className='h-full shrink-0 bg-red-400 w-[300px] p-5 rounded-xl'>
        <div className='flex justify-between items-center '>
            <h3 className='text-sm bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm' >{data.date}</h4>
        </div>

<h2 className='mt-5 font-semibold text-2xl '>{data.title}</h2>

<p className='text-sm mt-2'>{data.description}</p>

<div className='flex justify-between mt-4'>
  <button className='bg-green-500 py-1 px-2 text-sm rounded'>Mark as completed</button>
  <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as failed</button>
</div>
      </div>



    </div>
  )
}

export default AcceptTask
