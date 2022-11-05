import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth=getAuth(app)
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
   const[user,setUser]=useState(null);
   const [loading,setLoading]=useState(true)

   const createUserEmailAndPassword=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
   }
    const signInUserEmailAndPassword=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
     const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
        })
     return ()=>{
        unSubscribe();
     }
    },[])
   

    const authInfo={user,createUserEmailAndPassword,signInUserEmailAndPassword}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;