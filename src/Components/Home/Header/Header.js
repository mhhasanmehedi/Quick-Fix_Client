import React from 'react';
import logo from '../../../images/logo.jpg';
import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <header className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">
                    <img className="mr-2" src={logo} width="50px" alt="" />
                    Quick Fix
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link mr-4" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="#">Dental Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="#">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="#">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-success"><Link to="/login" style={{ textDecoration: 'none', color: '#000' }}>{loggedInUser.name || 'Login'}</Link></button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;