import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'

const LanguageModal = ({languagemodal, setLanguageModal}) => {
  return (
    <Modal 
        // isVisible={true} 
        visible={true}
        style={{flex:1, justifyContent:"flex-end", alignItems:"center",position:"absolute", bottom:0, left:0, width:"100%", margin:0}}
        onBackdropPress = {() =>setLanguageModal(false)}
        >
        <View style={{backgroundColor:"white", width:"100%", height:300, borderTopLeftRadius:20, borderTopRightRadius:20, paddingHorizontal:15, paddingVertical:15}}>
        <Text>Sort</Text>
        </View>
    </Modal>
  )
}

export default LanguageModal

const styles = StyleSheet.create({})