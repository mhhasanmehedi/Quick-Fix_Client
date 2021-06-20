import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import loader from '../../../images/loader.gif';
import AdminSingleOrder from '../AdminSingleOrder/AdminSingleOrder';

const AllOrders = () => {
    const [Orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allOrders', {
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-secondary" scope="col">Sl No</th>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email Address</th>
                            <th className="text-secondary" scope="col">Service Name</th>
                            <th className="text-secondary" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Orders.length > 0 ?
                                Orders.map((order, index) => <AdminSingleOrder order={order} index={index} />)

                                :
                                <img height="250px" style={{marginLeft:'300px'}} src={loader} alt="..." />
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;