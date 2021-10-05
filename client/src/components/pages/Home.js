import React from 'react';
import {Button} from '@material-ui/core';
import { useStyles } from '../../styles/styles';
import {useHistory} from 'react-router-dom'; 

import { Link } from 'react-router-dom';
import '../../App.css';
import Image from '../../assests/images/Img1.png';
import {fb, twitter, instagram} from '../../assests/images/index';


  function Home() {

//   const history = useHistory();  

//   const classes = useStyles();

//   const gotToDashboard = (e, url) => {
//       history.push(url);
//   }


//     return (
//       <>
//        <div className={classes.homeRoot}>
//          <div className={classes.containerDiv}>
//          <Button variant="contained" className={classes.extraBtnStyle} onClick={e => gotToDashboard(e, '/user')} 
//          size="large" color="primary">User Dashboard
//          </Button>  
//        </div>
//        </div>
//     </>       
//     )
const history = useHistory(); 

const goToLogin = (e, url) => {
          history.push(url);
      }
return (
        
    <div className="home"> 
      <div className = "content">
        <h2>Digitalise your life, Save up your time</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu fringilla felis,
           a tincidunt purus. Vestibulum finibus metus hendrerit, rutrum odio sed, placerat
           mauris.
        </p>
        <Button onClick= {  e=> {
                                  var ifLoggedIn = localStorage.getItem("user-token");
                                  
                                  ifLoggedIn? 
                                  goToLogin(e, '/user/dashboard')
                                  :
                                  goToLogin(e, '/user/login')
                                } 
          }>Get Started</Button>
        {/* {<Button className="buttonGoLogin" onClick= {e=> goToLogin(e, '/login')}></Button>} */}
      </div>
      <div className="imgBx">
        <img src={Image} alt="Img" />
      </div>
      <ul className="sci">
        <li><Link to="#"><img src={fb} alt="fb"/></Link></li>
        <li><Link to="#"><img src={twitter} alt="twitter"/></Link></li>
        <li><Link to="#"><img src={instagram} alt="instagram"/></Link></li>
      </ul>
    </div>
  
)
} 

export default Home
