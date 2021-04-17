import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../images/logo.jpg';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }

    return (
        <div className="text-center mt-5 pt-5">
            <a style={{ textDecoration: 'none', marginBottom: '20px', display: "inline-block", color: 'orange' }} href="#">
                <img src={logo} width="80px" alt="" />
                <h1>Quick Fix</h1>
            </a>
            <div className="login-wrap">
                <div className="login-inner">
                    <h1>Login With</h1>
                    <button onClick={handleGoogleSignIn} className="google-login">
                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon><span>Continue With Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;