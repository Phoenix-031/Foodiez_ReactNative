import React, { useEffect, useMemo, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, Pressable, Alert, FlatList } from 'react-native'
import {Button, Badge, ActivityIndicator} from 'react-native-paper'
import { useFonts } from 'expo-font'

import { CartItem } from '../components'

import useStore from '../store/store'

import { useNavigation } from '@react-navigation/native'

import {I18n} from 'i18n-js'
import { en, bn, hi } from '../i18n'

import {MaterialCommunityIcons} from '@expo/vector-icons'


const CartScreen = () => {

  const navigation = useNavigation()
      const i18n = new I18n()

      const {locale} = useStore((state) => ({
        locale: state.locale
      }))
  
    i18n.fallbacks = true,
    i18n.translations = {en, bn, hi},
    i18n.locale = locale

  const {cartItems,totalPrice} = useStore((state) => ({
    cartItems: state.cartItems,
    totalPrice: state.totalPrice,
  }))

  const [cartdata, setCartData] = useState(null)
  const [deliverycharge, setDeliveryCharge] = useState(45)

  useEffect(() => {
    setCartData(cartItems)
  }, [])

  useMemo(() => {
    setCartData(cartItems)
  }, [cartItems])
  

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
    <SafeAreaView style={styles.container}>

      <FlatList
        data={cartdata}
        renderItem={({item}) => <CartItem item={item} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <MaterialCommunityIcons name="cart-remove" size={50} color="white" />
            <Text style={{color:"#e5e1d8", fontSize:20, fontFamily:"Poppins-SemiBold", paddingTop:15}}>{i18n.t("your cart is empty")}</Text>
          </View>
        )}
        ListFooterComponent={() => (
          
            cartdata.length > 0 ? (
          <>
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
                  </View>
                <Button mode='contained' uppercase style={{width:'100%', fontFamily:"Poppins-SemiBold",marginBottom:"20%" }} buttonColor="#ef845d"
                  // onPress={handleCheckout}
                  onPress={() => navigation.navigate("MapScreen")}
                >
                  {i18n.t("proceed to checkout")}
                </Button>
          </>
            ) : null
        )}
          
      />

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