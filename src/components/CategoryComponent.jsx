import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable } from 'react-native'

import { categoryData } from '../data'

const CategoryComponent = ({categoryList}) => {

    const [category, setCategory] = useState(categoryData)
    
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {category.map((item, index) => (
            <Pressable key={index} style={styles.categoryList}>
                <Text style={styles.categoryListItem }>{item}</Text>
            </Pressable>
        ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    categoryListItem:{
        paddingHorizontal:12,
        paddingVertical:8,
        fontSize:16,
        color:"#000",
        fontWeight:"medium",
        borderWidth:1,
        marginLeft:5,
        borderRadius:15
    },
    categoryList:{
        // width:"100%",
        height:50,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
    }
})

export default CategoryComponent