import { createContext } from "react";

import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.init";

export const AuthContext=createContext();
const auth = getAuth(app);
const Googleprovider = new GoogleAuthProvider();
const createuser=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
}
const googlesingup=()=>{
  return signInWithPopup(auth,Googleprovider)
}
const opensingin=(email,password)=>{
return signInWithEmailAndPassword(auth,email,password)
}
const UserContext = ({children}) => {
  
    
    const AuthInfo={
        createuser,
        googlesingup,
        opensingin
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
