import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <h1>We Make <span>computers</span><br /> work for you.</h1>
                <p>We provide always oru best services for our clients and always <br /> try to achieve our client's trust and satisfaction.</p>
                <button className="btn-grad mr-3">Read More</button>
                <button className="btn-grad">Register Now</button>
            </div>
        </section>
    );
};

export default Banner;