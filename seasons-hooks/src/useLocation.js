import {useState, useEffect} from 'react';

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(()=>{
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //to update, change or manipulate the state object, we should use 'setState'
        setLat(position.coords.latitude);
      },
      err => {
        setErrorMessage( err.message);
      }
    );
  },[]);

  //can also returned using object: return {lat: lat, errorMessage: errorMessage};
  return [lat, errorMessage];
};
