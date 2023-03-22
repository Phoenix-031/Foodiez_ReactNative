import { ScrollView, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'

import { MaterialIcons } from '@expo/vector-icons'

import useStore from '../store/store'

import { I18n } from 'i18n-js'
import { en, bn, hi } from '../i18n'

const OrderList = () => {

    const i18n = new I18n()

    const {locale, orders} = useStore((state) => ({
        locale: state.locale,
        orders: state.orders
    }))

    i18n.fallbacks = true,
    i18n.translations = {en, bn, hi},
    i18n.locale = locale

    const [orderlist, setOrderList] = useState(orders)
    
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
    });
    
  return (
    <SafeAreaProvider>

        <TextInput placeholder="Search" style={{width:"100%", height:50, borderWidth:1, borderColor:"gray", borderRadius:10, paddingLeft:10, color:"white"}} 
        placeholderTextColor="white"
        autoFocus={true}
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text)
        }}
        />

    </SafeAreaProvider>
  )
}

export default OrderList

const styles = StyleSheet.create({})



