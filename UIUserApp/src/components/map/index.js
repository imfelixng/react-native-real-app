import React from "react";
import { View, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import Search from "../search";
import Directions from "../directions";

import { getPixelSize } from "../../utils";

import {
  LocationBox, LocationText,
  LocationTimeBox, LocationTimeText, LocationTimeTextSmall,
  Back
} from './styles';

import Geocoder from 'react-native-geocoding';
import Details from "../Details";

Geocoder.init("AIzaSyAMz1rZwha7UV3-FOzksnI6_EZcfCeJVU4");



const Map = () => {
  const [region, setRegion] = React.useState({
    latitude: 16.047079,
    longitude: 108.20623,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121
  });

  const [destination, setDestination] = React.useState(null);

  const [duration, setDuration] = React.useState(0);

  const [location, setLocation] = React.useState('');


  const refMapView = React.useRef();

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        const response = await Geocoder.from({ latitude, longitude });
        console.log(response)
        const address = response.results[0].formatted_address;
        setRegion({
          ...region,
          latitude,
          longitude,
        });

        setLocation(address);
      },
      error => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  const handleLocationSeleted = (data, { geometry }) => {
    const {
      location: { lat: latitude, lng: longitude }
    } = geometry;

    setDestination({
      latitude,
      longitude,
      title: data.structured_formatting.main_text
    });
  };

  const handleOnReady = result => {
    setDuration(Math.floor(result.duration));
    refMapView.current.fitToCoordinates(result.coordinates, {
      edgePadding: {
        right: getPixelSize(50),
        bottom: getPixelSize(50),
        left: getPixelSize(50),
        top: getPixelSize(50)
      }
    });
  };

  const handleback = () => {
    setDestination(null);
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        region={region}
        showsUserLocation
        loadingEnabled
        ref={refMapView}
      >
        {destination && (
          <>
            <Directions
              destination={destination}
              origin={region}
              onReady={handleOnReady}
            />
            <Marker 
              coordinate={destination}
              anchor = {{ x: 0, y: 0 }}
              image = { require('../../assets/marker.png') }
            >
              <LocationBox>
                <LocationText
                  numberOfLines = {1}
                >{destination.title}</LocationText>
              </LocationBox>
            </Marker>
            <Marker 
              coordinate={region}
              anchor = {{ x: 0, y: 0 }}
            >
              <LocationBox>
                <LocationTimeBox>
                  <LocationTimeText>{duration}</LocationTimeText>
                  <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                </LocationTimeBox>
                <LocationText
                  numberOfLines = {1}
                >{location}</LocationText>
              </LocationBox>
            </Marker>
          </>
        )}
      </MapView>
      {
        destination ? (
          <>
            <Back 
              onPress = { handleback }
            >
              <Image 
                source = {require('../../assets/back.png')}
              />
            </Back>
            <Details />
          </>
          
        ) : (
          <Search onLocationSeleted={handleLocationSeleted} />
        )
      }
    </View>
  );
};

export default Map;
