import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../images/logo.jpg';
const Footer = () => {
    const noNamed = [
        {name: "203, Envato Labs, Behind Alis " , link: "/emergency"},
        {name: "Steet, Melbourne, " , link: "/checkup"},
        {name: "Australia.immersion along " , link: "/personal-treatment"},
        {name: "the information close the " , link: "/tooth-extract"},
        {name: "loop on focusing" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const openingHour = [
        {name: "Monday-Tuesday 9:00-17: 00" , link: "/emergency"},        
        {name: "Wednesday 9.00 - 16.00" , link: "/checkup"},        
        {name: "Tuesday-Friday 9:00-16:00" , link: "/personal-treatment"},
        {name: "Saturday 9:00-16:00" , link: "/tooth-extract"},
        {name: "Sunday  Closed" , link: "/checkup"}
    ]
    const services = [
        {name: "Kitchen Remodel" , link: "/kitchenRemodel"},
        {name: "Home Renovation" , link: "/homeRenovation"},
        {name: "Home Repair" , link: "/homeRepair"},
        {name: "Painting" , link: "/painting"},
        {name: "Window & Doors" , link: "/windowDoors"},
        {name: "Bathroom Remodel" , link: "/bathroomRemodel"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}>
                        <a href="#" style={{fontSize: "35px",textTransform:"uppercase",color:"black",textDecoration:'none',fontWeight:'700'}}><img src={logo} width="80px" alt=""/><br/> Quick Fix</a>
                    </FooterCol>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Opening Hour" menuItems={openingHour}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;