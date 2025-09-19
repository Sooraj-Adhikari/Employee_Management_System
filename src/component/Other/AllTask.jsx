import React, { useContext } from 'react'
import  { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData,SetUserData]=useContext(AuthContext);

  return (



    <div className='bg-[#1c1c1c] p-5 rounded mt-5 '>

<div className='flex justify-between bg-red-400 mb-2 py-2 px-4 rounded'>
  <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
  <h3 className='text-lg font-medium w-1/5'>New Task</h3>
  <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
  <h5 className='text-lg font-medium w-1/5'>Completed</h5>
  <h5 className='text-lg font-medium  w-1/5'>Failed</h5>
</div>

<div >
{userData.map((ele,idx)=>{
 return <div key={idx} className='flex justify-between rounded border-2 border-emerald-500 mb-2 py-2 px-4 '>
 <h2 className='text-lg font-medium w-1/5'>{ele.firstname}</h2>
 <h3 className='text-lg font-medium w-1/5  text-blue-600' >{ele.taskCount.newTask}</h3>
 <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{ele.taskCount.active}</h5>
 <h5 className='text-lg font-medium w-1/5 text-white'>{ele.taskCount.completed}</h5>
 <h5 className='text-lg font-medium w-1/5 text-red-600'>{ele.taskCount.failed}</h5>

 
</div>

})}
</div>
    </div>
  )
}

export default AllTask
