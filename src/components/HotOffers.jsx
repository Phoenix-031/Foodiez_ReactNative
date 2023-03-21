import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const HotOffers = () => {

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
    });
    
  return (
    <View style={{height:85, flexDirection:"row",justifyContent:"center", alignItems:"center", width:"100%"}}>
      <Text style={{fontFamily:"Poppins-SemiBold", color:"#ffad16", fontSize:15}}>HotOffers</Text>
    </View>
  )
}

export default HotOffers

const styles = StyleSheet.create({})