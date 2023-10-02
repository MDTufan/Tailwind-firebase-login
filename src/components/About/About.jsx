import React from 'react';
import img from "../../assets/11.png"
const About = () => {
  return (
    <div>
     
   <div className=" hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse image-div">
    
    <div>
      <h1 className="text-5xl text-white font-bold">This is Abouts Section</h1>
      <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className="btn-2">
      <button className="btn btn-1">Get Started</button>
      </div>
    </div>
    <div className="xx-12">
    <img src={img} className="max-w-sm rounded-lg shadow-2xl img-size1" />
    </div>
    
  </div>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus neque officiis necessitatibus vitae, sequi earum qui reprehenderit inventore harum? Voluptas numquam, error omnis saepe quos porro sint ullam beatae incidunt.</p>
</div>
    </div>
  );
}

export default About;
