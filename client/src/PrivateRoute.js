import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import Dashboard from './components/pages/Dashboard';
import RenewRoadtax from './components/pages/Renewroadtax';
import StepContext from './components/forms/StepContext';
import Profile from './components/pages/Profile';
import EditProfile from './components/pages/EditProfile';

export default function UserPrivateRoute(props) {
  return (
    <div>
      {/*<Header/>*/}
       <Switch>
          <Route exact path={`${props.match.path}/dashboard`} component={Dashboard}/>
          <Route exact path={props.match.path} render={props=> (
            <Redirect to={{ pathname: `${props.match.path}/dashboard` }} />
          )} />

        
         <Route path={`${props.match.path}/renewRoadtax`}>
             
             <StepContext />
        </Route>

        <Route path={`${props.match.path}/profile`}>
             
             <Profile />
        </Route>

        <Route path={`${props.match.path}/editprofile`}>
             
             <EditProfile />
        </Route>
        
       </Switch>
    </div>
  );
}
