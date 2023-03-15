import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  AntDesign,
  Octicons,
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Feather,
  MaterialIcons
} from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle : { 
          backgroundColor : 'black',
          height : 100
        },
        tabBarIconStyle : {
          color : 'red'
        },
        tabBarActiveTintColor : '#fff',

      }}
      >
        <Tab.Screen name="Home"
        options={{
          tabBarLabel : 'Home',
          tabBarIcon : ({color})=> (
            <FontAwesome5 name="home" size={24} color={color} />
          )
        }}
        component={HomeScreen} />
        <Tab.Screen name="Delivery" options={{
          tabBarLabel : 'Order',
          tabBarIcon : ({color})=> (
            <MaterialIcons name="delivery-dining" size={35} color={color} />
          )
        }} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This is home screen</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>This is settings screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
