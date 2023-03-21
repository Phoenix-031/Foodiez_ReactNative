import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { useState, useEffect } from 'react'
import { Button } from 'react-native-paper'
import * as Location from 'expo-location'


const OrderMapView = () => {

  const [location, setLocation] = useState({})
  const[ errorMessage, setErrorMessage] = useState({})
  const [mapregion, setMapRegion] = useState()

  const userLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMessage('Permission to access location was denied');
          return;
        }

        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        // console.log(currenLocation)

        setMapRegion(() => (
          {
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
        ))

      }


  useEffect(() => {
    

      const getUserLocation = async() => {
        await userLocation()
      }

      getUserLocation()

  }, []);

  return (
    <View style={styles.container}>


      <MapView style={styles.map}  
        initialRegion={mapregion}>
      
      <Marker coordinate={mapregion} title="Your location" pinColor='red' />
    </MapView>
    </View>
  )
}

export default OrderMapView

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