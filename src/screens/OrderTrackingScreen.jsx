import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { useFonts } from 'expo-font'

const OrderTrackingScreen = () => {

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'Robotto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
        'Robotto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
        'Robotto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    });
    
  return (
    <SafeAreaProvider style={{flex:1, backgroundColor:"#1c1c27"}}>
        <Text>asldkjghdfk</Text>


    </SafeAreaProvider>
  )
}

export default OrderTrackingScreen

const styles = StyleSheet.create({})