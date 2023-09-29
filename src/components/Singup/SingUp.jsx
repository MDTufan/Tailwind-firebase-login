import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const SingUp = () => {
const { createuser,googlesingup}=useContext(AuthContext);
console.log(createuser)
const hendelSignUp=(e)=>{
    e.preventDefault();
   const form=e.target;
   const name=form.name.value; 
   const email=form.email.value;
   const password=form.password.value;
   console.log(name,email,password);
   createuser(email,password)
   .then(result =>{
    const user=result.user;
    console.log(user)
    alert("Wonderful Your Are Successfully SingUp")
    form.reset();
   })
   .catch(error=>console.log(error));
   
};
const handlewidthGoogle=()=>{
  googlesingup()
  .then(result =>{
    const user=result.user;
    console.log(user)
    alert("Google Width Successfully SingUp")
    form.reset();
   })
   .catch(error=>console.log(error));
}

  return (
    <div className='bg-violet-950 '>
      <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-20 mb-20">
      <form onSubmit={hendelSignUp} className="card-body ">
      <h1 className='text-2xl font-bold text-center text-indigo-950'>Plase SignUp</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" />
        </div>
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
          <input type="text" name="password" placeholder="password" className="input input-bordered" />
          
          <label className="label">
            <Link to="/singin" className=" text-base text-sky-800 label-text-alt link link-hover">Already Have An Account</Link>
          </label>
        </div>
       
        <div className="form-control mt-6">
          <input type="submit" className='btn btn-primary' value="SingUp" />
        </div>
       
      </form>
      <div className="form-control px-8 pb-4">
          
          <button onClick={handlewidthGoogle} className='btn btn-primary' >Open Width Google</button>
      </div>
    </div>
  </div>
</div>
</div>
  );
}

export default SingUp;
