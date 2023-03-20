import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Badge } from 'react-native-paper'

import { Entypo } from '@expo/vector-icons'

import { useFonts } from 'expo-font'

import useStore from '../store/store'

import { I18n } from 'i18n-js'
import { en, bn, hi } from '../i18n'

const ReviewCard = ({item}) => {

    const i18n = new I18n()

    const {locale} = useStore((state) => ({
        locale: state.locale
    }))

    i18n.fallbacks = true,
    i18n.translations = {en, bn, hi},
    i18n.locale = locale
    
const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
});
    
  return (
    <View style={{marginVertical:10, width:"100%", paddingHorizontal:15, paddingVertical:15, backgroundColor:"#28293d", borderRadius:15}}>
        <View style={{width:"100%", justifyContent:"space-between", alignItems:"center",}}>
            <View style={{flexDirection:"row", alignSelf:"flex-start", gap:8}}>
                <Avatar.Image source={{uri:item.profile_image}} 
                // ss
                />
                <View style={{flexDirection:"column", justifyContent:"flex-start", alignItems:"baseline", paddingTop:8}}>
                    <Text style={{fontFamily:"Poppins-Medium", color:"#e5e1d8"}}>{item.username}</Text>
                    <Text style={{fontFamily:"Poppins-Medium", color:"#e5e1d8"}}>{item.time_of_comment}</Text>
                </View>
            </View>
        </View>

        <View>
            <Text style={{fontFamily:"Poppins-Medium", fontSize:15, color:"#ef845d", paddingVertical:10}}>{item.review_description}</Text>
        </View>

        <View style={{width:"100%", flexDirection:"row", justifyContent:"space-between" , alignContent:"center"}}>
            <View style={{flexDirection:"row",justifyContent:"center" ,alignItems:"center", gap:4}}>
                <Entypo name="thumbs-up" size={20} color="#e5e1d8" />
                <Text style={{color:"#e5e1d8",fontFamily:"Poppins-Medium", fontSize:15}}>{i18n.t("like")}</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"center" ,alignItems:"center", gap:4}}>
                <Entypo name="message" size={20} color="#e5e1d8" />
                <Text style={{color:"#e5e1d8",fontFamily:"Poppins-Medium", fontSize:15}}>{i18n.t("comment")}</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"center" ,alignItems:"center", gap:4}}>
                <Entypo name="share" size={20} color="#e5e1d8" />
                <Text style={{color:"#e5e1d8",fontFamily:"Poppins-Medium", fontSize:15}}>{i18n.t("share")}</Text>
            </View>
        </View>
    </View>
  )
}

export default ReviewCard
