import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { allrestaurants } from '../data/allrestaurants'

import { RestaurantCard, LikedRestaurantCard } from '../components'

import useStore from '../store/store'

import { Octicons } from '@expo/vector-icons'

const LikedRestaurantsScreen = () => {

    const {likedRestaurants} = useStore((state) => ({
        likedRestaurants: state.likedRestaurants
    }))

    // useEffect(() => {

        
    // }, [])
    
  return (
    <SafeAreaProvider>
        {
            likedRestaurants.length > 0 ? (
        <View style={{width:"100%", height:"100%", backgroundColor:"#1c1c27", paddingHorizontal:15, paddingVertical:15}}>
            <Searchbar style={{marginBottom:12}} />

            <ScrollView>
                {
                    likedRestaurants.map((item, index) => {
                        return(
                            <LikedRestaurantCard item={item} key={index}/>
                        )
                    })
                }

            </ScrollView>
        </View>) : (
            <View style={{width:"100%", height:"100%", backgroundColor:"#1c1c27", paddingHorizontal:15, paddingVertical:15, justifyContent:"center", alignItems:"center"}}>
                <Octicons name="heart" size={24} color="white" />
                <Text style={{color:"white", fontSize:18, fontFamily:"Poppins-SemiBold"}}>No Liked Restaurants</Text>
            </View>
        )
        }
    </SafeAreaProvider>
  )
}

export default LikedRestaurantsScreen
