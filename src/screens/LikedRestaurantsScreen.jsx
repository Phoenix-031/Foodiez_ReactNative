import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { RestaurantCard, LikedRestaurantCard } from '../components'

import useStore from '../store/store'

import { Octicons } from '@expo/vector-icons'

import { I18n } from 'i18n-js'
import { en, bn, hi } from '../i18n'

const LikedRestaurantsScreen = () => {

    const i18n = new I18n()

    const {locale} = useStore((state) => ({
        locale: state.locale
    }))

    i18n.fallbacks = true,
    i18n.translations = {en, bn, hi},
    i18n.locale = locale

    const {likedRestaurants} = useStore((state) => ({
        likedRestaurants: state.likedRestaurants
    }))

    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState(likedRestaurants);

    useEffect(() => {

        // console.log(searchQuery)
        
        if(searchQuery.length > 0){
            const newData = likedRestaurants.filter((item) => {
                const itemData = String(item.restaurant_name).toUpperCase();
                const textData = searchQuery.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setData( newData)
        }else{
            setData(likedRestaurants)
        }
        
    }, [searchQuery])
    
    
  return (
    
    <SafeAreaProvider>
        {
            likedRestaurants.length > 0 ? (
        <View style={{width:"100%", height:"100%", backgroundColor:"#1c1c27", paddingHorizontal:15, paddingVertical:15}}>

            <Searchbar style={{marginBottom:12}} 
                placeholder="Search"
                onChangeText={(query) => setSearchQuery(query)}
                value={searchQuery}
            />

            <ScrollView>
                {
                    data.map((item, index) => {
                        return(
                            <LikedRestaurantCard item={item} key={index}/>
                        )
                    })
                }

            </ScrollView>
        </View>) : (
            <View style={{width:"100%", height:"100%", backgroundColor:"#1c1c27", paddingHorizontal:15, paddingVertical:15, justifyContent:"center", alignItems:"center"}}>
                <Octicons name="heart" size={24} color="white" />
                <Text style={{color:"white", fontSize:18, fontFamily:"Poppins-SemiBold"}}>{i18n.t("no liked restaurants")}</Text>
            </View>
        )
        }
    </SafeAreaProvider>
  )
}

export default LikedRestaurantsScreen
