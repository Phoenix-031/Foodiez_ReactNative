import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'

import { userCravings } from '../data/userCravings'

const Cravings = () => {
  return (
            <View style={{height:85, flexDirection:"row",justifyContent:"center", alignItems:"center"}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    {
                        userCravings.map((item, index) => {
                            return(
                                <View key={index} style={{width:90, height:85,backgroundColor:"#1c1c27", borderRadius:10, margin:5, justifyContent:"flex-start", alignItems:"center", flex:1, flexDirection:"column", gap:2}}>
                                    <Avatar.Image style={{ alignSelf:"center",}} size={60} source={{uri:item.image}} key={index} />
                                    <Text style={{color:"white"}}>{item.name}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
  )
}

export default Cravings

const styles = StyleSheet.create({})