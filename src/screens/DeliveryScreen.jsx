import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const DeliveryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={{color:"white"}}>DeliveryScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1c1c27',
    }
})

export default DeliveryScreen