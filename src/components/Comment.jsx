import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const Comment = ({item}) => {

  return (
    <View style={{flexDirection:"column", gap:6, backgroundColor:"#28293d", paddingVertical:10, paddingHorizontal:5, borderRadius:15, marginBottom:5}}>
        <View style={{flexDirection:"row",justifyContent:"flex-start", paddingHorizontal:10, gap:4, alignItems:"center"}}>
            <Image source={{uri:item.profile_image, cache: 'only-if-cached'}} style={{width:50, height:50, borderRadius:100}}/>
            <Text style={{fontSize:14, fontWeight:"bold", color:"#e5e1d8"}}>{item.username}</Text>
        </View>

        <View style={{paddingHorizontal:15}}>
            <Text style={{fontFamily:"Poppins-Medium", fontSize:12, color:"white"}}>{item.description}</Text>
        </View>
    </View>
  )
}

export default Comment

const styles = StyleSheet.create({})