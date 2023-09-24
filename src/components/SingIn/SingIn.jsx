import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const SingIn = () => {
  const {opensingin}=useContext(AuthContext);
const handelSingin=(e)=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;

    console.log(email,password);
    opensingin(email,password)
    .then(result =>{
      const user=result.user;
      console.log(user)
      alert("Wonderful Your Are Successfully SingIN")
      form.reset();
     })
     .catch(error=>
      console.log(error),
      
      );
}

  return (
    <div className='bg-violet-950'>
    <div className="hero min-h-screen ">
<div className="hero-content flex-col lg:flex-row-reverse">
 
  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form onSubmit={handelSingin} className="card-body">
      <h1 className='text-2xl font-bold text-center text-indigo-950'>Plase SignIn</h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="text" name='email' placeholder="email" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="text" name='password' placeholder="password" className="input input-bordered" />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
        <label className="label">
          <Link to="/singup" className="text-base text-sky-800 label-text-alt link link-hover"> Create A New Account</Link>
        </label>
      </div>
     
      
      <div className="form-control mt-6">
      <input type="submit" className='btn btn-primary' value="SingIn" />
      </div>
    </form>
  </div>
</div>
</div>
  </div>
  );
}

export default SingIn;
