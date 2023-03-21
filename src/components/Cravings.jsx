import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'

import { userCravings } from '../data/userCravings'

import { useNavigation } from '@react-navigation/native'

const Cravings = () => {

    const navigation = useNavigation()
    
  return (
            <View style={{height:85, flexDirection:"row",justifyContent:"center", alignItems:"center"}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    {
                        userCravings.map((item, index) => {
                            return(
                                <Pressable key={index} style={{width:90, height:85,backgroundColor:"#1c1c27", borderRadius:10, margin:5, justifyContent:"flex-start", alignItems:"center", flex:1, flexDirection:"column", gap:2}}
                                onPress={() => {
                                    // console.log(item.name)
                                    navigation.navigate('Search',{
                                        screen:"SearchScreen",
                                        params: {
                                            data: item.name
                                        }
                                    })

                                }}
                                >
                                    <Avatar.Image style={{ alignSelf:"center",}} size={60} source={{uri:item.image}} key={index} />
                                    <Text style={{color:"white"}}>{item.name}</Text>
                                </Pressable>
                            )
                        })
                    }
                </ScrollView>
            </View>
  )
}

export default Cravings

const styles = StyleSheet.create({})