
import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Payment from "./Payment";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./checkout";
import Login from "./Login";
import Order from "./Order";
import Orders from "./orders";
import { auth } from "./firebase";
import { useStateValue } from "./stateprovider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51IOlddIejuKxOG4OiOtlGLsG2QziGc5TPplMaSEIw9OH7JYlGZWSkcjqMP9Uvnu2DrLX9uH2DhLxsthfaHu8QorJ00UOKtxBjY");

function App() {

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
  
    auth.onAuthStateChanged(authUser => {
        console.log('The User is >>>', authUser);
        if(authUser)
        {
            dispatch({
              type: 'SET_USER',
              user: authUser
            })
        }
        else{
            dispatch({
              type: 'SET_USER',
              user: null
            })
        }
    })
    
  }, [])

  return (

    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
           <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          
          <Login />
        </Route>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/payment">
         <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
         
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
        
        
      </Switch>
      
      

    </div>
    </Router>
  );
}

export default App;
