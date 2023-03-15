import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const DeliveryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>DeliveryScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default DeliveryScreen