import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

const Header = ({title}) => {
  return (
    <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
        <Entypo name="chevron-left" size={24} color="black" />
        <Text>{title}</Text>
        <AntDesign name="search1" size={24} color="black" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})