import { StyleSheet, Text, View, ScrollView, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar } from 'react-native-paper'

import { PopularRestaurantData } from '../data/PopularRestaurantData'

import { useNavigation } from '@react-navigation/native'

import { useFonts } from 'expo-font'

const PopularDining = () => {

    const navigation = useNavigation()
    const [popularres, setPopularRes] = useState(null)

    useEffect(() => {
        setPopularRes(PopularRestaurantData)
    }, [])

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

        <View style={{ height: 85, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

        <FlatList
            data={popularres}
            horizontal = {true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                            <Pressable style={{ width: 90, height: 85, backgroundColor: "#1c1c27", borderRadius: 10, margin: 5, justifyContent: "flex-start", alignItems: "center", flex: 1, flexDirection: "column", gap: 2 }}
                                onPress={() => {
                                    // console.log(item.name)
                                    navigation.navigate('Search', {
                                        screen: "SearchScreen",
                                        params: {
                                            data: item.name
                                        }
                                    })

                                }}
                            >
                                <Avatar.Image style={{ alignSelf: "center", }} size={60} source={{ uri: item.image, cache: 'only-if-cached' }} />
                                <Text style={{ color: "white" }}>{item.name}</Text>
                            </Pressable>
            )}
        />

        </View>
    )
}

export default PopularDining

const styles = StyleSheet.create({})