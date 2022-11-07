import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const CheckOut = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleCheckOut = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const phone = form.phone.value;
        const message = form.message.value;
        const email = user?.email || "UnRegister Person"
     
        const order = {
            service: _id,
            serviceName: title,
            phone,
            customer: name,
            email,
            message

        }

        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
              
                if(data.acknowledged){
                    alert("Order Placed Success");
                    form.reset();
                }
            })
            .catch(error => console.log(error))

    }
    return (
        <form onSubmit={handleCheckOut}>
            <h2 className="text-4xl">Your About to Order: {title}</h2>
            <h4 className='text-3xl'>Price: {price}</h4>

            <div className='grid grid-col-1 md:grid-cols-2 gap-5'>
                <input type="text" name='firstName' placeholder="Your First Name" className="input input-bordered input-primary w-full" />
                <input type="text" name="lastName" placeholder="Your Last Name" className="input input-bordered input-primary w-full" />
                <input type="text" name="phone" placeholder="Your Phone Number" className="input input-bordered input-primary w-full" />
                <input type="text" name='email' placeholder="Email " defaultValue={user?.email} className="input input-bordered input-primary w-full" readOnly />
            </div>
            <textarea name='message' className="textarea textarea-bordered h-24 w-full mt-5" placeholder="Message"></textarea>
            <input className='btn' type="submit" value="Place Order" />




        </form>


    );
};

export default CheckOut;