import {React, useContext, useEffect, useState}  from 'react'
import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'





const App = () => {

const [user,setUser]=useState(null);

const [loggedInUserData,setLoggedInUserData]=useState(null);

const [userData,SetUserData]=useContext(AuthContext);

useEffect(()=>{

  const loggedInUser=localStorage.getItem('loggedInUser');

  if(loggedInUser){
   const userData=JSON.parse(loggedInUser);
  setUser(userData.role);
  setLoggedInUserData(userData.data);
  }
},[]);

const handleLogin=(email,password)=>{

  if(email=="admin@me.com"  && password=="123"){

    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
    setUser('admin');
 
    
    

  }

  else if(userData){

    const employee=userData.find((e)=>e.email==email && e.password==password)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}));
    setUser('employee');
    setLoggedInUserData(employee);
    }
  

  else{
    alert("Invalid Credentials");
  }

}

  return (
    <>
      


{!user?<Login handleLogin={handleLogin} />:''}
{user=="employee" ?<EmployeeDashboard data={loggedInUserData} changeUser={setUser} /> : ''}
{user=="admin" ? <AdminDashboard changeUser={setUser} /> : ''}
    </>
  )
}

export default App
