import React from "react";

import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => {
  return <MapViewDirections 
    origin={origin} 
    destination={{ latitude: destination.latitude, longitude: destination.longitude }}
    onReady = { onReady }
    apikey = 'AIzaSyAMz1rZwha7UV3-FOzksnI6_EZcfCeJVU4'
    strokeWidth={5}
    strokeColor="black"
  />;
};

export default Directions;
