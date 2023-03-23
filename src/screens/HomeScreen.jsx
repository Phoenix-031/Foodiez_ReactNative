import React, { useEffect, useMemo, useState } from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableHighlight, Pressable, FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {Chip, Searchbar} from 'react-native-paper'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'

import { RestaurantCard, FilterModal, LanguageModal, Cravings } from '../components'

import { AntDesign, FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons'

import useStore from '../store/store'

import {I18n} from 'i18n-js'
import { en, bn, hi } from '../i18n'


const HomeScreen = () => {

    const i18n = new I18n()

    const {restaurantsList, cartItems, totalPrice, filters, setFilters, allfilters, locale, sortbyDistance} = useStore((state) => ({
        restaurantsList: state.restaurantsList,
        cartItems: state.cartItems,
        totalPrice: state.totalPrice,
        filters: state.filters,
        setFilters: state.setFilters,
        allfilters: state.allfilters,
        locale: state.locale,
        sortbyDistance: state.sortbyDistance
    }))

    i18n.fallbacks = true,
    i18n.translations = {en, bn, hi},
    i18n.locale = locale
    
    const navigation =useNavigation()
    const [languagemodal, setLanguageModal] = useState(false)

    const [data,setData] = useState(restaurantsList)
    const [searchQuery, setSearchQuery] = useState('');
    // const [locale, setLocale] = useState("en")


    useMemo(() => {
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

    useEffect(() => {
        // console.log(filters)
        if(filters.length > 0){
            filters.map((item) => {
                if(item === "Nearest"){
                    const newData = data.filter((item) => item.distance <= 10)
                    setData(newData)
                }
                if(item === "Rating 4.0+"){
                    const newData = data.filter((item) => item.rating >= 4)
                    setData(newData)
                }
                if(item === "Pure Veg"){
                    const newData = data.filter((item) => item.special_tag === "Pure veg")
                    setData(newData)
                }
            })
        }else{
            setData(restaurantsList)
        }
    }, [filters])


    const [sortmodal, setSortModal] = useState(false)

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

            <View style={{width:"90%", flexDirection:"row", gap:4,}}>
            <Searchbar placeholder={i18n.t("homesearch")} style={{borderRadius:10, width:"80%", paddingVertical:0, flex:6 }} 
               onChangeText={(text) => {
                setSearchQuery(text)
                }}
                value={searchQuery}
            />
            
            <TouchableOpacity style={{flex:1, backgroundColor:"white", paddingVertical:4, paddingHorizontal:4, borderRadius:100,flexDirection:"row", justifyContent:"center", alignItems:"center"}}
            // onPress={() => console.log('Pressed')}
            >
                <MaterialIcons name="keyboard-voice" size={24} color="#ef845d"  />
            </TouchableOpacity>
            </View>

            <View style={{width:"90%", marginTop:2}}>

            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <Chip style={{margin:5, paddingHorizontal:4,fontFamily:"Poppins-SemiBold", flexDirection:"row", justifyContent:"center",gap:4}} onPress={() => 
                        setSortModal((sortmodal) => !sortmodal)
                    }>
                        <Text>Sort </Text>
                        <AntDesign name="down" size={14} color="black" />
                    </Chip>
                )}
                data={allfilters}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <TouchableOpacity style={{borderRadius:12,flex:1,justifyContent:"center", alignItems:"center", margin:5,paddingVertical:0 ,borderWidth:1, paddingHorizontal:8,fontFamily:"Poppins-SemiBold",borderColor:`${filters.includes(item) ? "red" : "green"}`}} 
                    onPress={() => {
                        if(filters.includes(item)){
                            setFilters(filters.filter((filter) => filter !== item))
                            setData(restaurantsList)
                        }else{
                            setFilters([...filters, item])
                        }
                    }}><Text style={{color:`${filters.includes(item) ? "red" : "green"}`, fontFamily:"Poppins-SemiBold"}}>{i18n.t(item)}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>


        <FlatList
        style={{width:"90%", marginTop:5, marginBottom:Number(`${cartItems.length > 0 ? 100 : 60}`)}}
            ListHeaderComponent={() => (
                <>
                    <View>
                        <Text style={{fontFamily:"Poppins-SemiBold", fontSize:18, color:"#ffad16", marginTop:8, letterSpacing:3, alignSelf:"center"}}>{i18n.t('explore')}</Text>
                    </View>

                    <Cravings />

                    <View style={{width:"90%", flexDirection:"row",justifyContent:"center", alignItems:"center" }}>
                        <Text style={{fontFamily:"Poppins-SemiBold", fontSize:18, color:"#e5e1d8", marginTop:10, letterSpacing:3}}>{data.length} {i18n.t("restaurant")}</Text>
                    </View>
                </>
            )}
            data={data}
            renderItem={({item}) => (
                <RestaurantCard
                    key={item.id}
                    item={item}
                />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <View style={{width:"100%", height:300, justifyContent:"center", alignItems:"center"}}>
                    <Text style={{fontFamily:"Poppins-SemiBold", fontSize:18, color:"#e5e1d8", marginTop:10, letterSpacing:3}}>{i18n.t("no restaurants found")}</Text>
                    <MaterialIcons name="search-off" size={40} color="gray" />
                </View>
            )}
        />


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
