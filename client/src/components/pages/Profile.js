import React,{useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux';

import {LoginAction} from '../../redux/actions/AuthActions';

import Image from '../../assests/images/Img2.png';

import {useHistory,Link} from 'react-router-dom'; 
import {LoadProfileAction} from '../../redux/actions/ProfileActions';
import {LoadRoadtaxAction} from '../../redux/actions/RoadtaxActioins';

import {FaPlus} from 'react-icons/fa'


function Profile() {

    const profileResponse = useSelector(state=> state.userDetails.userProfile);
    const roadtaxListResponse = useSelector(state=> state.roadtaxListDetails.roadtaxList);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(LoadProfileAction())
        dispatch(LoadRoadtaxAction())

        return ()=> {};
    }, [])

    return (
        <>    
            <div className="profileContainer">

                <div className="imgBx4">
                    <img src={Image} alt="Img"/>
                </div>
                
                    {
                        profileResponse !== "" && profileResponse !== null && profileResponse.success === true ?
                            <div className="profileName">
                                <h1>{profileResponse.data.name}</h1>
                                
                                <h4>{profileResponse.data.email}</h4>

                                <div className="pn">
                                <Link to="/user/editprofile" className="login">Edit Profile</Link>
                                </div> 
                            </div>
                        :
                            <div>
                                
                            </div>
                    }
                    
            </div>
            <div className="profileContainer2">
                <div>
                    <h2>My Application</h2>
                </div>

                {roadtaxListResponse.data?roadtaxListResponse.data.map(data => {
                    return (

                        <div className="cardContainer">
                            <div key={data.id}>
                                <div>
                                    <h4 className="fullname">{data.fullname}</h4>
                                </div>

                                <div>
                                    <h3 className="phone">{data.phone}</h3>
                                </div>

                                <div>
                                    <h3 className="platnumber">{data.platnumber}</h3>
                                </div>
                            
                                <div>
                                    <h3 className="postalcode">{data.postalcode}</h3>
                                </div>

                                <div>
                                    <h3 className="nric">{data.nric}</h3>
                                </div>
                            
                                <div>
                                    <h4 className="id">ID: {data.id}</h4>
                                </div>
                            
                            
                            </div>
                        </div>
                    )
                    })
                :
                    <div>
                        <h3>Loading...</h3>
                    </div>
                }

                
 
            </div>

            <Link to="/user/dashboard" className="newApplicationButton">
                
                    <FaPlus style={{width:"30px", height:"30px"}}/>
                

            </Link>
            
        </>
    )
}

export default Profile;
