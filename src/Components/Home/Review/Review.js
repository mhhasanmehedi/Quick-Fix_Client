import React from 'react';
import paxton from '../../../images/Paxton.jpg';
import isabella from '../../../images/Isabella..jpg';
import brian from '../../../images/Brian.jpg';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import './Review.css';

const reviewData = [
    {
        name: "Paxton",
        img: paxton,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ipsum earum officia accusantium aspernatur dolore asperior!"
    },
    {
        name: "Isabella.",
        img: isabella,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ipsum earum officia accusantium aspernatur dolore asperior!"
    },
    {
        name: "Brian",
        img: brian,
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ipsum earum officia accusantium aspernatur dolore asperior!"

    }

]

const Review = () => {
    return (
        <section className="container review mb-5 pb-5">
            <div className="text-center">
                <h2 className="text-uppercase">Customer <span className="text-warning">Review</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem <br/> voluptatem obcaecati!</p>
            </div>
            <div className="row">
                {
                    reviewData.map(review => <ReviewDetail review={review} key={review.name}/>)
                }
            </div>
        </section>
    );
};

export default Review;