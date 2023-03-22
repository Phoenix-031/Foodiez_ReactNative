// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Button } from 'react-native-paper'
// import { useNavigation } from '@react-navigation/native'


// const BookingScreen = () => {

//     const navigation = useNavigation()
    
//     return (
//         <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
//             <Button mode='contained'
//                 onPress={() => navigation.navigate("BookingOptionScreen")}
//             >Book Table</Button>
//         </View>
//     )
// }

// export default BookingScreen

// const styles = StyleSheet.create({})
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar />
      <View
        style={{
          flex: 1,
          width: "100%",
          paddingHorizontal: 20,
          paddingVertical: 50,
        }}
      >
        <Text style={styles.restaurantname}>TGI FRIDAYS</Text>
        <Text style={styles.foodtype}>Mexican,American,Continental</Text>
        <Text style={styles.restaurantplace}>Elgin,Kolkata </Text>
        <Text style={{
          marginBottom : 10
        }}>57.1 kms</Text>

        <View style={styles.card}>
          <View>
            <Ionicons name="fast-food" size={28} color="black" />
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Book a table
            </Text>
            <Text
              style={{
                color: "grey",
              }}
            >
              Get instant confirmation
            </Text>
          </View>
          <View>
            <Pressable
              style={{
                backgroundColor: "#000",
                width: 30,
                height: 30,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="arrowright" size={20} color="white" />
            </Pressable>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <MaterialIcons name="delivery-dining" size={35} color="black" />
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Food Delivery
            </Text>
            <Text
              style={{
                color: "grey",
              }}
            >
              Get food delivered at home
            </Text>
          </View>
          <View>
            <Pressable
              style={{
                backgroundColor: "#000",
                width: 30,
                height: 30,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="arrowright" size={20} color="white" />
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  restaurantname: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical : 10
  },
  restaurantplace: {
    color: "grey",
    marginVertical : 5
  },
  foodtype: {
    fontWeight: "600",
    marginTop: 10,
  },
  open: {
    color: "green",
    fontWeight: "600",
    borderWidth: 2,
    width: 80,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#D3D3D3",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "white",
    width: "100%",
    height: 75,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingHorizontal: 20,
  },
});