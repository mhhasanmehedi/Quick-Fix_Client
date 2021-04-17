import React from 'react';
import Analysis from '../Analysis/Analysis';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PriceTable from '../PricingTable/PricingTable';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Team from '../Team/Team';
import './Home.css';

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
            <Contact/>
            <Footer/>
        </main>
    );
};

export default Home;