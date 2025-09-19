import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const Tasklist = ({data}) => {
  return (
    <div id='tasklist' className='overflow-x-auto flex gap-5 justify-start w-full h-[54%] flex-nowrap  mt-10 py-5'>
  
 {data.tasks.map((ele,idx)=>{

if(ele.active){
  return <AcceptTask key= {idx} data={ele}/>
}

if(ele.newTask){
  return <NewTask key={idx} data={ele}/>
}

if(ele.completed){
  return <CompleteTask key={idx} data={ele}/>
}

if(ele.failed){
  return <FailedTask key={idx} data={ele}/>
}

 })}

 



   
    </div>
  )
}

export default Tasklist
