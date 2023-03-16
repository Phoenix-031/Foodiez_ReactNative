import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {Chip, Avatar, Searchbar} from 'react-native-paper'
import { useFonts } from 'expo-font'

import { imageList } from '../data/imageList'
import { categoryData } from '../data/categoryData'
import { allrestaurants } from '../data/allrestaurants'

import FilterModal from '../components/FilterModal'
import RestaurantCard from '../components/RestaurantCard'

import { AntDesign } from '@expo/vector-icons'

const HomeScreen = () => {

    const [user,setUser] = useState("Federico")
    const [category, setCategory] = useState(categoryData)
    const [number,setNumber] = useState('652')

    const [sortmodal, setSortModal] = useState(false)

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('../assets/fonts/SourceSerifPro-Regular.ttf'),
    });
    
  return (
        <SafeAreaProvider style={styles.container}>
            <StatusBar hidden />
            <Text>Home</Text>
            <Searchbar placeholder='Restaurant name / Dish' style={{borderRadius:10, width:"90%"}} />

            <View style={{width:"90%", marginTop:10}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Chip style={{margin:5, paddingHorizontal:4,fontFamily:"Poppins-SemiBold", flexDirection:"row", justifyContent:"center",gap:4}} onPress={() => 
                        setSortModal((sortmodal) => !sortmodal)
                    }>
                        <Text>Sort </Text>
                        <AntDesign name="down" size={14} color="black" />
                    </Chip>
                    <Chip style={{margin:5, paddingHorizontal:8,fontFamily:"Poppins-SemiBold"}} onPress={() => console.log('Pressed')}>Nearest</Chip>
                    <Chip style={{margin:5, paddingHorizontal:8,fontFamily:"Poppins-SemiBold"}} onPress={() => console.log('Pressed')}>Rating 4.0+</Chip>
                    <Chip style={{margin:5, paddingHorizontal:8,fontFamily:"Poppins-SemiBold"}} onPress={() => console.log('Pressed')}>Pure Veg</Chip>
                    <Chip style={{margin:5, paddingHorizontal:8,fontFamily:"Poppins-SemiBold"}} onPress={() => console.log('Pressed')}>New Arraivals</Chip>
                    <Chip style={{margin:5, paddingHorizontal:8,fontFamily:"Poppins-SemiBold"}} onPress={() => console.log('Pressed')}>Previous orders</Chip>
                    <Chip style={{margin:5, paddingHorizontal:8,fontFamily:"Poppins-SemiBold"}} onPress={() => console.log('Pressed')}>Sort</Chip>
                </ScrollView>
            </View>

            <ScrollView style={{width:"90%", marginTop:10, marginBottom:60}}>
            <View>
                <Text style={{fontFamily:"Poppins-SemiBold", fontSize:20, color:"#ffad16", marginTop:15, letterSpacing:3, alignSelf:"center"}}>EXPLORE</Text>
            </View>

            <View style={{height:100, flexDirection:"row",justifyContent:"center", alignItems:"center"}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{}}>

                    {
                        imageList.map((item, index) => {
                            return(
                                <Avatar.Image style={{marginLeft:10}} size={70} source={{uri: item}} />
                            )
                        })
                    }
                </ScrollView>
            </View>

            <View style={{width:"90%", flexDirection:"row",justifyContent:"center", alignItems:"center" }}>
                <Text style={{fontFamily:"Poppins-SemiBold", fontSize:18, color:"#e5e1d8", marginTop:15, letterSpacing:3}}>{number} RESTAURANTS</Text>
            </View>

            <View>
                {
                    allrestaurants.map((item, index) => {
                        return(
                            <RestaurantCard item={item} />
                        )
                    })
                }
            </View>

            </ScrollView>

            {
                sortmodal ? <FilterModal visible={sortmodal} setSortModal={setSortModal} /> : null
            }
            
        </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        alignItems: 'center',
        justifyContent: 'flex-start',
        height:"100%",
        backgroundColor:"#28293d",
        paddingTop:StatusBar.currentHeight
    },
})

export default HomeScreen