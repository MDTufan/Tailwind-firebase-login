import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';
import { Navigate } from 'react-router-dom';
import Loading from '../Loding/Loading';

const Priveate = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    if(loading){
      return <Loading />  
    }
    if(user){
    return children     
    }
 return <Navigate to="/singin"> </Navigate>
}
export default Priveate;
