import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, Pressable, FlatList } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Chip, Avatar, Searchbar } from 'react-native-paper'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'

import { imageList } from '../data/imageList'

import { categoryData, allrestaurants } from '../data'

import { RestaurantCard, FilterModal, LanguageModal, Cravings } from '../components'

import { AntDesign, FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons'

import useStore from '../store/store'

import { ActivityIndicator } from 'react-native-paper'

import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js'
import { en, bn, hi } from '../i18n'


const BookingOptionScreen = () => {
    <SafeAreaProvider>
        <View style={styles.container}>
            <Text>dsfkljghjdshgkjfds</Text>

        </View>
    </SafeAreaProvider>
}


export default BookingOptionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: "100%",
        backgroundColor: "#28293d",
        paddingTop: StatusBar.currentHeight
    },
})
