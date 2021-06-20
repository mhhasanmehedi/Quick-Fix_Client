import React from 'react';
import './PricingTableDetail.css';

const PricingTableDetail = (props) => {
    const { name, price, item1, item2, item3, item4 ,theme} = props.priceTable;
    return (
        <div className="col-md-4">
            <div className={`single-pricing-item ${theme}`}>
                    <h3>{name}</h3>
                    
                    <div className="pricing-price">
                        <p className="pricing-price-text">${price}</p>
                        Per month
                    </div>
                    <div className="pricing-content">
                        <p>{item1}</p>
                        <p>{item2}</p>
                        <p>{item3}</p>
                        <p>{item4}</p>
                    </div>
                    
                    <a href="" className="bordered-btn">Get Started</a>
                </div>
        </div>
    );
};

export default PricingTableDetail;