import React,{useState,useEffect} from 'react';
import {Button, TextField,Card} from '@material-ui/core';
//import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {useStyles} from '../../styles/styles';
import {useDispatch, useSelector} from 'react-redux';
import {LoadProfileAction} from '../../redux/actions/ProfileActions';
import {RoadtaxAction, LoadRoadtaxAction} from '../../redux/actions/RoadtaxActions';
import * as ActionTypes from '../../redux/ActionTypes';
import {Link } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';

export default function ProfileView() {

  
  const profileResponse = useSelector((state)=>{
    return(
            state.userDetails.userProfile
            
    )
  });
  const roadtaxListResponse = useSelector(state=>state.roadtaxListDetails.roadtaxList);


  //const profileResponse = useSelector(state => { return state[ActionTypes.LOAD_PROFILE_SUCCESS]})
  //const roadtaxListResponse = useSelector((state) => { return state[ActionTypes.LOAD_ROADTAX_SUCCESS]});



  const classes = useStyles();

  const dispatch = useDispatch();

  

  
  useEffect(() => {
    dispatch(LoadProfileAction())
    dispatch(LoadRoadtaxAction())
    
  return () => {
  };
  }, [])



      // let viewPopulate = useSelector((state)=> {
      //  return state.roadtaxDetails.userRoadtax;
      // });
    

/////////////////edit here/////////////////////////////
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
    }

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
    }
///////////////////////////////////////////////
  return (
    <div>
        <div className={classes.fullWidthProfile}>
            <Card>
                {
                    profileResponse !== "" && profileResponse !== null && profileResponse.success === true ?

                    <div>
                    <h3><b>Name: {profileResponse.data.name}</b></h3>
                    <h3><b>email: {profileResponse.data.email}</b></h3>
                    <h3><b>Creation Date: {profileResponse.data.created_at}</b></h3>
                    
                </div>
                :
                <div>Unable to display profile</div>

                }
                
            </Card>
        </div>
        <div className= {classes.fullWidthProfile}>          
            
              {
                roadtaxListResponse.data?roadtaxListResponse.data.map(data => {
                  return(
                    <Card>
                      <div key = {data.id}>
                        <h3>NAME: {data.fullname}</h3>
                        <h3>IC NUMBER: {data.nric}</h3>
                        <h3>PLAT NUMBER: {data.platnumber}</h3>
                        <h3>POSTAL CODE: {data.postalcode}</h3>
                        <h3>PHONE NUMBER: {data.phone}</h3>
                      </div>
                    </Card>
                  )
                  
                })
                :
                <div><h3>Error Load the data</h3></div>
                
              }
              
            
          

        </div>

    
        <div className={classes.centerItem}>
          <Card>
            <h2>
              <b>RENEW ROADTAX</b>
            </h2>

            
            <form onSubmit={roadtax}>
              <div>
                <TextField
                  type="text"
                  className={classes.fullWidth}
                  required
                  margin="normal"
                  variant="outlined"
                  label="fullname"
                  id="fullname"
                  value={fields.fullname}
                  onChange={handleFieldChange}
                />
              </div>

              <div>
                <TextField
                  type="text"
                  className={classes.fullWidth}
                  required
                  margin="normal"
                  variant="outlined"
                  label="nric"
                  id="nric"
                  value={fields.nric}
                  onChange={handleFieldChange}
                />
              </div>

              <div>
                <div>
                  <TextField
                    className={classes.fullWidth}
                    label="platnumber"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    required
                    id="platnumber"
                    value={fields.platnumber}
                    onChange={handleFieldChange}
                  />
                </div>

                <div>
                  <TextField
                    className={classes.fullWidth}
                    label="postalcode"
                    type="text"
                    required
                    margin="normal"
                    variant="outlined"
                    id="postalcode"
                    value={fields.postalcode}
                    onChange={handleFieldChange}
                  />
                </div>

                <div>
                  <TextField
                    className={classes.fullWidth}
                    label="phone"
                    type="text"
                    required
                    margin="normal"
                    variant="outlined"
                    id="phone"
                    value={fields.phone}
                    onChange={handleFieldChange}
                  />
                </div>

                <div>
                  <TextField
                    className={classes.fullWidth}
                    label="grant"
                    type="text"
                    required
                    margin="normal"
                    variant="outlined"
                    id="grant"
                    value={fields.grant}
                    onChange={handleFieldChange}
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    className={classes.fullWidth}
                    variant="contained"
                    color="primary"
                    //endIcon={<AccountCircleIcon />}
                  >
                    <b>SUBMIT</b>
                  </Button>
                  <br />

                  
                </div>

                <div className={classes.linkContainer}>
                  <Link to="/home">Back To Home Page </Link>
                </div>

                <div></div>
              </div>
            </form>
          </Card>
        </div>

        
        
  </div>
  );
}
