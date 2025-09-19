import React from 'react'

const Header = (props) => {
  
const logOutUser=()=>{
 localStorage.setItem('loggedInUser','');
 props.changeUser('');
}

  return(
  <div className='text-white flex items-end justify-between'>
    <h1 className='text-2xl font-semibold'>Hello <br /> <span className='text-3xl font-semibold'>{props.data?props.data.firstname :"Admin"} 👋</span></h1>
    <button onClick={logOutUser} className='bg-red-600 text-lg font-medium px-4 py-2 rounded-sm'>Log out</button>
  </div>
);
};

export default Header
