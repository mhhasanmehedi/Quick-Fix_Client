import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';
import firebase from "firebase/app";
import "firebase/auth";


const Dashboard = () => {
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
    return (
        <div className="dashboard">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="d-flex align-items-center justify-content-center vh-100">
                        <div className="shadow text-center p-5 userBox">
                            <img src={loggedInUser.photo || "https://i.ibb.co/5GzXkwq/user.png"} height="100px" width="100px" className="rounded-circle mb-3" alt="" />
                            <h3>{loggedInUser.name}</h3>
                            <h5>{loggedInUser.email}</h5>
                            <button onClick={handleSignOut} className="btn-grad">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;