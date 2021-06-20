import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import UserOrderCard from './UserOrderCard';
import loader from '../../../images/loader.gif';

const UserOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/order?email='+loggedInUser.email, {
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [loggedInUser])
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar/>
            </div>
            <div className="col-md-9">
                <div className="d-flex justify-content-between p-2 pt-4 name">
                    <h3>Your Order Summary</h3>
                    <h5>{loggedInUser.name}</h5>
                </div>
                <div className="row">
                    {
                        orders.length > 0 ? 
                        orders.map(order => <UserOrderCard key={order._id} order={order} />)
                        :
                        <img src={loader} className="text-center m-auto" height="200px" alt="" />
                    }
                </div>
            </div>
        </div>
    );
};

export default UserOrder;