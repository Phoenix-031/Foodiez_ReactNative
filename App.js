import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Pressable, Text, View } from 'react-native';
import { Navigation, RootNavigator } from './navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, LoginScreen, RegisterScreen, RestaurantScreen } from './screens';
import ReviewScreen from './screens/ReviewScreen';
import { useFonts } from 'expo-font';
import Header from './components/Header';
import MapScreen from './screens/MapScreen';
import OrderList from './screens/OrderList';

import { Entypo } from '@expo/vector-icons';
import FavouriteOrders from './screens/FavouriteOrders';
import LikedRestaurantsScreen from './screens/LikedRestaurantsScreen';

const Stack = createNativeStackNavigator()

export default function App() {

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('./assets/fonts/SourceSerifPro-Regular.ttf'),
    });
  
  return (
    <PaperProvider>
      {/* <Navigation /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={RootNavigator}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen name="Login" component={LoginScreen} 
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen name="SignUp" component={RegisterScreen} />
          <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} 
            options={{
              header:({navigation, route}) => {
                // console.log(route, navigation)
                return(
                    <View style={{
                    backgroundColor:"#1c1c27",
                    borderBottomWidth:0,
                    paddingHorizontal:20,
                    paddingTop:20,
                    flexDirection:"row",
                    justifyContent:"flex-start",
                    alignItems:"center",
                    gap:6,
                    }}>
                        <Pressable
                        onPress={() => navigation.goBack()}
                        ><Entypo name="chevron-left" size={24} color="#e5e1d8" /></Pressable>
                        <Text style={{fontFamily:"Poppins-SemiBold",fontSize:18,color:"#e5e1d8", paddingTop:5}}>{route.name}</Text>
                    </View>
                )
              }
            }} 
          />
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen name="OrderHistoryScreen" component={OrderList} 
          options={{
            header:({navigation, route}) => {
              // console.log(route, navigation)
              return(
                  <View style={{
                  backgroundColor:"#1c1c27",
                  borderBottomWidth:0,
                  paddingHorizontal:20,
                  paddingTop:20,
                  flexDirection:"row",
                  justifyContent:"flex-start",
                  alignItems:"center",
                  gap:6,
                  }}>
                      <Pressable
                      onPress={() => navigation.goBack()}
                      ><Entypo name="chevron-left" size={24} color="#e5e1d8" /></Pressable>
                      <Text style={{fontFamily:"Poppins-SemiBold",fontSize:18,color:"#e5e1d8", paddingTop:5}}>{route.name}</Text>
                  </View>
              )
            }
          }} />
          <Stack.Screen name="ReviewScreen" component={ReviewScreen}
          options={{
            headerShown: true,
            header:({navigation, route}) => {
              // console.log(route, navigation)
              return(
                  <View style={{
                  backgroundColor:"#1c1c27",
                  borderBottomWidth:0,
                  paddingHorizontal:20,
                  paddingTop:20,
                  flexDirection:"row",
                  justifyContent:"flex-start",
                  alignItems:"center",
                  gap:6,
                  }}>
                      <Pressable
                      onPress={() => navigation.goBack()}
                      ><Entypo name="chevron-left" size={24} color="#e5e1d8" /></Pressable>
                      <Text style={{fontFamily:"Poppins-SemiBold",fontSize:18,color:"#e5e1d8", paddingTop:5}}>{route.name}</Text>
                  </View>
              )
            }
          }}
           />
           <Stack.Screen name="FavouriteOrders" component={FavouriteOrders} 
            options={{
            header:({navigation, route}) => {
              // console.log(route, navigation)
              return(
                  <View style={{
                  backgroundColor:"#1c1c27",
                  borderBottomWidth:0,
                  paddingHorizontal:20,
                  paddingTop:20,
                  flexDirection:"row",
                  justifyContent:"flex-start",
                  alignItems:"center",
                  gap:6,
                  }}>
                      <Pressable
                      onPress={() => navigation.goBack()}
                      ><Entypo name="chevron-left" size={24} color="#e5e1d8" /></Pressable>
                      <Text style={{fontFamily:"Poppins-SemiBold",fontSize:18,color:"#e5e1d8", paddingTop:5}}>{route.name}</Text>
                  </View>
              )
            }
            }} 
           />
           <Stack.Screen name="LikedRestaurantsScreen" component={LikedRestaurantsScreen}
            options={{
              headerShown: true,
              headerBackVisible:true,
              title:"Liked",
              headerStyle:{
                backgroundColor:"#1c1c27",
              },
              headerTitleStyle:{
                fontFamily:"Poppins-SemiBold",
                fontSize:18,
              },
              headerTintColor:"#e5e1d8",
            }} 
           />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
