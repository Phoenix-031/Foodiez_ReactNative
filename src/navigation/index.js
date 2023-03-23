import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  FontAwesome5,
  FontAwesome,
  Entypo,
  MaterialIcons,
  Ionicons,

} from "@expo/vector-icons";

import { 
  HomeScreen, 
  LoginScreen, 
} from "../screens";

import SearchScreenStack from "./SearchScreenStack";
import OrderScreenStack from "./OrderScreenStack";
import ProfileScreenStack from "./ProfileScreenStack";
import CartScreenStack from "./CartScreenStack";
import DinningScreenStack from "./DinningScreenStack";

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
        tabBarActiveTintColor: '#ffad16',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#28293d',
          borderTopWidth: 0,
          elevation: 5,
          height: 60,
          borderRadius: 20,
          shadowOpacity: 0.2,
          position: 'absolute',
        }
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={22} color={color} />
          )
        }}
      />

      <Tab.Screen
      name="Search"
        component={SearchScreenStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search" size={22} color={color} />
          )
        }}
      />

      <Tab.Screen
      name="Dinning"
        component={DinningScreenStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="restaurant" size={22} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreenStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="shopping-cart" size={22} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreenStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={22} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Delivery"
        component={OrderScreenStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="delivery-dining" size={35} color={color} />
          )
        }}
      />

    </Tab.Navigator>
  )
}

export { RootNavigator }
