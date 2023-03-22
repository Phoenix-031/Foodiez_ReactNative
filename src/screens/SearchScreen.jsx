import { FlatList, StyleSheet, Text, TextInput, View, Image, SectionList, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useStore from '../store/store'
import { useNavigation } from '@react-navigation/native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

const SearchScreen = ({route}) => {

  if(route.params.data === undefined)
    route.params.data = ""

  const {restaurantsList} = useStore((state) => ({
    restaurantsList: state.restaurantsList
  }))

  const [data, setData] = useState([])
  const [searchQuery, setSearchQuery] = useState(route.params.data)
  const navigation = useNavigation()

  useEffect(() => {
    if(searchQuery.length > 0){
      const newData = restaurantsList.filter((item) => {
        const itemData = String(item.restaurant_name).toUpperCase();
        const textData = searchQuery.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
      setData(newData)
    }else{
      setData([])
    }
  }, [searchQuery])
  
  return (
    <SafeAreaProvider style={{flex:1,justifyContent:"center", alignItems:"baseline", width:"100%", height:"100%", backgroundColor:"#1c1c27", paddingHorizontal:15, paddingVertical:12}}>
      <View style={{width:"100%", height:"90%"}}>
        <TextInput placeholder="Search" style={{width:"100%", height:50, borderWidth:1, borderColor:"gray", borderRadius:10, paddingLeft:10, color:"white"}} 
        placeholderTextColor="white"
        autoFocus={true}
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text)
        }}
        />

        {/* <ScrollView style={{width:"100%", height:"100%", marginTop:10}}> */}
          <FlatList
          style={{width:"100%", height:"100%", marginTop:10}}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
                <Pressable style={{width:"100%", height:100, borderRadius:10, marginBottom:10, flex:1,flexDirection:"row", paddingVertical:10, paddingHorizontal:12, gap:8}}
                onPress={() => {
                  navigation.navigate("RestaurantScreen", {item: item})
                }}
                >
                  <Image source={{uri:item.restaurant_image}} style={{width:60, height:60, borderRadius:12, flex:1, borderWidth:1, borderColor:"white"}} />
                  <Text style={{fontFamily:"Poppins-Medium", fontSize:15, color:"white", flex:3, alignSelf:"center"}}>{item.restaurant_name}</Text>
                </Pressable>
              )
            }}
            ListEmptyComponent={() => {
              return (
                <Text style={{fontFamily:"Poppins-Medium", fontSize:15, color:"white", alignSelf:"center"}}>No Restaurants Found</Text>
              )
            }}
          />
          {/* </ScrollView> */}
        
      </View>
    </SafeAreaProvider>
  )
}

export default SearchScreen
