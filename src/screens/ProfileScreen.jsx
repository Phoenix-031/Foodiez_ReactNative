import React from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { Button, Badge } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { FontAwesome5, Ionicons, SimpleLineIcons, Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons'

const ProfileScreen = () => {

  const navigation = useNavigation()

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
    });
  
  return (
    <SafeAreaProvider style={styles.container}>
      <Pressable style={styles.userCard}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <View>
          <Text style={{color: "#e5e1d8",fontFamily:"Poppins-Bold", fontSize:25}}>User name</Text>
          <Text style={{color: "#e5e1d8",fontFamily:"SourceSerifPro-Regular", fontSize:16}}>someemail@gmail.com</Text>
        </View>

        <View style={{width:100, height:100, borderWidth:1, borderRadius:100, justifyContent:"center", alignItems:"center"}}>
          <FontAwesome5 name="user" size={35} color="gray" />
        </View>
      </Pressable>

      <ScrollView style={{width:"90%", flexDirection:"column"}}>

      <View style={{marginTop:10, flexDirection:"row", width:"100%", paddingVertical:5, paddingHorizontal:5, justifyContent:"space-around", alignItems:"center", gap:4}}>
        <Pressable style={{flex:1, flexDirection:"column", justifyContent:"center",borderColor:"#ffad16" ,alignItems:"center", gap:2, paddingVertical:20, paddingHorizontal:5, borderWidth:1, borderRadius:15}}
          onPress={() => navigation.navigate("LikedRestaurantsScreen")}
        >
          <Ionicons name="ios-heart-outline" size={20} color="#ffad16" />
          <Text style={{color:"#ffad16"}}>Likes</Text>
        </Pressable>

        <View style={{flex:1, flexDirection:"column", justifyContent:"center",borderColor:"#ffad16" ,alignItems:"center", gap:2, paddingVertical:20, paddingHorizontal:5, borderWidth:1, borderRadius:15}}>
          <Ionicons name="card-outline" size={20} color="#ffad16" />
          <Text style={{color:"#ffad16"}}>Payements</Text>
        </View>

        <View style={{flex:1, flexDirection:"column", justifyContent:"center",borderColor:"#ffad16" ,alignItems:"center", gap:2, paddingVertical:20, paddingHorizontal:5, borderWidth:1, borderRadius:15}}>
          <FontAwesome name="gear" size={20} color="#ffad16" />
          <Text style={{color:"#ffad16"}}>Settings</Text>
        </View>
      </View>

      <View style={{backgroundColor:"#28293d", borderRadius:12, paddingVertical:10, paddingHorizontal:10,marginTop:10}}>
        <Text style={{fontFamily:"Poppins-SemiBold", fontSize:15, color:"#e5e1d8"}}>Orders</Text>

        <Pressable style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center", gap:10, marginBottom:15}}
        onPress = {() => navigation.navigate("OrderHistoryScreen")}
        >
            <SimpleLineIcons name="bag" size={18} color="#ffad16" />
          <Text style={{fontFamily:"Poppins-SemiBold", fontSize:15, color:"#e5e1d8"}}>Order History</Text>
        </Pressable>

        <Pressable style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center", gap:10}}
        onPress = {() => navigation.navigate("FavouriteOrders")}
      >
            <Ionicons name="ios-heart-outline" size={20} color="#ffad16" />
          <Text style={{fontFamily:"Poppins-SemiBold", fontSize:15, color:"#e5e1d8"}}>Favourite orders</Text>
        </Pressable>

      </View>

      <View style={{backgroundColor:"#28293d", borderRadius:12, paddingVertical:10, paddingHorizontal:10,marginTop:10}}>
        <Text style={{fontFamily:"Poppins-SemiBold", fontSize:15, color:"#e5e1d8"}}>More</Text>

        <Pressable style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center", gap:10, marginBottom:15}}
        onPress = {() => navigation.navigate("OrderHistoryScreen")}
        >
            <Entypo name="info-with-circle" size={18} color="#ffad16" />
          <Text style={{fontFamily:"Poppins-SemiBold", fontSize:15, color:"#e5e1d8"}}>About</Text>
        </Pressable>

        <Pressable style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center",marginBottom:15, gap:10}}
        onPress = {() => navigation.navigate("FavouriteOrders")}
      >
            <MaterialIcons name="feedback" size={18} color="#ffad16" />
          <Text style={{fontFamily:"Poppins-SemiBold", fontSize:15, color:"#e5e1d8"}}>SendFedback</Text>
        </Pressable>

        <Pressable style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center",marginBottom:15, gap:10}}
        onPress = {() => navigation.navigate("FavouriteOrders")}
      >
            <MaterialIcons name="logout" size={18} color="#ffad16" />
          <Text style={{fontFamily:"Poppins-SemiBold", fontSize:15, color:"#e5e1d8"}}>LogOut</Text>
        </Pressable>

      </View>

      </ScrollView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
        backgroundColor:"#1c1c27",
    },
    userCard:{
      flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:"90%", borderRadius:15,
      paddingVertical:20,
      paddingHorizontal:10,
      height:130,
      backgroundColor:"#28293d",

    }
})

export default ProfileScreen