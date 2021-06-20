import React from 'react';
import './ReviewDetail.css';

const ReviewDetail = (props) => {
    const { name, review,company,photo } = props.review;
    return (
        <div className="col-md-4">
            <div className="single-review-box text-center">
                <img src={photo || "https://i.ibb.co/5GzXkwq/user.png"} alt="" />
                <h4 style={{marginBottom:"0px"}}>{name}</h4>
                <small className="text-secondary">{company}</small>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default ReviewDetail;