import React from 'react';
import './UserOrderCard.css'

const UserOrderCard = ({ order }) => {
    const { email, location, serviceName, paymentId, status } = order;
    return (
        <div className="col-md-6">
            <div className="d-flex justify-content-between mt-3 pt-4 pl-4 pr-4 order-card">
                <div>
                    <p>Email: {email}</p>
                    <p>Service: {serviceName}</p>
                    <p>Location: {location}</p>
                    <p>Payment ID: {paymentId}</p>
                </div>
                <div>
                    {
                        status === "Done" && <span className="bg-success p-3 text-white border">
                            {status}
                        </span>
                    }
                    {
                        status === "On Going" && <span className="bg-info p-3 text-white border">
                            {status}
                        </span>
                    }
                    {
                        status === "pending" && <span className="bg-warning p-3 text-white border">
                            {status}
                        </span>
                    }
                </div>
            </div>
        </div>
    );
};

export default UserOrderCard;