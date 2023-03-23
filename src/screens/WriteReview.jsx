import * as React from 'react';
import { Text, View, StyleSheet,TextInput ,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Write a review</Text>
      <TextInput editable
        multiline style={styles.input}></TextInput>
        <TouchableOpacity >
        <View style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
        </View>
        </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1c1c27',
    padding: 8,
  },
  heading:{
   marginLeft:20,
   fontSize:20,
   fontWeight:'bold',
   color:'#ffad16',
  },
  input:{
    borderWidth: 1,
    backgroundColor:'#28293D',
    borderColor:'#ffad16',
    padding:8,
    margin:10,
    width:350,
    height:200,
    borderRadius:20,
    color:'white',
  },
  button:{
    borderRadius: 8,
    paddingVertical:14,
    paddingHorizontal:10,
    width:150,
   marginLeft:100,
    
    backgroundColor:'#ffad16',
  },
  buttonText:{
    color:'gray',
    fontWeight: 'bold',
    textTransform:'uppercase',
    fontSize:16,
    textAlign:'center',
    
  }
  
});
