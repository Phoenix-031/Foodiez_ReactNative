import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, Pressable } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {Chip, Avatar, Searchbar} from 'react-native-paper'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'

import { imageList } from '../data/imageList'

import { categoryData, allrestaurants } from '../data'

import { RestaurantCard, FilterModal, LanguageModal } from '../components'

import { AntDesign, FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons'

import useStore from '../store/store'

import {ActivityIndicator} from 'react-native-paper'

import * as Localization from 'expo-localization';
import {I18n} from 'i18n-js'
import { en, bn, hi } from '../i18n'


const HomeScreen = () => {

    const i18n = new I18n()

    const {restaurantsList, cartItems, totalPrice, filters, setFilters, allfilters, locale} = useStore((state) => ({
        restaurantsList: state.restaurantsList,
        cartItems: state.cartItems,
        totalPrice: state.totalPrice,
        filters: state.filters,
        setFilters: state.setFilters,
        allfilters: state.allfilters,
        locale: state.locale
    }))

    i18n.fallbacks = true,
    i18n.translations = {en, bn, hi},
    i18n.locale = locale
    
    const navigation =useNavigation()
    const [category, setCategory] = useState(categoryData)
    const [number,setNumber] = useState('13')
    const [languagemodal, setLanguageModal] = useState(false)

    const [data,setData] = useState(restaurantsList)
    const [searchQuery, setSearchQuery] = useState('');
    // const [locale, setLocale] = useState("en")


    useEffect(() => {
        if(searchQuery.length > 0){
            const newData = restaurantsList.filter((item) => {
                const itemData = String(item.restaurant_name).toUpperCase();
                const textData = searchQuery.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setData( newData)
        }else{
            setData(restaurantsList)
        }
    }, [searchQuery])

    // I18n.translations = {en , bn}

    const [sortmodal, setSortModal] = useState(false)

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
    });
    
  return (
        <SafeAreaProvider style={styles.container}>
            <StatusBar hidden/>

            <View style={{width:"90%", flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingVertical:10}}>
                <Pressable style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}
                     onPress={() => navigation.navigate('MapScreen')}
                >
                    <Entypo name="location-pin" size={24} color="red" />
                    <Text style={{fontFamily:"Poppins-SemiBold", fontSize:16, color:"#e5e1d8"}}>Delivery</Text>
                </Pressable>

                <Pressable
                    onPress={() => setLanguageModal((languagemodal) => !languagemodal)}
                >
                    <FontAwesome name="language" size={24} color="#e5e1d8" style={{ paddingVertical:5, paddingHorizontal:10, borderRadius:8, backgroundColor:"#1c1c27"}} />
                </Pressable>
                
            </View>
            
            <Searchbar placeholder={i18n.t("homesearch")} style={{borderRadius:10, width:"90%", paddingVertical:0, }} 
               onChangeText={(text) => {
                setSearchQuery(text)
                }}
                value={searchQuery}
            />

            <View style={{width:"90%", marginTop:2}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Chip style={{margin:5, paddingHorizontal:4,fontFamily:"Poppins-SemiBold", flexDirection:"row", justifyContent:"center",gap:4}} onPress={() => 
                        setSortModal((sortmodal) => !sortmodal)
                    }>
                        <Text>Sort </Text>
                        <AntDesign name="down" size={14} color="black" />
                    </Chip>
                    {
                        allfilters.map((item, index) => (
                        <Chip style={{margin:5,paddingVertical:0 , paddingHorizontal:8,fontFamily:"Poppins-SemiBold"}} key={index} onPress={() => console.log('Pressed')}>{item}</Chip>
                        ))
                    }
                </ScrollView>
            </View>

            <ScrollView style={{width:"90%", marginTop:5, marginBottom:Number(`${cartItems.length > 0 ? 100 : 60}`)}}>
            <View>
                <Text style={{fontFamily:"Poppins-SemiBold", fontSize:18, color:"#ffad16", marginTop:8, letterSpacing:3, alignSelf:"center"}}>{i18n.t('explore')}</Text>
            </View>

            <View style={{height:85, flexDirection:"row",justifyContent:"center", alignItems:"center"}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{}}>

                    {
                        imageList.map((item, index) => {
                            return(
                                <Avatar.Image style={{marginLeft:10}} size={70} source={{uri: item}} key={index} />
                            )
                        })
                    }
                </ScrollView>
            </View>

            <View style={{width:"90%", flexDirection:"row",justifyContent:"center", alignItems:"center" }}>
                <Text style={{fontFamily:"Poppins-SemiBold", fontSize:18, color:"#e5e1d8", marginTop:10, letterSpacing:3}}>{number}{i18n.t("restaurant")}</Text>
            </View>

            <View>
                {
                    data.length > 0 ? data.map((item, index) => {
                        return(
                            <RestaurantCard item={item} key={index} />
                        )
                    }) : (
                        <View style={{width:"100%", height:300, justifyContent:"center", alignItems:"center"}}>
                            <Text style={{fontFamily:"Poppins-SemiBold", fontSize:18, color:"#e5e1d8", marginTop:10, letterSpacing:3}}>{i18n.t("no restuarants found")}</Text>
                            <MaterialIcons name="search-off" size={40} color="gray" />
                        </View>
                    )
                }
            </View>

            </ScrollView>

            {
                cartItems.length > 0 ? <View style={{position:"absolute", bottom:50, width:"100%", height:60, backgroundColor:"#1c1c27", flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:20}}>
                    <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                        <Text style={{fontFamily:"Poppins-SemiBold", fontSize:10, color:"#e5e1d8"}}>{cartItems.length} Item </Text>
                        <Text style={{fontFamily:"Poppins-SemiBold", fontSize:10, color:"#e5e1d8"}}>₹{totalPrice}</Text>    
                    </View>
                    <Pressable style={{backgroundColor:"#ffad16", padding:5,paddingHorizontal:10, borderRadius:5}} onPress={() => navigation.navigate('Cart')}>
                        <Text style={{fontFamily:"Poppins-Medium", fontSize:12, color:"#1c1c27"}}>View Cart</Text>
                    </Pressable>
                </View> : null
            }

            {
                sortmodal ? <FilterModal visible={sortmodal} setSortModal={setSortModal} /> : null
            }

            {
                languagemodal ? <LanguageModal languagemodal={languagemodal} setLanguageModal={setLanguageModal} /> : null
            }

        </SafeAreaProvider>
  )
}


export default HomeScreen

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
