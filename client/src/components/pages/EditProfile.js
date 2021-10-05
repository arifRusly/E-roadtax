import React,{useEffect, useState} from 'react';

import {useParams} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';

import {LoginAction} from '../../redux/actions/AuthActions';

import Image from '../../assests/images/Img2.png';



import {useHistory,Link} from 'react-router-dom'; 
import {LoadProfileAction, UpdateProfileAction} from '../../redux/actions/ProfileActions';



function EditProfile() {

    const history = useHistory();

    const [fields, setState] = useState({
        name: "",
        email: "",
        id: ""
    });

    const handleFieldChange = e => {
        setState({
            ...fields,
            [e.target.id] : e.target.value
        })
    };


    const profileResponse = useSelector(state=> state.userDetails.userProfile);

    const dispatch = useDispatch();

    useEffect((e)=> {
        dispatch(LoadProfileAction())
        
        {
            profileResponse !== "" && profileResponse !== null && profileResponse.success === true ?

            setState({
                name: profileResponse.data.name,
                email: profileResponse.data.email,
                id: profileResponse.data.id
    
            })
        :
        
            setState({
                name: "unable to load data",
                email: "unable to load data",
                id: "unable to load data"

        })
            
        }
        
        return ()=> {};
    }, []);

    const accessToken = localStorage.getItem('user-token');

    const UpdateProfile = (e) => {
        e.preventDefault();
        console.log(fields);

        dispatch(UpdateProfileAction(fields, accessToken, history))
    }


    

    return (
            
        <div>

            <div className="imgBx41">
                <img src={Image} alt="Img"/>
            </div>
            
                 {
                    profileResponse !== "" && profileResponse !== null && profileResponse.success === true ?
                     
                <div className="formUpdateProfileContainer">
                <div className="form">                    
                    <form onSubmit={UpdateProfile}>

                        <h3>Update Profile  </h3>
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
                                id="name"
                                value={fields.email}
                                onChange={handleFieldChange}>
                            </input>
                        </div>

                        <div className="inputBox">
                            <input 
                                type="hidden" 
                                placeholder="Username"
                                required
                                id="id"
                                value={fields.id}
                                onChange={handleFieldChange}>
                            </input>
                        </div>

                        <div className="inputBox">
                            <input 
                                type="submit" 
                                value="Save">
                            </input>
                        </div>
                    </form>
                </div>
                </div>
       
                    :
                        <div>
                            Unable to Display Profile
                        </div>
                } 
                
            
                  
        </div>
        


    )
}

export default EditProfile;
