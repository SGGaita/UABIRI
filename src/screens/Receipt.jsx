import react,{useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
import { COLORS, SIZES, FONTS,fontWeights, icons } from '../constants'

export const Receipt = ({navigation}) => {

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
        <Text style={{ marginVertical: 10, color: COLORS.black, alignSelf: 'center', ...FONTS.h1 }} >Receipt</Text>
        <Text style={{ marginTop: 10, marginBottom: 15, alignSelf: 'center', color: COLORS.emerald, ...FONTS.h2 }} >Thank you for making payment</Text>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>Date:</Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>{date.toLocaleString()}</Text></View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>Sent To: </Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>UAbiri</Text></View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>Transaction No:</Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>QFF25KMAPC</Text></View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>Payment Type:</Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>M-PESA Send Money</Text></View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>PayBill:</Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>123456</Text></View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>Amount:</Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>50</Text></View>
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
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Download Receipt</Text>
        </TouchableOpacity>
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


