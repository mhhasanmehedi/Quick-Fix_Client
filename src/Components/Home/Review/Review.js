import React, { useEffect, useState } from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import './Review.css';
import loader from '../../../images/loader.gif';


const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://mighty-chamber-70734.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="container mb-5 pb-5">
            <h2 className="head-title">Customer Review</h2>
            <div className="row">
                {
                    reviews.length > 0 ?
                        reviews.map(review => <ReviewDetail review={review} key={review.name} />)
                        :
                        <img src={loader} style={{ margin: 'auto', height: '200px' }} alt="" />
                }
            </div>
        </section>
    );
};

export default Review;