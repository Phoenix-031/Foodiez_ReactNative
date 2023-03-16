import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";



import { 
    FontAwesome5,
    FontAwesome

 } from "@expo/vector-icons";

import {CartScreen, ProfileScreen, HomeScreen, LoginScreen, RegisterScreen } from "../screens";

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
            component={CartScreen} 
            options={{
                tabBarLabel:"",
                tabBarIcon:({color}) => (
                    <FontAwesome5 name="shopping-cart" size={22} color={color} />
                )
            }}
            />
            
            <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
                tabBarLabel:"",
                tabBarIcon:({color}) => (
                    <FontAwesome name="user" size={22} color={color} />
                )
            }}
            />

        </Tab.Navigator>
    )
}

export {RootNavigator}
