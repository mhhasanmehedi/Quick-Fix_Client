import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = (props) => {
    const { name, description, img, price } = props.service;
    return (
        <div className="col-md-4">
            <div className="single-service-box">
                <div className="service-img">
                    <img width="100%" height="220px" src={img} alt="" />
                </div>
                <div className="service-content">
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <button className="btn btn-success">Get Service</button>
                        <h5 className="text-warning">${price}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;