import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Tilt from '../layouts/animations/Tilt';


const Dashboard = () => {

    const [car,setCar] = useState("car");
    
    return(
        

        <div className="renew">
            <div className="renewContent">
                <Tilt>
                    <div className="card">
                        <div className="cardContent">
                            <h2>01</h2>
                            <h3>Car</h3>
                            <p>Lorem ipsum dolor si amet, consectetur
                                adipicising elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                            </p>
                            <Link to={{
                                        pathname: "/user/renewroadtax",
                                        state: {
                                            type: car
                                        }
                            }}>Renew</Link>
                        </div>
                    </div>
                </Tilt>
                <Tilt>
                    <div className="card">
                        <div className="cardContent">
                            <h2>02</h2>
                            <h3>Motorcycle</h3>
                            <p>Lorem ipsum dolor si amet, consectetur
                                adipicising elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                            </p>
                            <Link to="#">Renew</Link>
                        </div>
                    </div>
                </Tilt>
            </div>
            
        </div>
        
    )
}

export default Dashboard