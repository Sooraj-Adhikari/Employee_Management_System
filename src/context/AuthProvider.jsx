import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext=createContext();

const AuthProvider = ({children}) => {
const [userData,SetUserData]=useState(null);

useEffect(()=>{
 
setLocalStorage();
const {employees,admin}=getLocalStorage();

SetUserData(employees);

},[])

  return (
    <div>

<AuthContext.Provider value={[userData,SetUserData]}>

      {children}

      </AuthContext.Provider>

    </div>
  )
}

export default AuthProvider
