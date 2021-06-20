import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddAdmin from "./Components/Dashboard/AddAdmin/AddAdmin";
import AddReview from "./Components/Dashboard/AddReview/AddReview";
import AddServices from "./Components/Dashboard/AddServices/AddServices";
import AllOrders from "./Components/Dashboard/AllOrders/AllOrders";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import ManageServices from "./Components/Dashboard/ManageServices/ManageServices";
import Order from "./Components/Dashboard/Order/Order";
import UserOrder from "./Components/Dashboard/UserOrder/UserOrder";
import Home from './Components/Home/Home/Home';
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import NoMatch from "./Components/NoMatch/NoMatch";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: ''
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addServices">
            <AddServices />
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin />
          </PrivateRoute>
          <PrivateRoute path="/order/:id">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/userOrder">
            <UserOrder />
          </PrivateRoute>
          <PrivateRoute path="/allOrders">
            <AllOrders/>
          </PrivateRoute>
          <PrivateRoute path="/manageServices">
            <ManageServices/>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
