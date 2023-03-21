import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList, Pressable, TextInput } from 'react-native'
import { useFonts } from 'expo-font';
import { Chip } from 'react-native-paper';

import { RestaurantItemCard } from '../components';

import { useNavigation } from '@react-navigation/native';

import useStore from '../store/store';

const RestaurantScreen = ({ naviagation, route }) => {

  const { restaurant_name, rating, distance, reviews, cusines, filters, res_items } = route.params.item;

  const { menuItems, addToCart, totalPrice, cartItems, removeFromCart, restaurantReviews } = useStore((state) => ({
    menuItems: state.menuItems,
    addToCart: state.addToCart,
    totalPrice: state.totalPrice,
    cartItems: state.cartItems,
    removeFromCart: state.removeFromCart,
    restaurantReviews: state.restaurantReviews
  }))
  
  const navigation = useNavigation()
  const [search,setSearch] = useState('')
  const [data, setData] = useState(res_items)

  useEffect(() => {
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

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
  });

  return (
    <SafeAreaView style={{ backgroundColor: "#1c1c27", width: "100%", height: "100%", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", paddingTop: 15 }}>

      <TextInput 
        style={{ width: "90%", height: 40, backgroundColor: "#28293d", borderRadius: 12, paddingHorizontal: 10, color: "white", fontFamily: "Poppins-Regular", fontSize: 14,borderColor:"#ef845d", borderWidth:1 }}
        onChangeText={(text) => setSearch(text)}
        value={search}
        placeholder="Search for items"
        placeholderTextColor={"white"}
      />
      
      <ScrollView style={{ width: "90%", height: "100%", marginTop: 10, marginBottom: Number(`${cartItems.length > 0 ? 60 : 0}`) }}>
        {/* <ScrollView style={{backgroundColor:"#28293d", borderRadius:12, borderWidth:1}}> */}

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
          <ScrollView horizontal style={{ width: "100%" }}>
            {
              filters.map((item, index) => {
                return <Chip key={index} style={{ marginRight: 10, marginVertical: 10 }} >{item}</Chip>
              })
            }
          </ScrollView>
        </View>

        {/* <SectionList
                  sections={restairantItems}
                  renderItem={({item}) => {
                    <RestaurantItemCard item={item}/>
                  }}
                  keyExtractor={item => item.id}
              /> */}

        {/* {
          data.map((item, index) => {
            return <RestaurantItemCard item={item} restaurant_name={restaurant_name} key={index} />
          })
        } */}
        {
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return <RestaurantItemCard item={item} restaurant_name={restaurant_name} />
            }
            }
            keyextractor={item => item.id}
          />
        }

        {/* </ScrollView> */}
      </ScrollView>

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