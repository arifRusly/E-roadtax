import React,{useState} from "react";
import { Button, TextField, Card } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useStyles } from "../../styles/styles";

import {Link, useHistory } from "react-router-dom";



import {useDispatch, useSelector} from 'react-redux';
import {RegisterAction} from '../../redux/actions/AuthActions';

import Image from '../../assests/images/Img4.png';
import Image2 from '../../assests/images/Img3.png';


import Swal from 'sweetalert2';


function Signup() {
//   const classes = useStyles();

//   const dispatch = useDispatch();

//   //const authResponse = useSelector(state=>state.userAuth.authResponse);

  
//   const [fields, setState] = useState({
//     name: "",
//     email: "",
//     password: "",
//     password_confirmation: "",
//   });

//   const handleFieldChange = e => {
//       setState({
//           ...fields,
//           [e.target.id] : e.target.value
//       })
//   }

//   const UserRegister = (e) => {
//     e.preventDefault();
//     console.log(fields);
//     const passwordMatch = checkPasswordMatch(fields.password, fields.password_confirmation);

//     if(passwordMatch === true){
//       alert('passwords dont match. please check your password again');
//       return;
//     }
//     dispatch(RegisterAction(fields));
//   };

  

// const checkPasswordMatch = (password,password_confirmation) => {
//  return  password !== password_confirmation ? true : false; 
// }
//   return (
//     <div>
//       <div className={classes.centerItem}>
//         <Card>
//           <h2>
//             <b>Welcome to Register User Page</b>
//           </h2>

           
//           <form onSubmit={UserRegister}>
//             <div>
//               <TextField
//                 type="text"
//                 className={classes.fullWidth}
//                 required
//                 margin="normal"
//                 variant="outlined"
//                 label="name"
//                 id="name"
//                 value={fields.name}
//                 onChange={handleFieldChange}
//               />
//             </div>

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
//                 <TextField
//                   className={classes.fullWidth}
//                   label="Confirm Password"
//                   type="password"
//                   required
//                   margin="normal"
//                   variant="outlined"
//                   id="password_confirmation"
//                   value={fields.password_confirmation}
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
//                   <b>Register</b>
//                 </Button>
//                 <br />

//                 <div className={classes.linkContainer}>
//                   <Link to="/user/login">Login Here</Link>
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
//     </div>
//   );

    const history = useHistory();
    const dispatch = useDispatch();

    const [fields, setState] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });


    const handleFieldChange = e => {
        setState({
            ...fields,
            [e.target.id] : e.target.value
        })
    };


    const UserRegister = (e) => {
        e.preventDefault();
        console.log(fields);
        const passwordMatch = checkPasswordMatch(fields.password, fields.password_confirmation);
    
        if(passwordMatch === true){
          alert('passwords dont match. please check your password again');
          return;
        }
        //swal("Good job!", "You clicked the button!", "success");
        Toast.fire({
            icon: 'success',
            title: 'Signed up successfully, please login'
          })
        dispatch(RegisterAction(fields, history));
        
        
    };


    const checkPasswordMatch = (password,password_confirmation) => {
        return  password !== password_confirmation ? true : false; 
    };

    //sweetalert

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    


    return(
            
            
        <div className="formContainer2">

            <div className="imgBx2">
                <img src={Image} alt="Img"/>
            </div>

            <div className="imgBx3">
                <img src={Image2} alt="Img"/>
            </div>
            

            <div className="form">
            <h2>Sign Up</h2>

                <form onSubmit={UserRegister}>
                    
                    <div className="inputBox">
                        <input 
                            type="text" 
                            placeholder="Username"
                            required
                            id="name"
                            value={fields.name}
                            onChange={handleFieldChange}>
                        </input>
                    </div>
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
                            type="password" 
                            placeholder="Confirm Password"
                            required
                            id="password_confirmation"
                            value={fields.password_confirmation}
                            onChange={handleFieldChange}>
                        </input>
                    </div>

                    <div className="inputBox">
                        <input 
                            type="submit" 
                            value="Sign Up">
                        </input>
                    </div>
                    
                    <p className="forget"> already have an account? <Link to="/user/login"> Sign In</Link> </p>
                </form>

            </div>

        </div>
        
        

    )
}

export default Signup;
