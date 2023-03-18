import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { useFonts } from 'expo-font'
import { RadioButton, Button } from 'react-native-paper'

const FilterModal = ({visible, setSortModal}) => {

  const [innitialValue, setInnitialValue] = React.useState('first')
  
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
    });
  
  return (
      <Modal isVisible={visible} 
      style={{flex:1, justifyContent:"flex-end", alignItems:"center",position:"absolute", bottom:0, left:0, width:"100%", margin:0, }} 
      onBackdropPress = {() => 
        setSortModal(false) 
      }
      >
        <View style={{backgroundColor:"#1c1c27", width:"100%", height:300, borderTopLeftRadius:20, borderTopRightRadius:20, paddingHorizontal:15, paddingVertical:15}}>

          <Text style={{fontFamily:"Poppins-Bold", color:"#ef845d", fontSize:18, paddingVertical:10}}>Sort</Text>

          <ScrollView>
            <RadioButton.Group onValueChange={newValue => setInnitialValue(newValue)} value={innitialValue}>
              <View style={{ paddingVertical:10, paddingHorizontal:10,flexDirection:"row", alignItems:"center"}}>
                <RadioButton value="PLTH" />
                <Text style={{fontFamily:"Poppins-SemiBold", color:"#ef845d", fontSize:15}}>Price: Low to High</Text>
              </View>
              <View style={{ paddingVertical:10, paddingHorizontal:10,flexDirection:"row", alignItems:"center"}}>
                <RadioButton value="PHTL" />
                <Text style={{fontFamily:"Poppins-SemiBold", color:"#ef845d", fontSize:15}}>Price: High to Low</Text>
              </View>
              <View style={{ paddingVertical:10, paddingHorizontal:10,flexDirection:"row", alignItems:"center"}}>
                <RadioButton value="RLTH" />
                <Text style={{fontFamily:"Poppins-SemiBold", color:"#ef845d", fontSize:15}}>Rating: Low to High</Text>
              </View>
              <View style={{ paddingVertical:10, paddingHorizontal:10,flexDirection:"row", alignItems:"center"}}>
                <RadioButton value="RHTL" />
                <Text style={{fontFamily:"Poppins-SemiBold", color:"#ef845d", fontSize:15}}>Rating: High to Low</Text>
              </View>
              <View style={{ paddingVertical:10, paddingHorizontal:10,flexDirection:"row", alignItems:"center"}}>
                <RadioButton value="DTLTH" />
                <Text style={{fontFamily:"Poppins-SemiBold", color:"#ef845d", fontSize:15}}>Delivery Time: Low to High</Text>
              </View>
              <View style={{ paddingVertical:10, paddingHorizontal:10,flexDirection:"row", alignItems:"center"}}>
                <RadioButton value="DLTH" />
                <Text style={{fontFamily:"Poppins-SemiBold", color:"#ef845d", fontSize:15}}>Distance: Low to High</Text>
              </View>
            </RadioButton.Group>

        <View>
          <Button mode="contained" style={{backgroundColor:"#ef845d", borderRadius:10, paddingVertical:5, width:"80%", alignSelf:"center", marginVertical:10}} onPress={() => setSortModal(false)}>
            <Text style={{fontFamily:"Poppins-Medium", color:"#1c1c27", fontSize:15}}>Clear All</Text>
          </Button>
        </View>

          </ScrollView>
        
        </View>
      </Modal>
  )
}

export default FilterModal
