import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput,Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const OtpInput = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleOtpSubmit = () => {
    const otpValue = otp.join('');
    // submit the OTP value to server or perform some other action
  };

  const handleBarCodeScanned = ({ data }) => {
    const newOtp = data.split('');
    setOtp(newOtp);
  };

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'Robotto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
        'Robotto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
        'Robotto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    });

  return (
    <View style={styles.container}>
        <Text style={{color:"#ef845d", fontSize:18, fontFamily:"Poppins-SemiBold", marginBottom:18}}>Enter OTP: </Text>
      <View style={styles.inputContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            value={value}
            onChangeText={(text) => handleOtpChange(text, index)}
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleOtpSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#1c1c27"
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    width: '15%',
    marginLeft:5,
  },
  button: {
    backgroundColor:"#28293d",
    color:"#ef845d",
    borderRadius:12,
    width:150,
    paddingVertical:15,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  camera: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
});

export default OtpInput;
