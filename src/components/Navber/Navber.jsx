import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Navber = () => {
  const {name} = useContext(AuthContext);
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
     <li>
      <h3>{name}</h3>
     </li>
    </ul>
  </div>
</div>
    </div>
  );
}

export default Navber;
