import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

const LikeScreenModal = ({item, modal, setModal}) => {
  return (
    <Modal isVisible={modal}
      style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", position: "absolute", bottom: 0, left: 0, width: "100%", margin: 0,height:"100%" }}
      onBackdropPress={() =>
        setModal(false)
      }
    >
      <View style={{ backgroundColor: "#1c1c27", width: "100%", height: 300, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 15, paddingVertical: 15 }}>

        <Text style={{ fontFamily: "Poppins-Bold", color: "#ef845d", fontSize: 18, paddingVertical: 10 }}>{item.restaurant_name}</Text>

        <View style={{width:"100%", flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:12, paddingVertical:12}}>
            <Text style={{ fontFamily: "Poppins-SemiBold", color: "#ef845d", fontSize: 15 }}>Share</Text>
            <MaterialCommunityIcons name="share" size={24} color="white" />
        </View>

        <View style={{width:"100%", flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:12, paddingVertical:12}}>
            <Text style={{ fontFamily: "Poppins-SemiBold", color: "#ef845d", fontSize: 15 }}>Delete</Text>
            <Ionicons name="trash-bin-outline" size={24} color="white" />
        </View>

      </View>
    </Modal>
  )
}

export default LikeScreenModal

const styles = StyleSheet.create({})