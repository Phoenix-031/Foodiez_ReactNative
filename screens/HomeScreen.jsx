import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import { CategoryComponent } from '../components'
import { categoryData } from '../data/categoryData'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Searchbar } from 'react-native-paper'
import { StatusBar } from 'react-native'

const Home = () => {

    const [user,setUser] = useState("Federico")
    const [category, setCategory] = useState(categoryData)
    
  return (
        <SafeAreaProvider style={styles.container}>
            <Text>Home</Text>
            <Searchbar placeholder='Search' style={{borderRadius:10, height:20}} />
        </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        alignItems: 'center',
        justifyContent: 'flex-start',
        height:"100%",
        backgroundColor:"#28293d",
        paddingTop:StatusBar.currentHeight
    },
})

export default Home