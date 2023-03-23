import React, { useEffect, useMemo, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList, Pressable, TextInput } from 'react-native'
import { useFonts } from 'expo-font';
import { Chip } from 'react-native-paper';

import { RestaurantItemCard } from '../components';

import { useNavigation, useIsFocused } from '@react-navigation/native';

import useStore from '../store/store';

const RestaurantScreen = ({ route }) => {

  const isfocused = useIsFocused()

  const { restaurant_name, rating, distance, reviews, cusines, filters, res_items, restaurant_image } = route.params.item;

  const { totalPrice, cartItems, restaurantReviews } = useStore((state) => ({
    totalPrice: state.totalPrice,
    cartItems: state.cartItems,
    restaurantReviews: state.restaurantReviews
  }))
  
  const navigation = useNavigation()
  const [search,setSearch] = useState('')
  const [data, setData] = useState(res_items)

  useMemo(() => {
    if(search.length > 0){
      const newData = res_items.filter((item) => {
        const itemData = String(item.title).toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
      setData(newData)
    }else{
      setData(res_items)
    }
  },[search])


  useEffect(() => {
    if(isfocused)
      setData(res_items)
  },[isfocused])



      const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'Robotto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
        'Robotto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
        'Robotto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    });

    if(!fontsLoaded)
      return null
  return (
    <SafeAreaView style={{ backgroundColor: "#1c1c27", width: "100%", height: "100%", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", paddingTop: 15 }}>

      <TextInput 
        style={{ width: "90%", height: 40, backgroundColor: "#28293d", borderRadius: 12, paddingHorizontal: 10, color: "white", fontFamily: "Poppins-Regular", fontSize: 14,borderColor:"#ef845d", borderWidth:1 }}
        onChangeText={(text) => setSearch(text)}
        value={search}
        placeholder="Search for items"
        placeholderTextColor={"white"}
      />

          <FlatList
          innitialNumToRender={3}
          maxToRenderPerBatch={3}
          style={{ width: "90%", height: "100%", marginTop: 10, marginBottom: Number(`${cartItems.length > 0 ? 60 : 0}`) }}
            data={data}
            renderItem={({ item }) => {
              return <RestaurantItemCard item={item} restaurant_name={restaurant_name} restaurant_image={restaurant_image} />
            }
            }
            keyextractor={item => item.id}
            ListHeaderComponent={()=>(
              <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderRadius: 12, marginBottom: 10, backgroundColor: "#28293d", }}>

              <View style={{ paddingHorizontal: 10, paddingVertical: 15, flex: 3, }}>
                <Text style={{ fontFamily: "Poppins-Bold", fontSize: 18, color: "#e5e1d8" }}>{restaurant_name}</Text>
                <Text style={{ fontFamily: "Poppins-Bold", fontSize: 10, color: "#e5e1d8" }}>
                  {cusines.map((item, index) => {
                    return item + (index < cusines.length - 1 ? ", " : "")
                  })}
                </Text>
                <Text style={{ fontFamily: "Poppins-Bold", fontSize: 9, color: "gray" }}>Sealdah, Kolkata</Text>
                <Text style={{ fontFamily: "Poppins-Bold", fontSize: 12, color: "#e5e1d8" }}>40-45 min | {distance}km away</Text>
              </View>

              <Pressable style={{ flex: 1, marginRight: 10, borderRadius: 12, height: 110, paddingVertical: 12, backgroundColor: "#1c1c27" }}
                onPress={() => navigation.navigate("ReviewScreen",{restaurantReviews:restaurantReviews })}
              >
                <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 20, alignSelf: "center", color: "#ef845d", height: "40%" }}>{rating}</Text>

                <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", alignSelf: "center", height: "60%" }}>
                  <Text style={{ fontFamily: "Poppins-Medium", fontSize: 12, color: "#ffad16" }}>{reviews}</Text>
                  <Text style={{ fontFamily: "Poppins-Medium", fontSize: 12, color: "#ffad16" }}>Reviews</Text>
                </View>
              </Pressable>

            </View>

            <View style={{ width: "100%", flexDirection: "row", justifyContent: "flex-start", }}>

              <FlatList
              style={{ width: "100%"}}
                data={filters}
                horizontal
                renderItem={({ item }) => {
                  return <Chip style={{ marginRight: 10, marginVertical: 10 }} >{item}</Chip>
                }}
                keyextractor={item => item.id}
              />
            </View>
              </View>
            )}
          />

      {
        cartItems.length > 0 ? <View style={{ position: "absolute", bottom: 0, width: "100%", height: 60, zIndex: 40, backgroundColor: "#1c1c27", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20 }}>
          <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 12, color: "#e5e1d8", textTransform: "uppercase" }}>{cartItems.length} Item Added</Text>
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 12, color: "#e5e1d8" }}>Subtotal : ₹{totalPrice}</Text>
          </View>
          <Pressable style={{ backgroundColor: "#ffad16", padding: 5, paddingHorizontal: 10, borderRadius: 5 }} onPress={() => navigation.navigate('Cart')}>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 12, color: "#1c1c27" }}>Next</Text>
          </Pressable>
        </View> : null
      }

    </SafeAreaView>
  )
}

export default RestaurantScreen