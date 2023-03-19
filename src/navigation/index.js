import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import { Text, View, Pressable } from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";


import { 
    FontAwesome5,
    FontAwesome,
    Entypo,
    MaterialIcons

 } from "@expo/vector-icons";

 import { Badge } from "react-native-paper";

import {CartScreen, ProfileScreen, HomeScreen, LoginScreen, RegisterScreen } from "../screens";

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {

const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
});
    
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScren" component={ProfileScreen} 
            options={{
              headerShown: true,
              headerBackVisible:true,
              title:"Profile",
              headerStyle:{
                backgroundColor:"#1c1c27",
                borderBottomWidth:0,
              },
              headerTitleStyle:{
                fontFamily:"Poppins-SemiBold",
                fontSize:18,
              },
              headerTintColor:"#e5e1d8",
              header:({navigation, route}) => {
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
                        <Text style={{fontFamily:"Poppins-SemiBold",fontSize:18,color:"#e5e1d8",paddingTop:5}}>{route.name}</Text>
                    </View>
                )
              }
            }} 
      />
    </ProfileStack.Navigator>
  );
}

const CartStack = createNativeStackNavigator();

function CartStackScreen() {

const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
});

  return (
    <CartStack.Navigator>
      <CartStack.Screen name="CartScreen" component={CartScreen} 
            options={{
              header:({navigation,route}) => {
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
                        <Text style={{fontFamily:"Poppins-SemiBold",fontSize:18,color:"#e5e1d8",paddingTop:5}}>Cart</Text>
                    </View>
                )
              }
            }} 
      />
    </CartStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
    return(
        <Tab.Navigator 
        screenOptions={{header:() => null,
        tabBarActiveTintColor: '#ffad16',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle:{
            backgroundColor:'#28293d',
            borderTopWidth:0,
            elevation:5,
            height:60,
            borderRadius:20,
            shadowOpacity:0.2,
            position:'absolute',
        }
        }}>
            <Tab.Screen 
            name="HomeScreen" 
            component={HomeScreen}
            options={{
                tabBarLabel:"",
                tabBarIcon:({color}) => (
                    <FontAwesome5 name="home" size={22} color={color} />
                )
            }}
             />

             <Tab.Screen
            name="Search"
            component={HomeScreen}
            options={{
                tabBarLabel:"",
                tabBarIcon:({color}) => (
                    <FontAwesome5 name="search" size={22} color={color} />
                )
            }}
            />

            <Tab.Screen
            name="Cart"
            component={CartStackScreen} 
            options={{
                tabBarLabel:"",
                tabBarIcon:({color}) => (
                    <FontAwesome5 name="shopping-cart" size={22} color={color} />
                ),
          }}
            />
            
            <Tab.Screen 
            name="Profile" 
            component={ProfileStackScreen} 
            options={{
                tabBarLabel:"",
                tabBarIcon:({color}) => (
                    <FontAwesome name="user" size={22} color={color} />
                )
            }}
            />

        <Tab.Screen name="Delivery"
          // tabBarLabel : 'Order',
            component={HomeScreen} 
            options={{
                tabBarLabel:"",
                tabBarIcon:({color}) => (
                    <MaterialIcons name="delivery-dining" size={35} color={color} />
                )
            }}
        />

        </Tab.Navigator>
    )
}

export {RootNavigator}
