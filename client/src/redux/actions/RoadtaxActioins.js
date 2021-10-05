import * as ActionTypes from '../ActionTypes';

import {LoadRoadtaxService, RoadtaxService} from '../../services/RoadtaxServices';

export const RoadtaxAction = (credentials, token)=> {
    return (dispatch) => {
        dispatch({type: ActionTypes.RESTART_AUTH_RESPONSE});
        dispatch({type: ActionTypes.LOADING});

        RoadtaxService(credentials,token).then((res)=> {

            if(res.hasOwnProperty('success') && res.success === true){
                dispatch({type: ActionTypes.ROADTAX_SUCCESS, res});
                return res;
            }
            else if(res.hasOwnProperty('success') && res.success === false){
                dispatch({type: ActionTypes.ROADTAX_ERROR, res});
            }
        }, error => {
            dispatch({type: ActionTypes.CODE_ERROR, error})
        })
    }
};

export const LoadRoadtaxAction = () => {
    return (dispatch) => {
        dispatch({type: ActionTypes.RESTART_AUTH_RESPONSE});
        dispatch({type: ActionTypes.LOADING});

        LoadRoadtaxService().then((res) => {

            if(res.hasOwnProperty('success') && res.success === true){
                dispatch({type: ActionTypes.LOAD_ROADTAX_SUCCESS, res})
            }
            else if(res.hasOwnProperty('success') && res.success === false){
                dispatch({type: ActionTypes.LOAD_ROADTAX_ERROR, res})
            }
        }, error => {
            dispatch({type: ActionTypes.CODE_ERROR, error})
        })
    }
}