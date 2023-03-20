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

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "585846589791-nmksq7lc0fbvi7u7ivtoe8ff88m17iqr.apps.googleusercontent.com",

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
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };

  return (
    // <View style={styles.container}>
    //   {userInfo === null ? (
    //     <Button
    //       title="Sign in with Google"
    //       disabled={!request}
    //       onPress={() => {
    //         promptAsync();
    //       }}
    //     />
    //   ) : (
    //     <Text style={styles.text}>{userInfo.name}</Text>
    //   )}
    // </View>
    <Text>Login screen</Text>
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
