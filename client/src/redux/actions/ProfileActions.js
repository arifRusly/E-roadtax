
import {LoadProfile, UpdateProfileService} from '../../services/ProfileServices';
import * as ActionTypes from '../ActionTypes';


export const LoadProfileAction = () => {
    return (dispatch) => {
        
        dispatch({type: ActionTypes.LOADING});

        LoadProfile().then((res) => {
             
            if(res.hasOwnProperty('success') && res.success === true){
                
                dispatch({type: ActionTypes.LOAD_PROFILE_SUCCESS,res});
            }else if(res.hasOwnProperty('success') && res.success === false){
                dispatch({type: ActionTypes.LOAD_PROFILE_ERROR,res});
            }
            
        }, error => {
            dispatch({type : ActionTypes.CODE_ERROR, error})
        })
    }
};

export const UpdateProfileAction = (credentials, token, history) => {
    return(dispatch) => {

        dispatch({type: ActionTypes.RESTART_AUTH_RESPONSE});
        dispatch({type: ActionTypes.LOADING});

        UpdateProfileService(credentials, token).then((res) => {

            if(res.hasOwnProperty('success') && res.success === true){
                dispatch({type: ActionTypes.UPDATE_PROFILE_SUCCESS, res});
                return res;
                
            }
            else if(res.hasOwnProperty('success') && res.success === false){
                dispatch({type: ActionTypes.UPDATE_PROFILE_ERROR, res});

            }
        }, error => {
            dispatch({type: ActionTypes.CODE_ERROR, error})
        })
    }
};
