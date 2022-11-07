import React, { useContext, useEffect, useState } from 'react';
import { json } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import OrderRow from './OrderRow';


const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])
   
 
    const handleOrderDelete=id=>{
        const proced=window.confirm("Yor are Sure ? You want to cancel this Order : ");
        if(proced){
            fetch(`http://localhost:5000/orders/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
              console.log(data)
              if (data.deletedCount>0) {
                alert("Successfully deleted one document.");

                const remainingOrder=orders.filter(ords=>ords._id!==id);
                setOrders(remainingOrder);
              }
            
            })
        }
    
     }
     const handleUpdateStatus=id=>{
        fetch(`http://localhost:5000/orders/${id}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({status:"Approve"})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                const remaining=orders.filter(ord=>ord._id!==id);
                const modifyRow=orders.find(ord=>ord._id===id);
                const newOrders=[modifyRow,...remaining]
                modifyRow.status="Approve";
                setOrders(newOrders);
            }
        })
     }

    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
     
          <thead>
            <tr>
              <th>
                <label>
                <button className="btn btn-ghost rounded">X</button>
                </label>
              </th>
              <th>Name</th>
              <th>Services</th>
              <th>Favorite Color</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map(order=><OrderRow
              key={order._id}
              orders={order}
              handleOrderDelete={handleOrderDelete}
              handleUpdateStatus={handleUpdateStatus}
              ></OrderRow>)
            }
          </tbody>
      
          
        </table>
      </div>
    );
};

export default Orders;
