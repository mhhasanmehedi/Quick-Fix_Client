import React from 'react';
import './PricingTableDetail.css';

const PricingTableDetail = (props) => {
    const { name, price, item1, item2, item3, item4 ,color} = props.priceTable;
    return (
        <div className="col-md-4">
            <div className="single-pricing-box">
                <h2 className={`bg-${color} text-center pt-5 pb-5`}>{name}</h2>
                <p className="border-bottom text-center">{item1}</p>
                <p className="border-bottom text-center">{item2}</p>
                <p className="border-bottom text-center">{item3}</p>
                <p className="border-bottom text-center">{item4}</p>
                <h2 className={`price text-${color}`}>${price}</h2>
            </div>
        </div>
    );
};

export default PricingTableDetail;