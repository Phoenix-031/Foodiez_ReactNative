import React from 'react'
import {  TextInput, Pressable } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'

import { Ionicons, MaterialIcons, AntDesign} from '@expo/vector-icons'

import useStore from '../store/store'


import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import Welcome from './Welcome'

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [token, setToken] = useState("");
  const navigation = useNavigation()

  const {user, setUser} = useStore((state) => ({
    user: state.user,
    setUser: state.setUser,
  }))

  const [request, response, promptAsync] = Google.useAuthRequest({

  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUser(user);
      console.log(user);
      navigation.navigate('Home')
    } catch (error) {
      // Add your own error handler here
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {user === null ? (
      <Pressable
        style={{width:250, backgroundColor:'#ef845d', borderRadius:10, marginBottom:10, paddingVertical:5, justifyContent:'center', alignItems:'center', flexDirection:'row', paddingVertical:10}}
          onPress={() => {
            promptAsync();
          }}
      >
        <AntDesign name="google" size={26} color="black" />
      </Pressable>
      ) : (
        <Welcome />
      )}
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
