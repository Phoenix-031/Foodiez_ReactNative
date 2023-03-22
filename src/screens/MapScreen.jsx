import { StyleSheet, Text, View } from 'react-native'
import { Dimensions } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { useState, useEffect } from 'react'
import { Button } from 'react-native-paper'

import * as Location from 'expo-location'


const MapScreen = () => {

  const {width, height} = Dimensions.get('window')

  const SCREEN_HEIGHT = height
  const SCREEN_WIDTH = width
  const ASPECT_RATIO = width / height
  const LATITUDE_DELTA = 0.0922
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

  const [location, setLocation] = useState({})
  const[ errorMessage, setErrorMessage] = useState({})
  const [mapregion, setMapRegion] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    })


  const userLocation = async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();
        console.log(status)
        if (status !== 'granted') {
          setErrorMessage('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({enabledHighAccuracy: true});
        setLocation(location);
          setMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          })

        console.log(location.coords.latitude, location.coords.longitude)

      }

  useEffect(() => {
      userLocation()

  }, []);

  return (

    <View style={styles.container}>

      <MapView
        style={styles.map}
        initialRegion={mapregion}
      >
        <Marker coordinate={mapregion} title="Your location" pinColor='red' />
      </MapView>

  </View>
  
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    height:"100%",
  },
  map: {
    width: '100%',
    height: '80%',
  },
});