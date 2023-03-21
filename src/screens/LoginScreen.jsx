import React from 'react'
import { TextInput, Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from "react";
import Welcome from './Welcome'
import { ActivityIndicator, Button } from 'react-native-paper'

import { AntDesign } from '@expo/vector-icons'
import PhoneInput from 'react-native-phone-number-input'
import useStore from '../store/store'

// import { expoClientId, androidClientId } from '../config/config'

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";


WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const navigation = useNavigation()

  const { user, setUser } = useStore((state) => ({
    user: state.user,
    setUser: state.setUser,
  }))


      const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'Robotto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
        'Robotto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
        'Robotto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    });

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '585846589791-nmksq7lc0fbvi7u7ivtoe8ff88m17iqr.apps.googleusercontent.com',
    expoClientId: '585846589791-01t5jhqt6v9vo2rihcc3adt58q3dbknt.apps.googleusercontent.com',
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
      navigation.navigate('Home')
      // console.log(user);
      setLoading(false)
    } catch (error) {
      // Add your own error handler here
      console.log(error);
    }
  };

  return (
    loading? (<ActivityIndicator size="large" color="#ef845d" style={{marginTop:"20%"}} /> ) : (
    <SafeAreaProvider style={{backgroundColor:"#1c1c27", width:"100%", height:"100%", flex:1, justifyContent:"center", alignItems:"center"}}>
      <View >
        <Text style={{ color: "#ef845d", fontSize: 25, fontFamily: "Poppins-SemiBold" }}>Welcome to Foodiez</Text>
      </View>
      <View>
        <Text style={{ color: "#ffad16", fontSize: 15, fontFamily: "Poppins-SemiBold", paddingVertical: 16 }}>Get onboard</Text>
      </View>

      <View style={{ width: "100%" }}>
        <PhoneInput
          defaultCode="IN"
          layout="first"
          onChangeText={text => {
            setPhoneNumber(text)
          }}
          onChangeFormattedText={text => {
            setPhoneNumber(text)
          }}
          containerStyle={{ width: '100%', backgroundColor: "#1c1c27", paddingVertical: 15, paddingHorizontal: 10 }}
          textContainerStyle={{ borderWidth: 1, borderColor: '#ef845d', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10 }}
          textInputStyle={{ fontSize: 16, color: "white" }}
          withDarkTheme
          autoFocus
        />
        <Button mode="contained" buttonColor='#28293d' textColor='white' style={{ marginVertical: 15, width: "70%", alignSelf: "center", paddingVertical: 8, fontSize: 20, fontFamily: "Poppins-SemiBold", color: "#ef845d" }}><Text style={{ fontSize: 15, fontFamily: "Poppins-SemiBold", color: "#ef845d" }}>Continue</Text></Button>
      </View>

      <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 12, color: "white", paddingVertical: 10 }}>OR</Text>
      <View style={styles.container}>
        {
           (
            user === null ? (
              <Pressable
                style={{ width: 80, backgroundColor: '#ef845d', borderRadius: 10, marginBottom: 10, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: 10 }}
                onPress={() => {
                  setLoading(true)
                  promptAsync();
                }}
              >
                <AntDesign name="google" size={30} color="black" style={{ paddingVertical: 10 }} />
              </Pressable>
            ) : null
          )
        }
      </View>
    </SafeAreaProvider>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c27",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
