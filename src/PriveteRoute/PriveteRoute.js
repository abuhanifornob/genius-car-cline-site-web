import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PriveteRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
        return <h3 className='text-2xl'>Loading...</h3>
    }
    if(user){
        return children
    }
   
   <Navigate state={{from:location}} replace></Navigate> 

};

export default PriveteRoute;