import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import { MaterialIcons, AntDesign } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'

import { useFonts } from 'expo-font'

import useStore from '../store/store'

const DiningRestaurantCard = ({ item }) => {

    const navigation = useNavigation()
    const [heartcol, setheartcol] = React.useState('rgba(235, 235, 224,0.7)')

    const { addLikedRestaurant, removeLikedRestaurant, likedRestaurants, locale } = useStore(state => ({
        addLikedRestaurant: state.addLikedRestaurant,
        removeLikedRestaurant: state.removeLikedRestaurant,
        likedRestaurants: state.likedRestaurants,
        locale: state.locale,
    }))

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
    });

    useEffect(() => {
        likedRestaurants.map((restaurant) => {
            if (restaurant.restaurant_id === item.restaurant_id) {
                setheartcol('#e5e1d8')
            }
        })
    }, [])

    return (
        <Pressable style={{ borderRadius: 20, flexDirection: "column", justifyContent: "center", alignItems: "center", marginVertical: 10 }}
            onPress={() => { navigation.navigate("BookingScreen") }}
        >
            <Image src={item.restaurant_image} style={{
                width: '100%',
                resizeMode: 'cover',
                height: 170,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }} />
            <View style={{
                backgroundColor: "#e5e1d8", width: "100%",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingHorizontal: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 12,
            }}>
                <Text style={{ fontFamily: "Poppins-Medium" }}>{item.time_to_deliver} . {item.distance}km</Text>
                {/* <Text style={{fontFamily:"Poppins-Medium"}}>Rs {item.price}</Text> */}
            </View>

            <View style={{ position: "absolute", height: 80, width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10, backgroundColor: "rgba(52, 52, 52, 0.6)", paddingVertical: 10, bottom: 44, flex: 1 }}>

                <View style={{ fontFamily: "Poppins-Medium", fontSize: 15, flex: 6 }}>
                    <Text style={{ fontFamily: "Poppins-Bold", fontSize: 18, color: "#e5e1d8", }}>{item.restaurant_name}</Text>
                    <Text style={{ fontFamily: "Poppins-Regular", fontSize: 12, color: "white", }}>Italian. NorthIndian .Chinese</Text>
                </View>

                <View style={{
                    backgroundColor: "#ef845d", borderRadius: 5, color: "#000", fontSize: 18, justifyContent: "center", alignItems: "baseline",
                    flexDirection: "row",
                    height: 30,
                    paddingHorizontal: 10,
                    flex: 1,
                }} >
                    <Text style={{ fontFamily: "Poppins-Medium", fontSize: 12 }}>{item.rating}</Text>
                    <MaterialIcons name="star-border" size={18} color="white" style={{ paddingTop: 3 }} />
                </View>
            </View>

            <AntDesign name="heart" size={24} color={heartcol} style={{ position: "absolute", top: 10, right: 10, }}
                onPress={() => {
                    if (heartcol == "rgba(235, 235, 224,0.7)") {
                        setheartcol("red")
                        addLikedRestaurant(item)
                        // console.log(likedRestaurants)
                    }
                    else {
                        setheartcol("rgba(235, 235, 224,0.7)")
                        removeLikedRestaurant(item)
                    }
                }}
            />

        </Pressable>
    )
}

export default DiningRestaurantCard

const styles = StyleSheet.create({})