import * as ActionTypes from '../ActionTypes';

const initState = [{
    roadtaxList: ""}]


    const RoadtaxListReducer = (state = initState, action) => {

        switch(action.type)
        {
            case ActionTypes.LOADING:
                return{
                    ...state,
                    roadtaxList: "loading...",
                };

            case ActionTypes.LOAD_ROADTAX_SUCCESS:
                return {
                    ...state,
                    roadtaxList: action.res,
                };
              
            case ActionTypes.LOAD_ROADTAX_ERROR:
                return {
                    ...state,
                    roadtaxList: action.res,
            };

            case ActionTypes.CODE_ERROR:
                return {
                    ...state,
                    roadtaxList: "There seems to be a problem, please refresh your browser",
            };

            default:
                return state;
            
        }

    };

    export {RoadtaxListReducer};