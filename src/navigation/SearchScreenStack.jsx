import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import { SearchScreen } from "../screens";

import React from "react";
import { Pressable, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const SearchStack = createNativeStackNavigator();

export default function SearchScreenStack({route}) {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
  });

  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="SearchScreen" component={SearchScreen}
        options={{
          header: ({ navigation, route }) => {

            return (
              <View style={{
                backgroundColor: "#1c1c27",
                borderBottomWidth: 0,
                paddingHorizontal: 20,
                paddingTop: 20,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 6,
              }}>
                <Pressable
                  onPress={() => navigation.goBack()}
                ><Entypo name="chevron-left" size={24} color="#e5e1d8" /></Pressable>
                <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 18, color: "#e5e1d8", paddingTop: 5 }}>Search</Text>
              </View>
            )
          }
        }}
      />
    </SearchStack.Navigator>
  );
}