import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { allrestaurants } from '../data/allrestaurants'

import { RestaurantCard, LikedRestaurantCard } from '../components'

import useStore from '../store/store'

const LikedRestaurantsScreen = () => {

    const {likedRestaurants} = useStore((state) => ({
        likedRestaurants: state.likedRestaurants
    }))

    // useEffect(() => {

        
    // }, [])
    
  return (
    <SafeAreaProvider>
        <View style={{width:"100%", height:"100%", backgroundColor:"#1c1c27", paddingHorizontal:15, paddingVertical:15}}>
            <Searchbar />

            <ScrollView>
                {
                    likedRestaurants.map((item, index) => {
                        return(
                            <LikedRestaurantCard item={item} key={index}/>
                        )
                    })
                }

            </ScrollView>
        </View>
    </SafeAreaProvider>
  )
}

export default LikedRestaurantsScreen
