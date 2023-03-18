import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { useFonts } from 'expo-font'

const LikedRestaurantCard = ({item}) => {

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
    });

  return (
    <Pressable style={{borderRadius:20, flexDirection:"column",justifyContent:"center", alignItems:"center", marginVertical:10, backgroundColor:"#28293d" }}
    // onPress={()=>{navigation.navigate("RestaurantScreen")}}
    >
      <Image src={item.restaurant_image} style={{
        width: '100%',
        resizeMode: 'cover',
        height: 170,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}/>

        <View style={{fontFamily:"Poppins-Medium",fontSize:15, width:"100%", paddingHorizontal:10, paddingVertical:15}}>
            <Text style={{fontFamily:"Poppins-Bold",fontSize:18, color:"#e5e1d8",}}>{item.restaurant_name}</Text>
            <Text style={{fontFamily:"Poppins-Bold",fontSize:12, color:"#e5e1d8",}}>{item.small_description}</Text>
        </View>



    </Pressable>
  )
}

export default LikedRestaurantCard

const styles = StyleSheet.create({})