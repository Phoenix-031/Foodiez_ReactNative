import React from 'react'
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'

import { Ionicons, MaterialIcons, AntDesign} from '@expo/vector-icons'

const RegisterScreen = () => {

  const navigation = useNavigation()
  
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),

    
    });
  
  return (
    <SafeAreaProvider style={styles.container}>
        {/* <Image source={require('../../assets/logo.png')} style={styles.logo} /> */}
        <View style={{width:"90%"}}>
          <View style={{ width:'100%'}}>
            <Text style={{fontFamily:"Poppins-Medium", fontSize:20, color:"#ffad16"}}>SignUp</Text>

            <View style={{gap:10}}>
              <TextInput placeholderTextColor="#e5e1d8" style={{borderColor:"#e5e1d8", color:"#e5e1d8" ,borderBottomWidth:1, paddingHorizontal:10, paddingVertical:12, fontFamily:"SourceSerifPro-Regular", fontSize:15}} placeholder="Email ID" />
              <TextInput placeholderTextColor="#e5e1d8" style={{borderColor:"#e5e1d8", color:"#e5e1d8" ,borderBottomWidth:1, paddingHorizontal:10, paddingVertical:12, fontFamily:"SourceSerifPro-Regular", fontSize:15}} placeholder="Password" />

              <Button mode='contained' style={{fontFamily:"Poppins-SemiBold", fontSize:20, width:'80%', alignSelf:"center", marginTop:25, paddingVertical:8, borderRadius:10}} buttonColor='#ef845d' uppercase>Register</Button>
            </View>

          </View>

          <View style={{width:'100%', justifyContent:"space-around", alignItems:"center", flexDirection:"row", paddingTop:50, paddingBottom:30}}>
            <Pressable style={styles.logo}>
              <Ionicons name="logo-google" size={24} color="#e5e1d8" />
            </Pressable>
            <Pressable style={styles.logo}>
              <MaterialIcons name="facebook" size={24} color="#e5e1d8" />
            </Pressable>
            <Pressable style={styles.logo}>
              <AntDesign name="twitter" size={24} color="#e5e1d8" />
            </Pressable>
          </View>

          <View style={{width:"100%",justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
            <View style={{ fontSize:15, color:"#ffad16",justifyContent:"center", alignItems:"center", flexDirection:"row", gap:5}}>
              <Text style={{fontFamily:"Poppins-Regular", fontSize:15, color:"#e5e1d8"}}>Already have an account?</Text> 
              <Pressable onPress={()=>navigation.navigate('Login')}>
                <Text style={{color:"#ef845d", fontFamily:"Poppins-SemiBold", fontSize:15}}>Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#1c1c27"
  },
  logo:{
   borderRadius:10, paddingVertical:20, paddingHorizontal:20, borderWidth:1,
   borderColor:"gray"
  }
})

export default RegisterScreen