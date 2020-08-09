import React, {useState, useEffect} from 'react';
import '../App.css';


function Main(props){
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(props.url)
    .then(response => response.json())
    .then(data =>{
      setState(data)
    })
   },[props.url]);
 console.log('url in main ' + props.url);

  return (
    
    <React.Fragment>
    {state.map(item =>
    <div className="col">
    <img className="img" src={item.links.mission_patch_small} width="180" height="210" />
    <h4>{item.mission_name} #{item.flight_number}</h4>
    <h4>Mission Id: {item.mission_id}</h4>
    <h4>Lauch Year: {item.launch_year}</h4>
    <h4>Launch Success:{item.launch_success}</h4>
    </div>
    )}
   </React.Fragment>
    
  )
}

export default Main;

