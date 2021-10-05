import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from "./ProfileReducer";
import RoadtaxReducer from './RoadtaxReducer';
import { RoadtaxListReducer } from './RoadtaxListReducer';

const RootReducer = combineReducers({
   userAuth: AuthReducer,
   userDetails: ProfileReducer,
   roadtaxDetails: RoadtaxReducer,
   roadtaxListDetails: RoadtaxListReducer
  
});


export default RootReducer;