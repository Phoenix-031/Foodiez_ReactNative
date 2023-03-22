import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'

const DinningScreen = () => {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
  });
    
  return (
    <SafeAreaProvider style={{flex:1,width:"100%", height:"100%", backgroundColor:"#1c1c27", justifyContent:"flex-start", alignItems:"center", paddingVertical:12, paddingHorizontal:10}}>
        <Text style={{fontFamily:"Poppins-SemiBold", color:"white"}}>dinning Screen</Text>
    </SafeAreaProvider>
  )
}

export default DinningScreen

const styles = StyleSheet.create({})