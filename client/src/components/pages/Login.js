import React,{useState} from 'react';
import { Button, TextField, Card } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useStyles} from '../../styles/styles';


import {useDispatch, useSelector} from 'react-redux';

import {LoginAction} from '../../redux/actions/AuthActions';

import Image from '../../assests/images/Img2.png';



import {useHistory,Link} from 'react-router-dom'; 




function Login() {

//   const history = useHistory();
//   //console.log(history);
//   const classes = useStyles();
  
//   const dispatch = useDispatch();

//   //const authResponse = useSelector(state=>state.userAuth.authResponse);


//   const [fields, setState] = useState({
//     email: "",
//     password: "",
//   });


//   const handleFieldChange = e => {
//     setState({
//         ...fields,
//         [e.target.id] : e.target.value
//     })
// }

//     const UserLogin = (e) => {
//         e.preventDefault();
        
//         console.log(fields);
        
//       dispatch(LoginAction(fields, history));
        
//       };
      
      

            
    

      
//     return (
//         <div>
//             <div className={classes.centerItem}>
//         <Card>

//         <h2><b>Welcome to User Login Page</b></h2>

         
//           <form onSubmit={UserLogin}>
//             <div>
//               <TextField
//                 type="email"
//                 className={classes.fullWidth}
//                 required
//                 margin="normal"
//                 variant="outlined"
//                 label="email"
//                 id="email"
//                 value={fields.email}
//                 onChange={handleFieldChange}
//               />
//             </div>

//             <div>
//               <div>
//                 <TextField
//                   className={classes.fullWidth}
//                   label="Password"
//                   type="password"
//                   margin="normal"
//                   variant="outlined"
//                   required
//                   id="password"
//                   value={fields.password}
//                   onChange={handleFieldChange}
//                 />
//               </div>

//               <div>
//                 <Button
//                   type="submit"
//                   className={classes.fullWidth}
//                   variant="contained"
//                   color="primary"
//                   endIcon={<AccountCircleIcon />}
//                 >
//                   <b>Login</b>
//                 </Button>
//                 <br />

//                 <div className={classes.linkContainer}>
//                   <Link to="/user/register">Register Here</Link>
//                 </div>
//               </div>

//               <div className={classes.linkContainer}>
//                 <Link to="/home">Back To Home Page </Link>
//               </div>

//               <div></div>
//             </div>
//           </form>
//         </Card>
//       </div>
//         </div>
//     )


    const dispatch = useDispatch();

    const history = useHistory();
    
    const [fields, setState] = useState({
            email: "",
            password: "",
    });


    const handleFieldChange = e => {
        setState({
            ...fields,
            [e.target.id] : e.target.value
        })
    };

    const UserLogin = (e) => {
        e.preventDefault();

        console.log(fields);

        dispatch(LoginAction(fields,history))
    };

    


    return (
            
        <div className="formContainer">
        <div className="imgBx1">
            <img src={Image} alt="Img"/>
        </div>

            <div className="form">
            
                <h2>Sign In</h2>
                <form onSubmit={UserLogin}>
                
                    <div className="inputBox">
                        <input 
                            type="text" 
                            placeholder="Email"
                            required
                            id="email"
                            value={fields.email}
                            onChange={handleFieldChange}>
                        </input>
                    </div>

                    <div className="inputBox">
                        <input 
                            type="password" 
                            placeholder="Password"
                            required
                            id="password"
                            value={fields.password}
                            onChange={handleFieldChange}>
                        </input>
                    </div>

                    <div className="inputBox">
                        <input 
                            type="submit" 
                            value="Sign In"
                            >
                        </input>
                        
                    </div>
                    <p className="forget"> Forgot Password ? <Link to="#"> Click Here</Link> </p>
                    <p className="forget"> Dont have an account <Link to="/user/register"> Sign Up</Link> </p>
                </form>
                
            </div>
            
        </div>
        


    )
}

export default Login
