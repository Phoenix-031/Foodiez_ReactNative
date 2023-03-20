import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Modal } from 'react-native-paper'

const SearchRestaurantModal = ({visible,setVisible}) => {
  return (
    <Modal
        isVisible={visible}
        onbackdropPress={() => setVisible(false)}
    >
        <View>
            <Text>sdjkjfngjdsb</Text>
        </View>
    </Modal>
  )
}

export default SearchRestaurantModal

const styles = StyleSheet.create({})