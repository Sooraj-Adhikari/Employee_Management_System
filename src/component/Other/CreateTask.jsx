import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

   const [taskTitle,setTaskTitle]=useState('');
   const [taskDescription,setTaskDescription]=useState('');
   const [taskDate,setTaskDate]=useState('');
   const [assignTo,setAssignTo]=useState('');
   const [category,setCategory]=useState('');
const [newTask,setNewTask]=useState({});
const [userData,SetUserData]=useContext(AuthContext);
   
   

    const submitHandler=(e)=>{
        e.preventDefault();
       setNewTask({title:taskTitle,description:taskDescription,category,date:taskDate,active:true,newTask:true,failed:false});

       const data=userData;

      data.forEach((elem)=>{
if(assignTo==elem.firstname){

elem.taskCount.newTask=elem.taskCount.newTask+1;
    elem.tasks.push(newTask);

}

      })

      SetUserData(data);

      console.log(userData);
       
       setTaskTitle('');
       setTaskDescription('');
       setCategory('');
       setTaskDate('');
       setAssignTo('');
    }




  return (
    <div className='p-5 mt-7 bg-[#1c1c1c] rounded'>
<form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>

<div className='w-1/2'>

<div>
    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
    <input value={taskTitle} onChange={(e)=>{
setTaskTitle(e.target.value);
    }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI Design' />
</div>

<div>
    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
    <input value={taskDate} onChange={(e)=>{
setTaskDate(e.target.value);
    }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date"  />
</div>

<div>
    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
    <input value={assignTo} onChange={(e)=>{
setAssignTo(e.target.value);
    }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
</div>

<div>
    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
    <input value={category} onChange={(e)=>{
setCategory(e.target.value);
    }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
</div>

</div>

<div className='w-2/5 flex flex-col'>
    <h3 className='text-sm text-gray-300 mb-0.5' >Description</h3>
    <textarea value={taskDescription} onChange={(e)=>{
setTaskDescription(e.target.value);
    }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
</div>

</form>

    </div>
  )
}

export default CreateTask
