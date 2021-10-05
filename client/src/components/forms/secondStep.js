import React,{useState, useContext} from "react";
import { Button, TextField, Card } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useStyles } from "../../styles/styles";

import {Link } from "react-router-dom";


import {useDispatch, useSelector} from 'react-redux';
import {RegisterAction} from '../../redux/actions/AuthActions';

import { multiStepContext } from "./StepContext";




function SecondStep() {

    const classes = useStyles();

    const{activeStep, setActiveStep} = useContext(multiStepContext);


    return(
        <div className={"StepperForm"}>
            <div>
                <TextField label = "IC" margin="normal" variant="outlined" color="secondary"></TextField>
            </div>
            
            <div>
                <TextField label = "House" margin="normal" variant="outlined" color="secondary"></TextField>
            </div>
            
            <div>
                <TextField label = "Image" margin="normal" variant="outlined" color="secondary"></TextField>
            </div> 

            <div>
                <Button variant="contained" color="primary" onClick={()=>setActiveStep(activeStep + 1)}>Submit</Button>
            </div>   
        </div>
    )
   
}
  

export default SecondStep;
