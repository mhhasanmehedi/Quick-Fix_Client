import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faPlus, faShoppingBag, faShoppingCart, faSignOutAlt, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/auth";


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        firebase.auth()
            .signOut()
            .then(res => {
                const signInUser = {
                    isSignIn: false,
                    name: '',
                    email: '',
                    photo: ''
                }
                setLoggedInUser(signInUser)
            })
            .catch(err => {
                console.log(err);
            });
    }

    const [isAdmin, setIsAdmin] = useState(false);

    
    useEffect(() => {
        fetch('https://mighty-chamber-70734.herokuapp.com/isAdmin', {
            method: "POST",
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser])


    return (
        <>
            <div className="sidebar-style text-center">
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                    <div className="border-bottom ml-2 mr-2 ">
                        <img src={logo} height="80px" alt="" />
                        <h2>Quick Fix</h2>
                    </div>
                </Link>
                {
                    !isAdmin ?
                        <>

                            <Link to="/order/:id" style={{ color: "white", textDecoration: "none" }}>
                                <div className="link">
                                    <FontAwesomeIcon icon={faCommentDots} />
                                    <h5>Order</h5>
                                </div>
                            </Link>
                            <Link to="/addReview" style={{ color: "white", textDecoration: "none" }}>
                                <div className="link">
                                    <FontAwesomeIcon icon={faShoppingBag} />
                                    <h5>Review</h5>
                                </div>
                            </Link>
                            <Link to="/userOrder" style={{ color: "white", textDecoration: "none" }}>
                                <div className="link">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    <h5>Order List</h5>
                                </div>
                            </Link>
                        </>
                        :
                        <>
                            <Link to="/addServices" style={{ color: "white", textDecoration: "none" }}>
                                <div className="link">
                                    <FontAwesomeIcon icon={faPlus} />
                                    <h5>Add Services</h5>
                                </div>
                            </Link>
                            <Link to="/addAdmin" style={{ color: "white", textDecoration: "none" }}>
                                <div className="link">
                                    <FontAwesomeIcon icon={faUserPlus} />
                                    <h5>Add Admin</h5>
                                </div>
                            </Link>
                            <Link to="/allOrders" style={{ color: "white", textDecoration: "none" }}>
                                <div className="link">
                                    <FontAwesomeIcon icon={faShoppingBag} />
                                    <h5>Order List</h5>
                                </div>
                            </Link>
                            <Link to="/manageServices" style={{ color: "white", textDecoration: "none" }}>
                                <div className="link">
                                    <FontAwesomeIcon icon={faThLarge} />
                                    <h5>Manage Services</h5>
                                </div>
                            </Link>
                        </>
                }



                <Link to="/" onClick={handleSignOut} style={{ color: "white", textDecoration: "none",position:'absolute',bottom:'0px',left:'0px',right:'0px' }}>
                    <div className="link">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <h5>Sign Out</h5>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default Sidebar;