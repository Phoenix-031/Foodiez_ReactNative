import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, Pressable } from 'react-native'
import {Button, Badge} from 'react-native-paper'
import { useFonts } from 'expo-font'

import { CartItem } from '../components'

import useStore from '../store/store'

// import RazorpayCheckout from 'react-native-razorpay'

import {I18n} from 'i18n-js'
import { en, bn, hi } from '../i18n'

import {MaterialCommunityIcons} from '@expo/vector-icons'

const CartScreen = () => {

      const i18n = new I18n()

      const {locale} = useStore((state) => ({
        locale: state.locale
      }))
  
    i18n.fallbacks = true,
    i18n.translations = {en, bn, hi},
    i18n.locale = locale

  const {cartItems,totalPrice, addToCart, removeFromCart, clearCart, setTotalPrice,} = useStore((state) => ({
    cartItems: state.cartItems,
    totalPrice: state.totalPrice,
    addToCart: state.addToCart,
    removeFromCart: state.removeFromCart,
    clearCart: state.clearCart,
    setTotalPrice: state.setTotalPrice,
  }))
  
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'Robotto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
        'Robotto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
        'Robotto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    });

    const [deliverycharge, setDeliveryCharge] = useState(45)
  
  return (
    <SafeAreaView style={styles.container}>
      {
        cartItems.length > 0 ? (
          <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,width:'100%',}}>

                  {
                    cartItems?.map((item, index) => {
                      return <CartItem key={index} item={item} />
                    })
                  }

                  {
                    cartItems.length > 0 ? (
                  <View style={{gap:10}}>
                    <Text style={{color:"#ef845d", fontSize:20, fontFamily:"Poppins-SemiBold"}}>{i18n.t("order summary")}</Text>

                    <View>

                      <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                        <Text style={{color:"#e5e1d8", fontSize:15, fontFamily:"Poppins-SemiBold"}}>{i18n.t("subtotal")}</Text>
                        <Text style={{color:"#e5e1d8", fontSize:15, fontFamily:"Poppins-SemiBold"}}>Rs. {totalPrice}</Text>
                      </View>
                      
                      <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                        <Text style={{color:"#e5e1d8", fontSize:15, fontFamily:"Poppins-SemiBold"}}>{i18n.t("delivery charges")}</Text>
                        <Text style={{color:"#e5e1d8", fontSize:15, fontFamily:"Poppins-SemiBold"}}>Rs. {deliverycharge}</Text>
                      </View>

                    </View>

                    <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:"100%", }}>
                      <Text style={{color:"#ffad16", fontSize:20, fontFamily:"Poppins-Bold"}}>{i18n.t("total")}</Text>
                      <Text style={{color:"#e5e1d8", fontSize:15, fontFamily:"Poppins-SemiBold"}}>Rs. {totalPrice + deliverycharge}</Text>
                    </View>
                  </View>) : null
                  }
                  <View>
                  </View>

                <Button mode='contained' uppercase style={{width:'100%', fontFamily:"Poppins-SemiBold",marginBottom:"20%" }} buttonColor="#ef845d"
                
                  onPress={() => {

                    var options = {
                      order_id:"order_LTUsmSfiKe4e8f",
                      description: 'Chekcout Payment',
                      image: 'https://i.imgur.com/3g7nmJC.png',
                      currency: 'INR',
                      key: 'rzp_test_8lwdluon5ElOzi', // Your api 
                      amount: 500,
                      name: 'foo',
                      prefill: {
                        email: 'pradhandebayan@gmail.com',
                        contact: '9007361795',
                        name: 'Razorpay Software'
                      },
                      theme: {color: '#F37254'}
                    }
                    RazorpayCheckout.open(options).then((data) => {
                      // handle success
                      alert(`Success: ${data.razorpay_payment_id}`);
                    }).catch((error) => {
                      // handle failure
                      console.log(error)
                      alert(`Error: ${error.code} | ${error.description}`);
                    });
                  }}

                >
                  {i18n.t("proceed to checkout")}
                </Button>

                </ScrollView>
        ) : (
          <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <MaterialCommunityIcons name="cart-remove" size={50} color="white" />
            <Text style={{color:"#e5e1d8", fontSize:20, fontFamily:"Poppins-SemiBold", paddingTop:15}}>{i18n.t("your cart is empty")}</Text>
          </View>
        )
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:20,
        paddingTop:25,
        backgroundColor:"#1c1c27",
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