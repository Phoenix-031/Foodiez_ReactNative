import {Text, View } from 'react-native'
import { Pressable } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'

import { useFonts } from 'expo-font'

import { useNavigation } from '@react-navigation/native'

const MyReviewCard = ({ item }) => {

    const navigation = useNavigation()

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
        <Pressable style={{ marginVertical: 10, width: "100%", paddingHorizontal: 15, paddingVertical: 15, backgroundColor: "#28293d", borderRadius: 15 }}
        // onPress={() => navigation.navigate("ReviewScreen", { item: item })}
        >
            <View style={{ width: "100%", justifyContent: "space-between", alignItems: "center", }}>
                <View style={{ flexDirection: "row", alignSelf: "flex-start", gap: 8 }}>
                    <Avatar.Image source={{ uri: item.profile_image, cache: 'only-if-cached' }}
                    />
                    <View style={{ flexDirection: "column", justifyContent: "flex-start", alignItems: "baseline", paddingTop: 8 }}>
                        <Text style={{ fontFamily: "Poppins-Medium", color: "#e5e1d8" }}>{item.username}</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", color: "#e5e1d8" }}>{item.time_of_comment}</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", color: "#e5e1d8" }}>{item.review_description}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default MyReviewCard
