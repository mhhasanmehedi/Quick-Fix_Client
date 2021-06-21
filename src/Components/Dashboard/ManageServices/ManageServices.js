import React, { useEffect, useState } from 'react';
import ManageServiceCard from './ManageServiceCard';
import loader from '../../../images/loader.gif';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://mighty-chamber-70734.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <div className="row">
                    {
                        services.length > 0 ?
                            services.map(service => <ManageServiceCard service={service} key={service._id} />)
                            :
                            <img height="250px" style={{ marginLeft: '300px' }} src={loader} alt="..." />
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageServices;