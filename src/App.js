import React from 'react';
import logo from './logo.svg';
import './App.css';
import Leftpanel from './components/leftPanel';
import Main from './components/main';
// import GetFinalUrl './config';
import {useState} from 'react';

function App() {
  
var durl = 'https://api.spaceXdata.com/v3/launches?limit=20&';

var [url, setUrl] = useState(durl);


    function getUrl(selectedYear,successfulLaunch,succesfulLanding ){

      var queryParam = '';
      if(selectedYear!=null){
          queryParam+='launch_year='+selectedYear + '&';
      }
       if(successfulLaunch!=null){
          queryParam+='launch_success='+successfulLaunch + '&';
      }
       if(succesfulLanding!=null){
          queryParam+='land_success='+succesfulLanding + '&';
      }
      url = durl  + queryParam;
      setUrl(url);
      console.log('inside getUrl ' + url);
      return url;
   }
  return ( 
    <div className="container">
    <div>
    <h1>SpacEx Launch programs</h1>
    </div>
    <div className="column1"> 
    < Leftpanel  getUrl={getUrl}  />
    </div>
    <div className="column2">
    < Main url={url}/>
    </div>
    </div>
  );
}






export default App;
