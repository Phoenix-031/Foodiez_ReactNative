import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'


const BookingScreen = () => {

    const navigation = useNavigation()
    
    return (
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Button mode='contained'
                onPress={() => navigation.navigate("BookingOptionScreen")}
            >Book Table</Button>
        </View>
    )
}

export default BookingScreen

const styles = StyleSheet.create({})