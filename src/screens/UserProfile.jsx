import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useFonts } from 'expo-font'

const UserProfile = () => {


      const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'Robotto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
        'Robotto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
        'Robotto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    });

    if(!fontsLoaded)
      return null

  return (
    <View style={{flex:1,justifyContent:"center", alignItems:"center",backgroundColor:"#1c1c27"}}>
      <Text style={{color:"white"}}>User Profile</Text>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({})