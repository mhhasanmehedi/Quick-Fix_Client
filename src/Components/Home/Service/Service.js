import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Service.css';
import loader from '../../../images/loader.gif'


const Service = () => {
    const [services, setServices] = useState([])
  
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <section className="service container">
            <div className="text-center mt-5 mb-5">
                <h2 className="head-title">Our Services</h2>
            </div>
            <div className="row">
                {
                    services.length > 0 ?
                    services.map(service => <ServiceDetail service={service} key={service.name} />)
                    :
                    <img src={loader} style={{margin:'auto',height:'200px'}} alt="" />
                }
            </div>
        </section>
    );
};

export default Service;