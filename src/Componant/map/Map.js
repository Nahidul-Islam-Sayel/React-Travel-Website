import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};
const id=1;
const center = {
  lat: 21.433920,
  lng: 91.987030
  };

function Map(props) {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDmpKfyvWp7TnxiQBKRq4W9xIQpq26_CnY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)