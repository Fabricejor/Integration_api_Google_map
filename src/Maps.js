// import React from "react";
import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const containerStyle = {
  width: '800px',
  height: '600px',
};

const center = {
  lat:  14.697247125766047,
  lng: -17.456897199117527
};

function LandingPage() {
  const [map, setMap] = useState(null);

  const onLoad = map => {
    setMap(map);
  };

  const onUnmount = map => {
    setMap(null);
  };

  return (
    <div className="container">
      <h1>Bienvenue sur ma page d'atterrissage</h1>
      <LoadScript googleMapsApiKey="AIzaSyA2yeEQJ7VwWo0sBMIIoFfWta9f36QI3mk">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default LandingPage;
