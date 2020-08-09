import React, {useState, useEffect} from 'react';




function Leftpanel(props) {
    
    const [stateparams, setStateparams] = useState({
        selectedYear:'', selectedLaunch:'',selectedLand:''
    });

    useEffect(() => {
         console.log(' stateobj   '+  JSON.stringify(stateparams)) ;
        props.getUrl(stateparams.selectedYear, stateparams.selectedLaunch, stateparams.selectedLand );
   },[stateparams.selectedYear, stateparams.selectedLaunch, stateparams.selectedLand])

    

    

     const handleYearClick = event => {
          console.log('selectedYear *   '+event.target.innerText );
          var stateCopy = Object.assign({},stateparams);
          stateCopy.selectedYear = event.target.innerText;
          console.log('stateCopy' + JSON.stringify(stateCopy));
          setStateparams(stateCopy);
        
         
     }

     

     const handleLaunchClick = event =>{
          console.log('selectedLaunch *   '+event.target.innerText);
          var stateCopy = Object.assign({},stateparams);
          stateCopy.selectedLaunch = event.target.innerText;
          setStateparams(stateCopy);
       
     }

     const handleLandingClick = event =>{
          console.log('selectedLand *   '+event.target.innerText);
          var stateCopy = Object.assign({},stateparams);
          stateCopy.selectedLand = event.target.innerText;
          setStateparams(stateCopy);
     }
    
  

    return(
        <React.Fragment>
        <h4 className="filter">Filters</h4>
        <p>Launch Year</p>
        <hr />
        {
            [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020].map(year => <button className={stateparams.selectedYear == year ? "bttn selected": "bttn"} onClick={handleYearClick}>{year}</button>)
        }
        <h4>Successful Launch</h4>
        <hr />
        {
            ['true', 'false'].map(value => <button onClick={handleLaunchClick}  className={stateparams.selectedLaunch == value ? "val1 selected": "val1"} >{value}</button>)
        }
        <h4>Successful Landing</h4>
        {
            ['true', 'false'].map(value => <button onClick={handleLandingClick} className={stateparams.selectedLand == value ? "val2 selected": "val2"} >{value}</button>)
        }
       
        </React.Fragment>
    )
}

export default Leftpanel;