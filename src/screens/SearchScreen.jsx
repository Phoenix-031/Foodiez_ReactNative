import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const SearchScreen = () => {
  return (
    <SafeAreaProvider style={{flex:1,justifyContent:"center", alignItems:"center", width:"100%", height:"100%"}}>
      <View>
        <TextInput placeholder="Search" style={{width:"100%", height:50, borderWidth:1, borderColor:"gray", borderRadius:10, paddingLeft:10}} />
        
      </View>
    </SafeAreaProvider>
  )
}

export default SearchScreen
