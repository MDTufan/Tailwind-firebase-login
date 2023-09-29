import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Navber = () => {
  const {user,Logout} = useContext(AuthContext);
  const handlelogout=()=>{
        Logout()
  }
  return (
    <div className='bg-indigo-400 '>
      <div className=" shadow-2xl navbar ">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">TUFAN ALI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link className='text-xl font-medium ' to='/singup'>SignUp</Link></li>
      <li><Link className='text-xl font-medium' to="/singin">SignIn</Link></li>
      <li><Link className='text-xl font-medium' to="/about">About</Link></li>
     <li>
     {
     user?.uid ? <li><button onClick={handlelogout} className='btn btn-sm bg-yellow-300' >LogOut</button></li>
     :
     <li><Link className='text-xl font-medium' to="/singin"><button className='btn btn-sm bg-yellow-300'>LogIn</button> </Link></li>
     }
     </li>
     <li>
      <img className='rounded-full w-24' src={user?.photoURL} alt="" />
     </li>
    </ul>
  </div>
</div>
    </div>
  );
}

export default Navber;
