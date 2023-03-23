import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Searchbar, Button, Surface, Chip } from 'react-native-paper'
import { useFonts } from 'expo-font'

import { ReviewCard } from '../components'

import { I18n } from 'i18n-js'
import { en, bn, hi } from '../i18n'

import useStore from '../store/store'

// import useStore from '../store/store'

const ReviewScreen = ({route}) => {

    const i18n = new I18n()

    const {locale} = useStore((state) => ({
        locale: state.locale
    }))

    i18n.fallbacks = true,
    i18n.translations = {en, bn, hi},
    i18n.locale = locale

  const {restaurantReviews} = route.params
  const review_tags = ["Verified", "With Photos", "Latest", "Detailed", "Most Helpful"]

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
    <SafeAreaProvider style={{backgroundColor:"#1c1c27", width:"100%", height:"100%", flexDirection:"column", justifyContent:"flex-start", alignItems:"center", paddingTop:15}}>
      
      <View style={{width:"90%",height:"100%"}}>

        <Searchbar />

        {/* <View horizontal style={{width:"100%", flexDirection:"row", justifyContent:"flex-start", alignItems:"center",paddingVertical:20}}>
          <ScrollView horizontal>
            <Chip style={{marginRight:8, backgroundColor:"#28293d"}} selectedColor="#ffad16" textStyle="Poppins-Medium">Verified</Chip>
            <Chip style={{marginRight:8, backgroundColor:"#28293d"}} selectedColor="#ffad16" textStyle="Poppins-Medium">With Photos</Chip>
            <Chip style={{marginRight:8, backgroundColor:"#28293d"}} selectedColor="#ffad16" textStyle="Poppins-Medium">Latest</Chip>
            <Chip style={{marginRight:8, backgroundColor:"#28293d"}} selectedColor="#ffad16" textStyle="Poppins-Medium">Detailed Reviews</Chip>
          </ScrollView>
        </View> */}

      <FlatList
      // style={{width:"100%", paddingVertical:20}}
        horizontal={true}
        data={review_tags}
        renderItem={({item}) => <Text style={{marginRight:8, backgroundColor:"#28293d", paddingVertical:10}} selectedColor="#ffad16" textStyle="Poppins-Medium">{item}</Text>}
        keyExtractor={item => item}
      />


      <FlatList
        data={restaurantReviews}
        renderItem={({item}) => <ReviewCard item={item} />}
        keyExtractor={item => item.id}
      />

      <Button mode='contained' style={{marginVertical:10, backgroundColor:"#ffad16", paddingVertical:6,}} uppercase textColor="white"
      contentStyle={{fontSize:25, fontFamily:"Poppins-Medium"}}
      >{i18n.t("write a review")}</Button>
      </View>

    </SafeAreaProvider>
  )
}

export default ReviewScreen

const styles = StyleSheet.create({})