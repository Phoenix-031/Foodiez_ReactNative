import {StyleSheet, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import { useFonts } from 'expo-font'

import useStore from '../store/store'

import { I18n } from 'i18n-js'
import { en, bn, hi } from '../i18n'
import OrderItems from '../components/OrderItems'

const OrderList = () => {

    const i18n = new I18n()

    const {locale, orders} = useStore((state) => ({
        locale: state.locale,
        orders: state.orders
    }))

    const [allorders,setAllorders] = useState(null)

    useEffect(() => {
      setAllorders(orders)
    }, [])
    
    
    i18n.fallbacks = true,
    i18n.translations = {en, bn, hi},
    i18n.locale = locale

    // const [orderlist, setOrderList] = useState(orders)
    
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
    <SafeAreaProvider style={{backgroundColor:"#1c1c27", flex:1,width:"100%", height:"100%", paddingVertical:10, paddingHorizontal:12}}>

        <TextInput placeholder="Search" style={{width:"100%", height:50, borderWidth:1, borderColor:"gray", borderRadius:10, paddingLeft:10, color:"white", marginVertical:10}} 
        placeholderTextColor="white"
        autoFocus={true}
        />
        <FlatList
            data={allorders}
            renderItem={({item}) => (
              <OrderItems item={item} />
            )}
            keyExtractor={item => item.id}
        />

    </SafeAreaProvider>
  )
}

export default OrderList

const styles = StyleSheet.create({})



