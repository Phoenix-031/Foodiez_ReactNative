import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList, SectionList } from 'react-native'
import { useFonts } from 'expo-font';
import { Chip } from 'react-native-paper';

import { restairantItems } from '../data/restaurantItems';
import RestaurantItemCard from '../components/RestaurantItemCard';

const RestaurantScreen = () => {

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
            <View style={{paddingHorizontal:10, paddingVertical:15, flex:2, backgroundColor:"#28293d", borderRadius:12,marginBottom:10}}>
              <Text style={{fontFamily:"Poppins-Bold", fontSize:18,color:"#e5e1d8"}}>Name of the Restaurant Huh</Text>
              <Text style={{fontFamily:"Poppins-Bold", fontSize:10,color:"#e5e1d8"}}>North India, Chinese, Bririyani</Text>
              <Text style={{fontFamily:"Poppins-Bold", fontSize:9,color:"gray"}}>Sealdah, Kolkata</Text>
              <Text style={{fontFamily:"Poppins-Bold", fontSize:12,color:"#e5e1d8"}}>40-45 min | 5km away</Text>
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
                restairantItems.map((item, index) => {
                  return <RestaurantItemCard item={item} key={index}  />
                })
              }

          {/* </ScrollView> */}
        </ScrollView>
    </SafeAreaView>
  )
}

export default RestaurantScreen