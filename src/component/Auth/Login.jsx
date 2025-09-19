import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';




const Login = ({handleLogin}) => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

const submitHandler=(e)=>{
    e.preventDefault();

    handleLogin(email,password);

    setEmail('');
    setPassword('');
}

const data=useContext(AuthContext);


  return (
    <div className='bg-black'>
    <div className='flex items-center justify-center w-screen h-screen'>
        <form className='flex flex-col border-2 rounded-xl border-emerald-600 p-20'  
        
        onSubmit={(e)=>{
            submitHandler(e);
        }}
        
        >
            <input value={email}  onChange={(e)=>{
                setEmail(e.target.value);
            }} className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' required type="email" placeholder='Enter your email' />
            
            <input value={password} onChange={(e)=>{
                setPassword(e.target.value);
            }} className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl my-3 py-3 px-5 rounded-full placeholder:text-gray-400' required type="password" placeholder='Enter your password' />
            <button className='text-white mt-5 border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full'>Login</button>
        </form>
    </div>
    </div>
  )
}

export default Login
