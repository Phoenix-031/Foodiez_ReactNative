import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const UserProfile = () => {
  return (
    <View>
      <ScrollView>
        <Image source={require('../assets/images/Profile.png')} />
        <Text>Username</Text>
        <View>
            <Text>Followers</Text>
            <Text>Following</Text>
        </View>
        <Button>Add Review</Button>
        
      </ScrollView>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({})