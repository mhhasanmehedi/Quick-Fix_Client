import React from 'react';
import PricingTableDetail from '../PricingTableDetail/PricingTableDetail';
import './PricingTable.css';

const pricingTableData = [
    {
        name: 'Basic Services',
        price: 120,
        item1: '2 Computer Repair',
        item2: '1 Laptop Repair',
        item3: '1 Phone Repair',
        item4: 'Free Supports',
        theme: 'theme-1'
    },
    {
        name: 'Premium Services',
        price: 220,
        item1: '4 Computer Repair',
        item2: '2 Laptop Repair',
        item3: '2 Phone Repair',
        item4: 'Free Supports',
        theme: 'theme-2'
    },
    {
        name: 'Standard Services',
        price: 320,
        item1: '7 Computer Repair',
        item2: '3 Laptop Repair',
        item3: '3 Phone Repair',
        item4: 'Free Supports',
        theme: 'theme-3'
    }
]

const PriceTable = () => {
    return (
        <section className="pricingTable container">
            <div className="text-center mt-4 mb-5">
                <h2 className="head-title">Pricing Table</h2>
            </div>
            <div className="row">
                {
                    pricingTableData.map(priceTable => <PricingTableDetail priceTable={priceTable} key={priceTable.name} />)
                }
            </div>
        </section>
    );
};

export default PriceTable;