import React,{useContext, useState} from "react";
import { Button, TextField, Card, Stepper,StepLabel,Step, StepButton, Typography, Box } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useStyles } from "../../styles/styles";

import {Link } from "react-router-dom";


import {useDispatch, useSelector} from 'react-redux';
import {RegisterAction} from '../../redux/actions/AuthActions';

import FirstStep from "../forms/firstStep";
import SecondStep from "../forms/secondStep";
import ThirdStep from "../forms/thirdStep";
import FourthStep from "../forms/fourthStep";

import {multiStepContext} from '../forms/StepContext';




function RenewRoadtax(props) {



    const classes = useStyles();

    //export state here
    const {activeStep, setActiveStep, finalData, steps, completed, setCompleted} = useContext(multiStepContext)

        function showStep(step){
            switch(step){
                case 1 :
                    return <FirstStep />
                
                case 2 :
                    return <SecondStep />

                case 3 :
                    return <ThirdStep />

                case 4 :
                    return <FourthStep />

            }
        };

        const handleStep = (step) => () => {
            setActiveStep(step);
        };


        const allStepsCompleted = () => {
            return completedSteps() === totalSteps();
        };


        const completedSteps = () => {
             return Object.keys(completed).length;
        };


        const totalSteps = () => {
            return steps.length;
        };


        const handleReset = () => {
            setActiveStep(0);
            setCompleted({});
        };


        const handleBack = () => {
            setActiveStep((prevActiveStep)=> prevActiveStep - 1)
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


        const handleComplete = () => {
            const newCompleted = completed;

            newCompleted[activeStep] = true;
            setCompleted(newCompleted);
            handleNext();
        };


    return(
        <div>

            
            <div>
                <Stepper 
                    
                    style={{
                        position: "absolute",
                        height: '50%', 
                        background:"none", 
                        alignItems: "center",
                        left: "100px",
                        top: "150px",
                         }} 
                    activeStep={activeStep} 
                    orientation="vertical">

                    {steps.map((label, index)=>(
                        <Step key={label} completed={completed[index]}>
                            <StepButton color="inherit" onClick={handleStep(index)}>
                                {label}
                            </StepButton>
                        </Step>
                        
                    ))} 
                </Stepper>
                <div>
                {allStepsCompleted() ? (
                    <React.Fragment>
                        <Typography sx={{mt: 2, mb: 1}}>
                            All Steps completed - you&apos;re finished
                        </Typography>

                        <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                            <Box sx={{ flex: '1 1 auto'}} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ):(
                    <React.Fragment >
                        <Typography sx={{mt: 2, mb: 1}}>
                            {showStep(activeStep + 1)}
                        </Typography>

                        {/* <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}> */}
                            {/* <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{mr: 1}}>
                                Back
                            </Button> */}

                            {/* <Box sx={{flex: '1 1 auto'}}></Box> */}

                            {/* <Button onClick={handleNext} sx={{mr : 1}}>
                                Next
                            </Button> */}

                            {/* {activeStep !== steps.length && (completed[activeStep] ?(
                                <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                    Step {activeStep + 1} already completed
                                </Typography>
                            ):(
                                <Button onClick= {handleComplete}>
                                    {completedSteps() === totalSteps() - 1 ?
                                        'Finish'
                                    :
                                        'Complete Step'}
                                </Button>
                            ))} */}
                        {/* </Box> */}
                    </React.Fragment>
                )}
                </div>
                
            </div>
            
        </div>
    )
   
}
  
export default RenewRoadtax;
