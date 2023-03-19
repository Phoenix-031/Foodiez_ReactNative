import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { ActivityIndicator, MD2Colors } from 'react-native-paper'

const Loading = () => {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})