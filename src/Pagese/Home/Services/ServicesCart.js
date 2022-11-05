import React from 'react';
import { Link } from 'react-router-dom';


const ServicesCart = ({service}) => {
    const{_id,title,img,price}=service;
    return (
        <div className="card card-compact w-100 bg-base-100 shadow-xl">
            <figure><img src={img} className="h-72 w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl font-bold text-orange-500'>Price ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`checkOut/${_id}`}>
                    <button className="btn btn-primary">See More Details</button>
                    </Link>
                 
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;