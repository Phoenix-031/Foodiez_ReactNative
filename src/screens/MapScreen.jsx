
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Button } from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useFonts } from 'expo-font';
import useStore from '../store/store';
import { confirmPayment, useStripe } from '@stripe/stripe-react-native'
import {ActivityIndicator} from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';


export default function MapScreen() {

  const navigation = useNavigation()

  const {cartItems,totalPrice, clearCart, setTotalPrice,orders, addOrders} = useStore((state) => ({
    cartItems: state.cartItems,
    totalPrice: state.totalPrice,
    clearCart: state.clearCart,
    setTotalPrice: state.setTotalPrice,
    orders: state.orders,
    addOrders: state.addOrders,
  }))


   const [loadingpayement, setLoadingPayement] = useState(false)

    const {initPaymentSheet, presentPaymentSheet} = useStripe()

    const [payement,setPayement] = useState()

    const handleCheckout = async() => {
    setLoadingPayement(true)

      const payamentIntent = await axios.post('https://foodiex-backend.onrender.com/api/payement/',
      {
        amount: (totalPrice + 45)*100,
        currency: "INR",
      },{
        headers:{
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json',
        }
    })
    const res =  payamentIntent.data
    console.log(res)
    setPayement(res)
    
    const initResponse = await initPaymentSheet({
      merchantDisplayName: 'Foodiez',
      paymentIntentClientSecret: res.client_secret,
    })

    if(initResponse.error){
      console.log("error")
      Alert.alert("Error", initResponse.error.message)
      return
    }

    setLoadingPayement(false)

    const payementRes = await presentPaymentSheet();
    console.log(payementRes)

    if(payementRes.error){
      console.log("error")
      Alert.alert("Error", payementRes.error.message)
      return
    }else{
      // console.log("success")
      // console.log(payementRes)
      setTotalPrice(0)
      Alert.alert("Success", "Your order has been placed")
      console.log(
         cartItems,
         totalPrice,
         address,
      )
      addOrders({
        id: res.client_secret,
        items: cartItems,
        total: totalPrice,
        address: address,
        status: "Pending",
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      })
      // console.log(orders)
      clearCart()
      navigation.navigate("Home")
    }
  }
  
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
  });
  
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [address, setAddress] = useState(null);


  const[postalcode, setPostalCode] = useState(null);
  const[city, setCity] = useState(null);
  const[name,setName] = useState(null);
  const [district, setDistrict] = useState(null);
  const [regadd,setRegadd] = useState(null);


  useEffect(() => {
    (async() => {
       const readOnlyAddress = await Location.reverseGeocodeAsync(markerPosition);
       console.log(readOnlyAddress[0]);
       setAddress(readOnlyAddress[0]);
      setName(readOnlyAddress[0]?.name);
      setDistrict(readOnlyAddress[0]?.district);
      setCity(readOnlyAddress[0]?.city);
      setPostalCode(readOnlyAddress[0]?.postalCode);
      setRegadd(readOnlyAddress[0]?.region);
    })()
    
  }, [markerPosition]);

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

       const readOnlyAddress = await Location.reverseGeocodeAsync(markerPosition);
       setAddress(readOnlyAddress[0]);
    })();
  }, []);

  const handleMarkerDragEnd = async(e) => {
    console.log("adkgfhdfksjg")
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setMarkerPosition({ latitude, longitude });

  };

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
       <>

    <View style={styles.container}>
      <TextInput placeholder='Search Places' style={{ borderColor: '#ef845d', borderStyle:"solid", borderWidth: 2, position:"absolute", top:20, zIndex:10, backgroundColor:"white", width:"90%", borderRadius:12, color:"#ffad16", paddingVertical:8, paddingHorizontal:12}} />
      
      <MapView
        style={styles.map}
        region={region}
        onPress={(e) => setMarkerPosition(e.nativeEvent.coordinate)}
        userInterfaceStyle="dark"
      >
        {markerPosition && (
          <Marker
            draggable
            coordinate={markerPosition}
            onDragEnd={handleMarkerDragEnd}
          />
        )}
      </MapView>
{      loadingpayement ? (
        <ActivityIndicator size="large" color="#ef845d" style={{marginTop:"20%"}} />
      ) : (
        <View style={{width:"100%", paddingVertical:10, paddingHorizontal:10, height:"30%", backgroundColor:"#1c1c27"}}>
          <Text style={{fontFamily:"Poppins-SemiBold",color:"#ef845d", alignSelf:"center", paddingVertical:10}}>Confirm Delivery Location</Text>
          <Text style={{borderWidth:1, borderColor:"#ef845d",backgroundColor:"#28293d", color:"white", paddingVertical:10, paddingHorizontal:10,borderRadius:8}}>{name}, {district}, {city}: {postalcode}, {regadd}</Text>
          <Button  mode="contained" buttonColor='#28293d' textColor='white' style={{ marginVertical: 15, width: "70%", alignSelf: "center", paddingVertical: 8, fontSize: 20, fontFamily: "Poppins-SemiBold", color: "#ef845d" }}
          onPress={handleCheckout}
          >
          <Text style={{ fontSize: 15, fontFamily: "Poppins-SemiBold", color: "#ef845d" }}>Place Order</Text>
        </Button>
        </View>
      )}
    </View>
       </>
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
    height:"70%"
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

