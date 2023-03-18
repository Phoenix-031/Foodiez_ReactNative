import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'

import { MaterialIcons } from '@expo/vector-icons'

const OrderList = () => {

    const [orderlist, setOrderList] = useState([])
    
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
    });
    
  return (
    <SafeAreaProvider>
        <View style={{width:"100%", height:"100%", backgroundColor:"#1c1c27", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>

        <ScrollView>

            {
                orderlist.length > 0 ? (
                    orderlist.map((item, index) => (
                        <View key={index}>
                            <Text>{item.name}</Text>
                        </View>
                    ))) : (
                        <View style={{alignSelf:"center", justifyContent:"center", alignContent:"center",flex:1}}>
                            <MaterialIcons name="remove-shopping-cart" size={35} color="#e5e1d8" />
                            <Text style={{fontFamily:"Poppins-SemiBold", fontSize:20, color:"#e5e1d8"}}>No Orders</Text>
                        </View> 
                    )
            }
            
        </ScrollView>

        </View>
    </SafeAreaProvider>
  )
}

export default OrderList

const styles = StyleSheet.create({})