import React,{useState} from "react";
import { Button, TextField, Card } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useStyles } from "../../styles/styles";

import {Link } from "react-router-dom";


import {useDispatch, useSelector} from 'react-redux';
import {RegisterAction} from '../../redux/actions/AuthActions';




function ThirdStep() {

    const classes = useStyles();


    return(
        <div className={classes.centerItem}>
            <div>
                <TextField label = "Lady" margin="normal" variant="outlined" color="secondary"></TextField>
            </div>
            
            <div>
                <TextField label = "Gaga" margin="normal" variant="outlined" color="secondary"></TextField>
            </div>
            
            <div>
                <TextField label = "Ariana" margin="normal" variant="outlined" color="secondary"></TextField>
            </div> 

            <div>
                <Button variant="contained" color="primary">Submit</Button>
            </div>   
        </div>
    )
   
}
  

export default ThirdStep;
