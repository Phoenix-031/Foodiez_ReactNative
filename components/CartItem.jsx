import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native' 
import { useFonts } from 'expo-font'
import { Badge } from 'react-native-paper'
import useStore from '../store/store'

const CartItem = ({item}) => {

    const [quan,setQuan] = useState(Number(item.quantity))
    // const [image_uri,setImage_uri] = useState(item.image_uri)
    const image_uri = item.image_uri

    const {cartItems, removeFromCart} = useStore((state) => ({
        cartItems: state.cartItems,
        removeFromCart: state.removeFromCart,
    }))

    useEffect(() => {
        if(!quan)
        removeFromCart(itemname)
            
    }, [quan])

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Robotto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'Robotto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
        'Robotto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'Robotto-Light': require('../assets/fonts/Roboto-Light.ttf'),
        'Enriqueta-Regular': require('../assets/fonts/Enriqueta-Regular.ttf'),
        'Enriqueta-Bold': require('../assets/fonts/Enriqueta-Bold.ttf'),
        'Enriqueta-Medium': require('../assets/fonts/Enriqueta-Medium.ttf'),
        'Enriqueta-SemiBold': require('../assets/fonts/Enriqueta-SemiBold.ttf'),
        'SourceSerifPro-Regular': require('../assets/fonts/SourceSerifPro-Regular.ttf'),
        'SourceSerifPro-Bold': require('../assets/fonts/SourceSerifPro-Bold.ttf'),
        'SourceSerifPro-SemiBold': require('../assets/fonts/SourceSerifPro-SemiBold.ttf'),
    
    });

    
  return (
    <View style = {styles.container}>
        <Image source={{uri:image_uri}}  
        style={styles.cartimg}
        />
        <View style={styles.cartcontent}>
            <Text style={{fontFamily:"Poppins-Regular", fontSize:18, color:"#e5e1d8",}}>{item.itemname} </Text>
            <Text style={{fontFamily:'SourceSerifPro-Regular', color:"#e5e1d8", width:"80%", flex:1,}}>{item.description}</Text>
            <Text style={{color:"#e5e1d8"}}>Rs. {item.price}</Text>

        <View style={styles.cartquantity}>
            <View style={{flexDirection:"row",gap:20}}>
                <Badge style={{backgroundColor:"#ffad16", borderRadius:5, color:"#000", fontSize:20, width: 30 ,height: 30, justifyContent:"center", alignItems:"center"}}
                onPress={() => setQuan((quan) => quan + 1)}
                >+</Badge>
                <Text style={{color:"#e5e1d8", fontSize:20}}>{quan}</Text>
                <Badge style={{backgroundColor:"#ffad16", borderRadius:5, color:"#000", fontSize:20, width: 30 ,height: 30, justifyContent:"center", alignItems:"center"}}
                onPress={() => setQuan((quan) => quan - 1)}
                >-</Badge>
            </View>
        </View>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        borderColor:"gray",
        flexDirection: 'row',
        gap:10,
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:5,
        backgroundColor:"#28293d"
    },
    cartimg:{
        width: 100,
        height: 100,
        borderRadius: 12,
        resizeMode: 'cover',
        flex:1,
    },
    cartcontent:{
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'baseline',
        color:"#313539",
        gap:1,
        fontWeight: 'semi-bold',
        flex:2,
        
    },
    cartquantity:{
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems:'center',
        flex:1,
        alignSelf:'flex-end',
        gap:1,
    }
})

export default CartItem