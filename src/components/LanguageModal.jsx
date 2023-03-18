import { Pressable, Text, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { useFonts } from 'expo-font'

const LanguageModal = ({languagemodal, setLanguageModal}) => {

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
    });
  
  return (
    <Modal 
        // isVisible={true} 
        visible={true}
        style={{flex:1, justifyContent:"flex-end", alignItems:"center",position:"absolute", bottom:0, left:0, width:"100%", margin:0}}
        onBackdropPress = {() =>setLanguageModal(false)}
        >
          <Text style={{color:"#e5e1d8",fontFamily:"Poppins-SemiBold",fontSize:18,}}>Select Language</Text>
        <View style={{backgroundColor:"#1c1c27", width:"100%", height:300, borderTopLeftRadius:20, borderTopRightRadius:20, paddingHorizontal:15, paddingVertical:15,flexDirection:"column", gap:8}}>
          <Pressable id='English' style={{
            width:"100%",borderColor:"#e5e1d8",paddingVertical:10,borderWidth:1,borderRadius:12,paddingHorizontal:15,
          }} onPress={(e)=>{
            console.log(e.target._children)
            // setLanguageModal(false)
            }}>
            <Text style={{color:"#e5e1d8",fontFamily:"Poppins-SemiBold",fontSize:18,}}>English</Text>
          </Pressable>
          <Pressable style={{
            width:"100%",borderColor:"#e5e1d8",paddingVertical:10,borderWidth:1,borderRadius:12,paddingHorizontal:15,
          }} onPress={()=>{setLanguageModal(false)}}>
            <Text style={{color:"#e5e1d8",fontFamily:"Poppins-SemiBold",fontSize:18,}}>Bengali</Text>
          </Pressable>
          <Pressable style={{
            width:"100%",borderColor:"#e5e1d8",paddingVertical:10,borderWidth:1,borderRadius:12,paddingHorizontal:15,
          }} onPress={()=>{setLanguageModal(false)}}>
            <Text style={{color:"#e5e1d8",fontFamily:"Poppins-SemiBold",fontSize:18,}}>Hindi</Text>
          </Pressable>
          <Pressable style={{
            width:"100%",borderColor:"#e5e1d8",paddingVertical:10,borderWidth:1,borderRadius:12,paddingHorizontal:15,
          }} onPress={()=>{setLanguageModal(false)}}>
            <Text style={{color:"#e5e1d8",fontFamily:"Poppins-SemiBold",fontSize:18,}}>German</Text>
          </Pressable>
        </View>
    </Modal>
  )
}

export default LanguageModal
