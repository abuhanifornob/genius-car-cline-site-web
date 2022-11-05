import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCart from './ServicesCart';


const Services = () => {
    const[services,setServices]=useState([]);
   useEffect(()=>{
     fetch("http://localhost:5000/services")
     .then(res=>res.json())
     .then(data=>setServices(data))
   },[])
    return (
        <div className=" mb-10">
        <div className='text-center py-5'>
            <p className="text-2xl font-bold text-orange-500 mb-2">Services</p>
            <h2 className="text-4xl font-bold mb-2">Our Service Area</h2>
            <p className='mb-2'>the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which don't look even slightly believable. </p>
        </div>
          <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            services.map(service=><ServicesCart
            key={service._id}
            service={service}
            ></ServicesCart>)
            }
          </div>
         <div className='w-44 my-10 mx-auto'>
          <Link>
          <button className="btn btn-outline btn-warning ">More Services</button>
          </Link>
          </div>
          
           
        
        </div>
    );
};

export default Services;