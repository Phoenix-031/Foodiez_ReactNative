// import { StyleSheet, Text, View } from 'react-native'
// import { Dimensions } from 'react-native'
// import React from 'react'
// import MapView from 'react-native-maps'
// import { Marker } from 'react-native-maps'
// import { useState, useEffect } from 'react'
// import { Button } from 'react-native-paper'

// import * as Location from 'expo-location'


// const MapScreen = () => {

//   const {width, height} = Dimensions.get('window')

//   const SCREEN_HEIGHT = height
//   const SCREEN_WIDTH = width
//   const ASPECT_RATIO = width / height
//   const LATITUDE_DELTA = 0.0922
//   const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

//   const [location, setLocation] = useState({})
//   const[ errorMessage, setErrorMessage] = useState({})
//   const [mapregion, setMapRegion] = useState({
//       latitude: 37.78825,
//       longitude: -122.4324,
//       latitudeDelta: LATITUDE_DELTA,
//       longitudeDelta: LONGITUDE_DELTA,
//     })


//   const userLocation = async () => {

//         let { status } = await Location.requestForegroundPermissionsAsync();
//         console.log(status)
//         if (status !== 'granted') {
//           setErrorMessage('Permission to access location was denied');
//           return;
//         }

//         const currentLocation = await Location.getCurrentPositionAsync({enabledHighAccuracy: true});
//         setLocation(currentLocation);
//           setMapRegion({
//             latitude: location.coords.latitude,
//             longitude: location.coords.longitude,
//             latitudeDelta: LATITUDE_DELTA,
//             longitudeDelta: LONGITUDE_DELTA,
//           })

//         console.log(currentLocation.coords.latitude, currentLocation.coords.longitude)

//       }

//   useEffect(() => {

//       const getUserLocation = async() => {
//         await userLocation()
//       }

//       getUserLocation()

//   }, []);

//   const onRegionChange = (region) => {
//     // console.log(region)
//     setMapRegion(region)
//   }

//   return (

//     <View style={styles.container}>

//       <MapView
//         style={styles.map}
//         initialRegion={mapregion}
//         region={mapregion}
//         // onRegionChange={onRegionChange}
//         zoomEnabled={true}
//         showsUserLocation={true}
//         rotateEnabled={true}
//       >
//         <Marker title="Your location" pinColor='red' coordinate={mapregion} />
//       </MapView>

//   </View>
  
//   )
// }

// export default MapScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width:"100%",
//     height:"100%",
//   },
//   map: {
//     width: '100%',
//     height: '80%',
//   },
// });


import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Button } from 'react-native-paper';

export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      setMarkerPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  const handleMarkerDragEnd = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setMarkerPosition({ latitude, longitude });
  };

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(location);
  }

  return (
    <View style={styles.container}>
      <TextInput style={{ borderColor: 'gray', borderWidth: 1, position:"absolute", top:20, zIndex:10, backgroundColor:"gray", width:"90%", borderRadius:12, color:"#ffad16", paddingVertical:8, paddingHorizontal:12}} />
      <MapView
        style={styles.map}
        region={region}
        onPress={(e) => setMarkerPosition(e.nativeEvent.coordinate)}
      >
        {markerPosition && (
          <Marker
            draggable
            coordinate={markerPosition}
            onDragEnd={handleMarkerDragEnd}
          />
        )}
      </MapView>
      {/* <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View> */}
      <Button>
        Place Order
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    bnacklgroundColor: '#1c1c27',
  },
  map: {
    width: '100%',
    height:"80%"
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
  },
  text: {
    fontSize: 16,
  },
});