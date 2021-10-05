import HttpService from './HttpService';

export const RoadtaxService = (credentials, token)=> {
    const http = new HttpService();
    let roadtaxUrl = "users/roadtax";

    return http.postDataAuthenticated(credentials, roadtaxUrl, token).then((data)=>{
        console.log(data);
        return data;
    }).catch((error) => {
        return error;
    })
}

export const LoadRoadtaxService = () => {
    const http = new HttpService();
    let loadRoadtaxUrl = "users/view-roadtax";
    const tokenId = "user-token";

    return http.getData(loadRoadtaxUrl, tokenId).then(data => {
        console.log(data);
        return data;
    }).catch((error)=> {
        console.log(error);
        return error;
    })
}