import React from 'react';
const APIEndPoint = 'https://api.spaceXdata.com/v3/launches';

function GetFinalUrl(queryParam){
    if(!queryParam){
        return APIEndPoint + '?limit=20';
    }
    else {
       return APIEndPoint +  queryParam;
    }

}

export default GetFinalUrls;