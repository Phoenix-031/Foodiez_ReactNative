import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { ActivityIndicator, Button, Surface } from 'react-native-paper'
import { Image } from 'react-native'

import useStore from '../store/store'

import { useFonts } from 'expo-font'
import Loading from './Loading'
import { I18n } from 'i18n-js'
import { en, bn, hi } from '../i18n'

const RestaurantItemCard = ({item, restaurant_name, restaurant_image}) => {

    const i18n = new I18n()

    const {locale} = useStore((state) => ({
        locale: state.locale
    }))

    i18n.fallbacks = true,
    i18n.translations = {en, bn, hi},
    i18n.locale = locale

    const [loading, setLoading] = React.useState(false)

const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
});

const {addToCart, totalPrice, setTotalPrice, cartItems, removeFromCart, clearCart} = useStore((state) => ({
    addToCart: state.addToCart,
    totalPrice: state.totalPrice,
    setTotalPrice: state.setTotalPrice,
    cartItems: state.cartItems,
    removeFromCart: state.removeFromCart,
    clearCart: state.clearCart,
}))


return (
    <View style={{width:"100%", marginBottom:10, borderRadius:15, paddingVertical:12, paddingHorizontal:10, flexDirection:"row", gap:8, backgroundColor:"#28293d"}}>
        <View style={{flex:2}}>
            <Surface style={{backgroundColor:"#ffad16", fontFamily:'Poppins-Regular',width:90, justifyContent:"center",flexDirection:"row", borderRadius:5}}>
              <Text>{item.tag}</Text>
            </Surface>
            <Text style={{fontFamily:"Poppins-SemiBold", fontSize:18, color:"#e5e1d8"}}>{item.title}</Text>
            <View style={{width:"100%", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", paddingVertical:5}}>
                {/* <Badge style={{width:20, height:20, color:"#e5e1d8"}}>{item.rating}</Badge> */}
                <Text style={{color:"#e5e1d8"}}>{item.number_ratings} ratings</Text>
            </View>
            <Text style={{fontFamily:"Poppins-Bold", color:"#e5e1d8"}}>Rs {item.price}</Text>
            <Text style={{fontFamily:"Poppins-Medium", color:"#e5e1d8"}}>{item.description}</Text>
        </View>
        <View style={{flex:1}}>
            <Image source={{uri: item.image_uri, cache: 'only-if-cached'}} style={{height:100, width:100, resizeMode:"cover", borderRadius:12}} />
            {

                loading ? <ActivityIndicator size="large" color="#ef845d" style={{marginTop:"20%"}} /> :(
                cartItems?.find((cartItem) => cartItem.id === item.id) ? (
                    <Button style={{backgroundColor:"#ffad16", marginTop:10, borderRadius:10, width:"100%", justifyContent:"center"}} onPress={() => {
                        setLoading(true)
                        setTotalPrice(totalPrice - Number(item.price))
                        removeFromCart(item.id)
                        // console.log(totalPrice)
                        setLoading(false)
                    }
                    }>{i18n.t("remove")}</Button>
                ) : (
                        <Button style={{borderColor:"gray", borderWidth:1, borderRadius:10, marginTop:10}} textColor="#ef845d" 
                        onPress = {async() => {
                        // setLoading(true)
                        // console.log(loading)

                        if(cartItems.length > 0){
                            
                            if(cartItems[0].restaurant_name !== restaurant_name){
                                Alert.alert(
                                    "you can only order from one restaurant at a time",
                                    "do you want to clear your cart and add this item?",
                                    [
                                        {
                                            text: "Cancel",
                                            onPress: () => console.log("Cancel Pressed"),
                                            style: "cancel"
                                        },
                                        { text: "OK", onPress: () => {
                                            clearCart()
                                            setTotalPrice(0)
                                            addToCart({
                                                id: item.id,
                                                itemname: item.title,
                                                description: item.description,
                                                price: Number(item.price),
                                                image_uri: item.image_uri,
                                                quantity: 1,
                                                restaurant_name: restaurant_name
                                            })
                                            setTotalPrice(Number(item.price))
                                            
                                        }}])
                            }else {
                                setTotalPrice(Number(totalPrice) + Number(item.price))
                            await addToCart({
                                id: item.id,
                                itemname: item.title,
                                description: item.description,
                                price: Number(item.price),
                                image_uri: item.image_uri,
                                quantity: 1,
                                restaurant_name:restaurant_name,
                                restaurant_image:restaurant_image
                            })
                            }

                        }else{
                            // console.log(totalPrice)
                            setTotalPrice(Number(totalPrice) + Number(item.price))
                            await addToCart({
                                id: item.id,
                                itemname: item.title,
                                description: item.description,
                                price: Number(item.price),
                                image_uri: item.image_uri,
                                quantity: 1,
                                restaurant_name: restaurant_name
                            })
                            // setLoading(false)
                        }
                        }
                    
                    
                    }
                        >{i18n.t("add")}</Button>
                )
                )

            }
        </View>
    </View>
  )

}

export default RestaurantItemCard

const styles = StyleSheet.create({})