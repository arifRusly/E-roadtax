import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import './App.css';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

import Home from "./components/pages/Home";
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';


import PrivateRoute from './PrivateRoute';
import {Guard} from './Guard';
import Dashboard from './components/pages/Dashboard';


function Routes(){

    
    return (
        <>
        <div className="section">
            <div className="container">
                <Header/>
                <Switch>
                    <Route exact path="/" render={props => (
                        <Redirect to={{ pathname: '/home' }} />
                    )}/>
                    
                    <Route 
                        path="/home" 
                        component={Home}
                        >
                    </Route>
                    <Route path="/user/login" >
                            <div className="square1"></div>
                            <div className="square2"></div>
                            <div className="square3"></div>
                            <div className="square4"></div>
                            <div className="square5"></div>
                            <div className="square6"></div>
                            <div className="square7"></div>
                        <Login />
                    </Route>
                    <Route path="/user/register">
                            <div className="square1"></div>
                            <div className="square4"></div>
                            <div className="square5"></div>
                            <div className="square6"></div>
                            <div className="square7"></div>
                        <Signup />
                    </Route>     



                    {/*Redirect if not authenticated */} 

                    <Guard path="/user" token="user-token" routeRedirect="/user/login" component={PrivateRoute}/>          
                </Switch>
                <Footer />
            </div>
        </div>
        </>
        
    );
}


export default Routes;