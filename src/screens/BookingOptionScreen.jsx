import React,{ useState } from 'react';
import { Text, View, StyleSheet,ScrollView, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
import { Button } from 'react-native-paper';

  
export default function BookingOptionScreen(){
  

        const days = ['Today', 'Tomorrow', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        const dates = ['22 Mar', '23 Mar', '24 Mar', '25 Mar', '26 Mar', '27 Mar', '28 Mar', '29 Mar', '30 Mar', '31 Mar'];
        const clocks = ['1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM']

        // merge the above two arrays 

        const dayDate = days.map((day, index) => {
            return {
                day: day,
                date: dates[index]
            }
        });

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
    <View style={styles.container}>
      <Text style={styles.restaurantname}>TGI FRIDAYS</Text>
      <Text style={styles.restaurantplace}>Elgin,Kolkata</Text>
      <Text style={styles.step1}>Step 1 of 2: Select Date and Time</Text>
      <ScrollView scrollEventThrottle={16}>
      <View style={{flex: 1,backgroundColor:'#1c1c27',paddingTop:20}}>
      <Text style={styles.whatday}>What Day?</Text>
      <ScrollView 
      horizontal={true}
      showsHorizontalScrollIndicator={false}>

        {dayDate.map((item, index) => {
            return (
                <View style={styles.cardtext} key={index}>
                    <Text style={{color:"#ffad16"}}>{item.day}</Text>
                    <Text style={{color:"#ffad16"}}>{item.date}</Text>
                </View>
            )
        })}
  </ScrollView>
</View>
<View style={{flex: 1,backgroundColor:'#1c1c27',paddingTop:20}}>
      <Text style={styles.whatday}>How Many People?</Text>
      <ScrollView 
      horizontal={true}
      showsHorizontalScrollIndicator={false}>

        {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                return (
                    <View style={styles.cardtext} key={index}>
                        <Text style={{color:"#ffad16", fontSize:18}}>{item}</Text>
                    </View>
                )
            })
        }
  </ScrollView>
</View>
<View style={{flex: 1,backgroundColor:'#1c1c27',paddingTop:20}}>
      <Text style={styles.whatday}>What Time?</Text>
      <ScrollView 
      horizontal={true}
      showsHorizontalScrollIndicator={false}>

        {clocks.map((item, index) => {
            return (
                <View style={styles.cardtext} key={index}>
                    <Text style={{color:"#ffad16"}}>{item}</Text>
                </View>
            )
        })}

  </ScrollView>
</View>
    </ScrollView> 
    <Button mode="contained">Book</Button>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
    backgroundColor:"#1c1c27"
  },
  cardtext:{
   borderWidth:2,
   borderRadius:12,
   width:100,
   height:60,
   alignItems:'center',
   justifyContent:'center',
   paddingTop:5,
   margin:10,
   fontFamily:"Poppins-SemiBold",
   borderColor:"#ef845d"
  },
  cardtextpeople:{
   borderWidth:2,
   borderRadius:12,
   width:60,
   height:60,
   alignItems:'center',
   justifyContent:'center',
   margin:10,
   fontFamily:"Poppins-SemiBold",
   borderColor:"#ef845d"
  },
  restaurantname: {
     fontWeight:'bold',
     fontSize:20,
     fontFamily:"Poppins-SemiBold",
     color:"#ef845d"
  },
  restaurantplace: {
    color:'grey',
    fontFamily:"Poppins-SemiBold",
    color:"#ef845d"
  },
  
  step1: {
   fontWeight: 'bold',
   fontSize:20,
   marginTop: 12,
     fontFamily:"Poppins-SemiBold",
     color:"#ef845d",
  },
 
  whatday: {
    fontFamily:"Poppins-SemiBold",
    fontSize:18,
    backgroundColor:"#1c1c27",
    color:"white",
    paddingLeft:5,
  },
});

