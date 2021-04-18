import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between bg-warning py-5 px-4" style={{ height: '98vh' }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <span>Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white">
                         <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white">
                        <span>Review</span>
                    </Link>
                </li>

            </ul>
        </div >
    );
};

export default Sidebar;