import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';

const NoMatch = () => {
    return (
        <div className="padding d-flex justify-content-center align-items-center bg-success vh-100">
            <div className="NoMatch-style bg-warning">
                <h1>Oops!</h1>
                <h2>404 - PAGE NOT FOUND</h2>
                <p>The page you are looking for might have been removed <br />
                had its name changed of is temporary unavailable</p>
                <Link to="/">
                    <button>GO TO HOMEPAGE</button>
                </Link>
            </div>
        </div>
    );
};

export default NoMatch;