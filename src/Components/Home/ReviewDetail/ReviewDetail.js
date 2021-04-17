import React from 'react';
import './ReviewDetail.css';

const ReviewDetail = (props) => {
    const { name, img, description } = props.review;
    return (
        <div className="col-md-4">
            <div className="single-review-box text-center">
                <img src={img} alt="" />
                <h3 style={{marginBottom:"0px"}}>{name}</h3>
                <small className="text-secondary">Client</small>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ReviewDetail;