import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { RadioButton } from 'react-native-paper'

const FilterModal = ({visible, setSortModal}) => {
  return (
      <Modal isVisible={visible} 
      style={{flex:1, justifyContent:"flex-end", alignItems:"center",position:"absolute", bottom:0, left:0, width:"100%", margin:0}} 
      onBackdropPress = {() => 
        setSortModal(false) 
      }
      >
        <View style={{backgroundColor:"white", width:"100%", height:300, borderTopLeftRadius:20, borderTopRightRadius:20, paddingHorizontal:15, paddingVertical:15}}>
        <Text>Sort</Text>

        <View>
            
        </View>
        
        </View>
      </Modal>
  )
}

export default FilterModal

const styles = StyleSheet.create({})