import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Searchbar, Button, Surface, Chip } from 'react-native-paper'
import ReviewCard from '../components/ReviewCard'
import { useFonts } from 'expo-font'


const ReviewScreen = () => {

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('../assets/fonts/SourceSerifPro-Regular.ttf'),
    });
  
  return (
    <SafeAreaProvider style={{backgroundColor:"#1c1c27", width:"100%", height:"100%", flexDirection:"column", justifyContent:"flex-start", alignItems:"center", paddingTop:15}}>
      
      <View style={{width:"90%",height:"100%"}}>

        <Searchbar />

        <View horizontal style={{width:"100%", flexDirection:"row", justifyContent:"flex-start", alignItems:"center",paddingVertical:20}}>
          <ScrollView horizontal>
            <Chip style={{marginRight:8, backgroundColor:"#28293d"}} selectedColor="#ffad16" textStyle="Poppins-Medium">Verified</Chip>
            <Chip style={{marginRight:8, backgroundColor:"#28293d"}} selectedColor="#ffad16" textStyle="Poppins-Medium">With Photos</Chip>
            <Chip style={{marginRight:8, backgroundColor:"#28293d"}} selectedColor="#ffad16" textStyle="Poppins-Medium">Latest</Chip>
            <Chip style={{marginRight:8, backgroundColor:"#28293d"}} selectedColor="#ffad16" textStyle="Poppins-Medium">Detailed Reviews</Chip>
          </ScrollView>
        </View>
      
      <ScrollView>

        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />

      </ScrollView>

      <Button mode='contained' style={{marginVertical:10, backgroundColor:"#ffad16", paddingVertical:6,}} uppercase textColor="white"
      contentStyle={{fontSize:25, fontFamily:"Poppins-Medium"}}
      >Write a Review</Button>
      </View>

    </SafeAreaProvider>
  )
}

export default ReviewScreen

const styles = StyleSheet.create({})