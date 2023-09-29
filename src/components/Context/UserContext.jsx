import { createContext, useEffect, useState } from "react";

import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.init";

export const AuthContext=createContext();
const auth = getAuth(app);

const Googleprovider = new GoogleAuthProvider();





const UserContext = ({children}) => {
  const [user,setuser]=useState(null);
  const [loading,setloding]=useState(true);
  
  const opensingin=(email,password)=>{
  
    return signInWithEmailAndPassword(auth,email,password)
    }
    const createuser=(email,password)=>{
      setloding(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const googlesingup=()=>{
      setloding(true)
      return signInWithPopup(auth,Googleprovider)
    }
    const Logout=()=>{
      return signOut(auth)
      .then(() => {
        
      }).catch((error) => {
       
      });
    }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
      setuser(currentUser);
      setloding(false)
    
    })
    return ()=>{
      unsubscribe();
    }
    },[]);
    const AuthInfo={
        createuser,
        googlesingup,
        opensingin,
        Logout,
        loading, 
        user
    }
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>
        {children}
        
    </AuthContext.Provider> 
        
    </div>
  );
}

export default UserContext;
