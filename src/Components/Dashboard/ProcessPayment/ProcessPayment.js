import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';
const stripePromise = loadStripe('pk_test_51IeDYUIVTEtdG6zBedSor5BygNeBt1xWtBePtPuSSbtcOUjNAHKy9HxpyAjDHLQkNpwFmAKNzkG5QJDemJ9nmLnq005AVhIaPP');

const ProcessPayment = ({handleOrder}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handleOrder={handleOrder} />
        </Elements>
    );
};

export default ProcessPayment;