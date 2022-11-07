import React, { useEffect, useState } from 'react';

const OrderRow = ({orders,handleOrderDelete,handleUpdateStatus}) => {
 const{_id,serviceName,customer,email,phone,service,status}=orders;
 const[orderService,setOrderService]=useState([]);

 useEffect(() => {
     fetch(`http://localhost:5000/services/${service}`)
     .then(res=>res.json())
     .then(data=>setOrderService(data))
 }, [service]);
    return (
        <tr>
        <th>
          <label>
          <button onClick={()=>handleOrderDelete(_id)} className="btn btn-ghost rounded">X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-20 h-20">
                {
                    orderService?.img &&
                    <img src={orderService.img} />
                }
                
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{phone}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br/>
          <span className="badge badge-ghost badge-sm">${orderService.price}</span>
        </td>
        <td>Purple</td>
        <th>
          <button onClick={()=>handleUpdateStatus(_id)} className="btn btn-ghost btn-xs">{status?status:"Pending"}</button>
        </th>
      </tr>

    );
};

export default OrderRow;