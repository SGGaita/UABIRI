import react,{useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
import { COLORS, SIZES, FONTS, icons } from '../constants'

export const Payment = ({navigation}) => {

  const [date,setDate] = useState(new Date())

  const handlePayment = () => {

    navigation.navigate("Receipt")

  }


  const renderHeader = () => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: SIZES.padding * 4,
          paddingHorizontal: SIZES.padding * 2
        }}
        onPress={() => {
          navigation.navigate("Onboarding")
          console.log("Navigate")
        }}>
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.black
          }}
        />
        <Text style={{ marginLeft: SIZES.padding * 1.5, color: COLORS.black, ...FONTS.h4 }}
        >Back</Text>
      </TouchableOpacity>
    )
  }

  const renderBody = () => {
    return (
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ marginVertical: 10, color: COLORS.black, alignSelf: 'center', ...FONTS.h1 }} >Checkout</Text>
        <Text style={{ marginTop: 10, marginBottom: 15, borderStyle: 'dotted', borderBottomColor: COLORS.black, borderBottomWidth: 1, color: COLORS.emerald, ...FONTS.h2 }} >Payment Details</Text>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>Date:</Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>{date.toLocaleDateString()}</Text></View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>Time:</Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>{date.toLocaleTimeString()}</Text></View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>Sacco Name:</Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>Lopha Sacco</Text></View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>Route :</Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>Odeon - Aga Khan</Text></View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>Vehicle Registration:</Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>Lopha Sacco</Text></View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>Fare Amount:</Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>50</Text></View>
      </View>
    )
  }

  const renderButton = () => {
    return (
      <View style={{ marginHorizontal: SIZES.padding * 1, marginTop: SIZES.padding * 4 }}>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: COLORS.black,
            borderRadius: SIZES.radius / 1.5,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={handlePayment}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Pay Fare: Kes50</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 5, color: COLORS.black, ...FONTS.h5, color: COLORS.red, alignSelf: 'center' }}>*You will receive an Mpesa prompt to complete the transaction</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderBody()}
      {renderButton()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


