import React from 'react';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { Container, Image, Nav, Navbar, OverlayTrigger, Popover } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name,email,photo,isSignIn} = loggedInUser;

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
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <div className="logo">
                        <img src={logo} height="50px" alt="" /><span>Quick Fix</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/home" className="ml-4">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="ml-4">About</Nav.Link>
                        <Nav.Link as={Link} to="/service" className="ml-4">Service</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard" className="ml-4">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/admin" className="ml-4">Contact</Nav.Link>
                        {
                            isSignIn ?
                                <OverlayTrigger
                                    trigger="click"
                                    key="bottom"
                                    placement="bottom"
                                    overlay={
                                        <Popover id="popover-positioned-bottom">
                                            <div className="d-flex justify-content-center mt-1">
                                                <Image style={{ maxWidth: "60px" }} src={photo || "https://i.ibb.co/5GzXkwq/user.png"} roundedCircle />
                                            </div>
                                            <Popover.Content>
                                                <h5 className="text-center m-2 mb-2" style={{ lineHeight: '0px', padding: '7px' }}>{name}</h5>
                                                <strong className="text-center">{email}</strong>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <Link to="/home" style={{ width: '100%' }}>
                                                        <button onClick={handleSignOut} className="btn-grad w-100 mt-4">Logout</button>
                                                    </Link>
                                                </div>
                                            </Popover.Content>
                                        </Popover>
                                    }
                                >
                                    <Nav.Link style={{ fontWeight: "700", color: "black" }} className="ml-4">
                                        <img height="40px" style={{ borderRadius: "50%" }} src={photo || "https://i.ibb.co/5GzXkwq/user.png"} alt="" />
                                    </Nav.Link>
                                </OverlayTrigger>
                                :
                                <Nav.Link as={Link} to="/login" className="btn-grad ml-4 text-white pl-3 pr-3 border">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;