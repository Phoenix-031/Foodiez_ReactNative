import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { myreviews } from '../data/MyReviews'

import { MyReviewCard } from '../components'

// import useStore from '../store/store'

const MyReviewsScreen = () => {

    const [reviews, setReviews] = useState('')

    useMemo(() => {
        setReviews(myreviews)
    }, [myreviews])

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
        <SafeAreaProvider style={{ backgroundColor: "#1c1c27", width: "100%", height: "100%", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", paddingTop: 15 }}>

            <View style={{ width: "90%", height: "100%" }}>

                <FlatList
                    data={reviews}
                    renderItem={({ item }) => <MyReviewCard item={item} />}
                    keyExtractor={item => item.id}
                />
                
            </View>

        </SafeAreaProvider>
    )
}

export default MyReviewsScreen

const styles = StyleSheet.create({})