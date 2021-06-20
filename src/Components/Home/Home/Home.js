import React from 'react';
import Analysis from '../Analysis/Analysis';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import PriceTable from '../PricingTable/PricingTable';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Team from '../Team/Team';
import './Home.css';
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <main>
            <Header/>
            <Banner/>
            <Analysis/>
            <Service/>
            <PriceTable/>
            <Team/>
            <Review/>
            <Footer/>
        </main>
    );
};

export default Home;