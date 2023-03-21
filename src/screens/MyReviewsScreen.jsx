import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Searchbar, Button, Surface, Chip } from 'react-native-paper'
import { useFonts } from 'expo-font'
import { myreviews } from '../data/MyReviews'

import { MyReviewCard } from '../components'

// import useStore from '../store/store'

const MyReviewsScreen = () => {

    // const { restaurantReviews } = route.params

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
    });

    return (
        <SafeAreaProvider style={{ backgroundColor: "#1c1c27", width: "100%", height: "100%", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", paddingTop: 15 }}>

            <View style={{ width: "90%", height: "100%" }}>

                <ScrollView>

                    {myreviews.map((item, index) => {
                        return (
                            <MyReviewCard item={item} key={index} />
                        )
                    })}

                </ScrollView>
            </View>

        </SafeAreaProvider>
    )
}

export default MyReviewsScreen

const styles = StyleSheet.create({})