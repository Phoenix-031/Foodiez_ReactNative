import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, Pressable } from 'react-native'
import CartItem from '../components/CartItem'
import {Button, Badge} from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { cartData } from '../data/cartData'

const CartScreen = () => {

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Robotto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'Robotto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
        'Robotto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    });

  
  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,width:'100%'}}>

        {
          cartData.map((item, index) => {
            return <CartItem key={index} item={item} />
          })
        }

        <View>
          <View style={{marginTop:10}}>
            <Text style={{fontSize:20, color:"#ffad16"}}>Have a promo code?</Text>
            
            <View style={styles.promocontainer}>
              <TextInput style={styles.promocodeinput} placeholder="Enter Promo Code" placeholderTextColor="#e5e1d8"/>
              <Button mode='contained' uppercase buttonColor='#ffad16' style={styles.promobutton}>
                Apply
              </Button>
            </View>
          </View>
        </View>

        <View style={{gap:10}}>
          <Text style={{color:"#ef845d", fontSize:20, fontFamily:"Poppins-SemiBold"}}>Order Summary</Text>

          <View>

            <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
              <Text style={{color:"#e5e1d8", fontSize:15, fontFamily:"Poppins-SemiBold"}}>Subtotal</Text>
              <Text style={{color:"#e5e1d8", fontSize:15, fontFamily:"Poppins-SemiBold"}}>Rs. 45.90</Text>
            </View>
            
            <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
              <Text style={{color:"#e5e1d8", fontSize:15, fontFamily:"Poppins-SemiBold"}}>Delivery Charges</Text>
              <Text style={{color:"#e5e1d8", fontSize:15, fontFamily:"Poppins-SemiBold"}}>Rs. 45.90</Text>
            </View>

          </View>

          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:"100%"}}>
            <Text style={{color:"#ffad16", fontSize:20, fontFamily:"Poppins-Bold"}}>Total</Text>
            <Text style={{color:"#e5e1d8", fontSize:15, fontFamily:"Poppins-SemiBold"}}>Rs. 45.90</Text>
          </View>
        </View>
      </ScrollView>
      <Button mode='contained' uppercase style={{width:'100%', fontFamily:"Poppins-SemiBold", marginBottom:10}} buttonColor="#ef845d">
        Proceed to Checkout
      </Button>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:20,
        paddingTop:25,
        alignItems: 'center',
        justifyContent: 'center',
        gap:5,
        backgroundColor:"#1c1c27"
    },
    promocodeinput:{
        backgroundColor:"#28293d",
        color:"white",
        borderRadius:10,
        padding:5,
        flex:6,
        marginTop:20,
    },
    promobutton:{
      borderRadius:10,
      flex:1,
    },
    promocontainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      width:"100%",
      marginBottom:10,
      gap:5,
    },
})

export default CartScreen