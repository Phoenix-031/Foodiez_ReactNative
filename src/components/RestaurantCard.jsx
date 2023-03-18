import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Badge } from 'react-native-paper'

import { MaterialIcons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'

import { useFonts } from 'expo-font'

const RestaurantCard = ({item}) => {

    const navigation = useNavigation()

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
    });
    
  return (
    <Pressable style={{borderRadius:20, flexDirection:"column",justifyContent:"center", alignItems:"center", marginVertical:10 }}
    onPress={()=>{navigation.navigate("RestaurantScreen")}}
    >
      <Image src={item.restaurant_image} style={{
        width: '100%',
        resizeMode: 'cover',
        height: 170,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}/>
      <View style={{backgroundColor:"#e5e1d8", width:"100%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:12,
    }}>
        <Text style={{fontFamily:"Poppins-Medium"}}>{item.time_to_deliver} . {item.distance}km</Text>
        <Text style={{fontFamily:"Poppins-Medium"}}>Rs {item.price}</Text>
      </View>

      <View style={{position:"absolute", width:"100%", flexDirection:"row",justifyContent:"space-between", alignItems:"center",paddingHorizontal:10,backgroundColor:"rgba(52, 52, 52, 0.6)", paddingVertical:10, bottom:47  }}>

        <View style={{fontFamily:"Poppins-Medium",fontSize:15}}>
            <Text style={{fontFamily:"Poppins-Bold",fontSize:18, color:"#e5e1d8",}}>{item.restaurant_name}</Text>
            <Text style={{fontFamily:"Poppins-Bold",fontSize:12, color:"#e5e1d8",}}>{item.small_description}</Text>
        </View>

        <Badge style={{backgroundColor:"#ef845d", borderRadius:5, color:"#000", fontSize:20 , justifyContent:"center", alignItems:"baseline",
        flexDirection:"row",
        height: 30,
        paddingHorizontal:10,
    }} >
            <Text style={{fontFamily:"Poppins-Medium",fontSize:15}}>{item.rating}</Text>
            <MaterialIcons name="star-border" size={20} color="white" />
        </Badge>
      </View>


    </Pressable>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({})