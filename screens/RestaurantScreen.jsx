import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList, Pressable } from 'react-native'
import { useFonts } from 'expo-font';
import { Chip } from 'react-native-paper';

import RestaurantItemCard from '../components/RestaurantItemCard';

import { useNavigation } from '@react-navigation/native';

import useStore from '../store/store';

const RestaurantScreen = () => {

  const {menuItems} = useStore((state) => ({
    menuItems: state.menuItems,
  }))

  const navigation = useNavigation()

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('../assets/fonts/SourceSerifPro-Regular.ttf'),
    });
  
  return (
    <SafeAreaView style={{backgroundColor:"#1c1c27", width:"100%", height:"100%", flexDirection:"column", justifyContent:"flex-start", alignItems:"center", paddingTop:15}}>
        <ScrollView style={{width:"90%", height:"100%", marginTop:10, }}>
          {/* <ScrollView style={{backgroundColor:"#28293d", borderRadius:12, borderWidth:1}}> */}

          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", borderRadius:12,marginBottom:10, backgroundColor:"#28293d",}}>

            <View style={{paddingHorizontal:10, paddingVertical:15, flex:3,}}>
              <Text style={{fontFamily:"Poppins-Bold", fontSize:18,color:"#e5e1d8"}}>Name of the Restaurant Huh</Text>
              <Text style={{fontFamily:"Poppins-Bold", fontSize:10,color:"#e5e1d8"}}>North India, Chinese, Bririyani</Text>
              <Text style={{fontFamily:"Poppins-Bold", fontSize:9,color:"gray"}}>Sealdah, Kolkata</Text>
              <Text style={{fontFamily:"Poppins-Bold", fontSize:12,color:"#e5e1d8"}}>40-45 min | 5km away</Text>
            </View>

            <Pressable style={{flex:1, marginRight:10, borderRadius:12, height:110, paddingVertical:12, backgroundColor:"#1c1c27"}}
              onPress={() => navigation.navigate("ReviewScreen")}
            >
              <Text style={{fontFamily:"Poppins-SemiBold", fontSize:20, alignSelf:"center", color:"#ef845d", height:"40%"}}>4.5</Text>

              <View style={{flexDirection:"column", justifyContent:"center", alignItems:"center", alignSelf:"center",height:"60%" }}>
                <Text style={{fontFamily:"Poppins-Medium", fontSize:12, color:"#ffad16"}}>2k</Text>
                <Text style={{fontFamily:"Poppins-Medium", fontSize:12, color:"#ffad16"}}>Reviews</Text>
              </View>
            </Pressable>

          </View>

            <View style={{width:"100%", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", gap:10, paddingHorizontal:10, paddingVertical:10}}>
              <Chip>BestSeller</Chip>
              <Chip>Rated 4.0+</Chip>
            </View>

              {/* <SectionList
                  sections={restairantItems}
                  renderItem={({item}) => {
                    <RestaurantItemCard item={item}/>
                  }}
                  keyExtractor={item => item.id}
              /> */}

              {
                menuItems.map((item, index) => {
                  return <RestaurantItemCard item={item} key={index}  />
                })
              }

          {/* </ScrollView> */}
        </ScrollView>
    </SafeAreaView>
  )
}

export default RestaurantScreen