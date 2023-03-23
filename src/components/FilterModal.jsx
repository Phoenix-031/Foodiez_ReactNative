import { ScrollView, Text, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import Modal from 'react-native-modal'
import { useFonts } from 'expo-font'
import { RadioButton, Button } from 'react-native-paper'

import { Pressable } from 'react-native'

import useStore from '../store/store'

const FilterModal = ({ visible, setSortModal }) => {

  const { sortbyRatingHTL, sortbyRatingLTH, sortbyPriceHTL, sortbyPriceLTH, sortbyDeliveryTime, sortbyDistance, } = useStore((state) => ({
    sortbyRatingHTL: state.sortbyRatingHTL,
    sortbyRatingLTH: state.sortbyRatingLTH,
    sortbyPriceHTL: state.sortbyPriceHTL,
    sortbyPriceLTH: state.sortbyPriceLTH,
    sortbyDeliveryTime: state.sortbyDeliveryTime,
    sortbyDistance: state.sortbyDistance,
  }))

  const [innitialValue, setInnitialValue] = useState('first')

  useMemo(() => {
    if (innitialValue === "RHTL") {
      setSortModal(false)
      sortbyRatingHTL()
    }
    else if (innitialValue === "RLTH") {
      setSortModal(false)
      sortbyRatingLTH()
    }
    else if (innitialValue === "PHTL") {
      setSortModal(false)
      sortbyPriceHTL()
    }
    else if (innitialValue === "PLTH") {
      setSortModal(false)
      sortbyPriceLTH()
    }
    else if (innitialValue === "DTLTH") {
      setSortModal(false)
      sortbyDeliveryTime()
    }
    else if (innitialValue === "DLTH") {
      sortbyDistance()
      setSortModal(false)
    }
  }, [innitialValue])

      const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'Robotto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
        'Robotto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
        'Robotto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    });

    if(!fontsLoaded)
      return null

  return (
    <Modal isVisible={visible}
      style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", position: "absolute", bottom: 0, left: 0, width: "100%", margin: 0, }}
      onBackdropPress={() =>
        setSortModal(false)
      }
    >
      <View style={{ backgroundColor: "#1c1c27", width: "100%", height: 300, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 15, paddingVertical: 15 }}>

        <Text style={{ fontFamily: "Poppins-Bold", color: "#ef845d", fontSize: 18, paddingVertical: 10 }}>Sort</Text>

        <ScrollView>
          <RadioButton.Group onValueChange={newValue => setInnitialValue(newValue)} value="null">
            <Pressable style={{ paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="RLTH" />
              <Text style={{ fontFamily: "Poppins-SemiBold", color: "#ef845d", fontSize: 15 }}>Rating: Low to High</Text>
            </Pressable>
            <View style={{ paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="RHTL" />
              <Text style={{ fontFamily: "Poppins-SemiBold", color: "#ef845d", fontSize: 15 }}>Rating: High to Low</Text>
            </View>
            <View style={{ paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="DTLTH" />
              <Text style={{ fontFamily: "Poppins-SemiBold", color: "#ef845d", fontSize: 15 }}>Delivery Time: Low to High</Text>
            </View>
            <View style={{ paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="DLTH" />
              <Text style={{ fontFamily: "Poppins-SemiBold", color: "#ef845d", fontSize: 15 }}>Distance: Low to High</Text>
            </View>
          </RadioButton.Group>

          {/* <View>
            <Button mode="contained" style={{ backgroundColor: "#ef845d", borderRadius: 10, paddingVertical: 5, width: "80%", alignSelf: "center", marginVertical: 10 }} onPress={() => setSortModal(false)}>
              <Text style={{ fontFamily: "Poppins-Medium", color: "#1c1c27", fontSize: 15 }}>Clear All</Text>
            </Button>
          </View> */}

        </ScrollView>

      </View>
    </Modal>
  )
}

export default FilterModal
