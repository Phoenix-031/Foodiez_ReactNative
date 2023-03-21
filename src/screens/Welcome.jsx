import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import useStore from '../store/store'
import { useFonts } from 'expo-font'

const Welcome = () => {

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'Robotto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
        'Robotto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
        'Robotto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    });

    const {user} = useStore((state) => ({
        user: state.user,
    }))
    
  return (
    <View style={{flex:1, width:"100%", height:"100%", color:"#1c1c27", justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontFamily:'Poppins-SemiBold', fontSize:16, color:"#ef845d"}}>Welcome to Foodiez</Text>
      <Text style={{fontFamily:'Poppins-SemiBold',fontSize:12, color:"#ffad16"}}>Feeling Hungry, Look No further</Text>
      <Image source={{uri: user.picture}} style={{width:100, height:100, borderRadius:100}} />
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})