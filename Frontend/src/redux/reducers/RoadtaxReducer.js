import * as ActionTypes from '../ActionTypes';
const initState = {
    userRoadtax: ""
  };
  
  const RoadtaxReducer = (state = initState, action) => {
    switch (action.type) {
      
      case ActionTypes.LOADING:
        return {
          ...state,
          userRoadtax: "loading...",
        };
  
      case ActionTypes.ROADTAX_SUCCESS:
        return {
          ...state,
          userRoadtax: action.res,
        };
  
      case ActionTypes.ROADTAX_ERROR:
        return {
          ...state,
          userRoadtax: action.res,
        };
     
      case ActionTypes.CODE_ERROR:
        return {
          ...state,
          userRoadtax:
            "There seems to be a problem, please refresh your browser",
        };
  
      default:
        return state;
    }
  };
  
  export default RoadtaxReducer;

  
  