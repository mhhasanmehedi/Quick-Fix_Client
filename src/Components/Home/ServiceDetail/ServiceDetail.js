import React from 'react';
import './ServiceDetail.css';
import {Link} from "react-router-dom";

const ServiceDetail = ({ service }) => {
    const { serviceName, description, imageURL, price, _id } = service;
    return (
        <div className="col-md-4">
            <div className="single-service-box">
                <div className="service-img">
                    <img width="100%" height="220px" src={imageURL} alt="" />
                </div>
                <div className="service-content">
                    <h4>{serviceName}</h4>
                    <p>{description}</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <Link to={`/order/${_id}`}>
                            <button className="btn-grad">Get Service</button>
                        </Link>
                        <h5 className="text-warning">${price}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;