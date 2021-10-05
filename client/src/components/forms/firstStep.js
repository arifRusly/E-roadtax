import React,{useState, useContext,useEffect} from "react";
import { Button, TextField, Card, Typography } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useStyles } from "../../styles/styles";

import { multiStepContext } from "./StepContext";

import {Link } from "react-router-dom";


import {useDispatch, useSelector} from 'react-redux';
import {RegisterAction} from '../../redux/actions/AuthActions';

import {RoadtaxAction} from '../../redux/actions/RoadtaxActioins'




function FirstStep() {

    const dispatch = useDispatch();


    const [fields, setState] = useState({
        fullname: "",
        nric: "",
        platnumber: "",
        postalcode: "",
        phone: "",
        grant: "",
      });

    
    const handleFieldChange = e => {
    setState({
        ...fields,
        [e.target.id] : e.target.value
    })
    };


    const roadtax = async (e) => {
        e.preventDefault();
  
        const accessToken = localStorage.getItem('user-token');
        //console.log(fields);
  
        //const response = await fetch('http://localhost:8000/api/users/roadtax', {
        //  method: 'POST',
        //  headers: {
        //    'Content-Type': 'application/json',
        //    Authorization: `Bearer ${accessToken}`,
        //    Accept: 'application/json'
        //  },
        //  body: JSON.stringify(fields)
        //}).then(response=>response.json())
  
        //here
        dispatch(RoadtaxAction(fields,accessToken));
        handleComplete();
      };



    const{steps, completed, setCompleted, activeStep, setActiveStep} = useContext(multiStepContext);

    const handleComplete = () => {
        const newCompleted = completed;

        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted() ?
                steps.findIndex((step, i)=> !(i in completed))
            :
            activeStep + 1;

        setActiveStep(newActiveStep)
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const totalSteps = () => {
        return steps.length;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
   };


    return(
        <div className={"StepperForm"}>
            <div className="form">
                
                <form onSubmit={roadtax}>
                    <div className="inputBox">
                        <input 
                            type="text" 
                            placeholder="Full Name" 
                            required
                            id="fullname"
                            value={fields.fullname}
                            onChange={handleFieldChange}></input>
                    </div>

                    <div className="inputBox">
                        <input 
                            type="text" 
                            placeholder="IC Number" 
                            required
                            id="nric"
                            value={fields.nric}
                            onChange={handleFieldChange}></input>
                    </div>

                    <div className="inputBox">
                        <input 
                            type="text" 
                            placeholder="Plat Number" 
                            required
                            id="platnumber"
                            value={fields.platnumber}
                            onChange={handleFieldChange}></input>
                    </div>

                    <div className="inputBox">
                        <input 
                            type="text" 
                            placeholder="Postal Code" 
                            required
                            id="postalcode"
                            value={fields.postalcode}
                            onChange={handleFieldChange}></input>
                    </div>

                    <div className="inputBox">
                        <input 
                            type="text" 
                            placeholder="Phone Number" 
                            required
                            id="phone"
                            value={fields.phone}
                            onChange={handleFieldChange}></input>
                    </div>

                    <div className="inputBox">
                        <input 
                            type="text" 
                            placeholder="Vehicle Grant Picture" 
                            required
                            id="grant"
                            value={fields.grant}
                            onChange={handleFieldChange}></input>
                    </div>
                    
                    

                    <div className ="inputBox">
                        {activeStep !== steps.length &&
                            completed[activeStep] ? (
                                <h4 variant="caption" sx={{ display: 'inline-block' }}>
                                    Step { activeStep + 1} already completed
                                </h4>
                            ):(
                                <input 
                                    type="submit"
                                    value="Submit" 
                                    >
                                </input>
                            )}
                        
                    </div>
                </form>
            </div>
             
        </div>
    )
   
}
  

export default FirstStep;
