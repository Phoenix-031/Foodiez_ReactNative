import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { Badge, TextInput } from 'react-native-paper'
import { ReviewCard } from '../components'
import {Comment} from '../components'

import { useFonts } from 'expo-font'

const CommentScreen = ({route}) => {
    // console.log(route.params.item.comments)

    const [comments, setComments] = useState('')

    useEffect(() => {
        setComments(route.params.item.comments)
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
    <View style={{width:"100%", height:"100%", flex:1, justifyContent:"flex-start", alignItems:"center", backgroundColor:"#1c1c27", paddingVertical:15,paddingHorizontal:12,}}>

        <FlatList
        style={{width:"100%", flexDirection:"column"}}
            ListHeaderComponent={() => (
                <>
                    <View style={{width:"100%", flexDirection:"row", justifyContent:"space-between", paddingHorizontal:12}}>
                            <View style={{flexDirection:"row", gap:6, alignItems:"center"}}>
                                <Image source={{uri:route.params.item.profile_image, cache: 'only-if-cached'}} style={{width:50, height:50, borderRadius:100}}/>
                                <Text style={{fontSize:12, fontFamily:"Poppins-Medium", color:"#e5e1d8"}}>{route.params.item.username}</Text>
                            </View>

                            <View style={{ flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                                <Badge style={{}}>1</Badge>
                                <Text style={{fontFamily:"Poppins-SemiBold", fontSize:10, color:"white"}}>Verified</Text>
                            </View>

                        </View>

                        <ReviewCard item={route.params.item} />
                </>
            )}
            data={comments}
            renderItem={({item}) => <Comment item={item} />}
            keyExtractor={(item) => item.id}
        />

        <TextInput 
            style={{width:"100%", backgroundColor:"#28293d", borderRadius:10, paddingHorizontal:10, marginVertical:5, color:"white", fontFamily:"Poppins-Medium", fontSize:14}}
            />
      
    </View>
  )
}

export default CommentScreen

const styles = StyleSheet.create({})