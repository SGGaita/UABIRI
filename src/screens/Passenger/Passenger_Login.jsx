import react, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage'
import * as Animatable from 'react-native-animatable';
import { COLORS, SIZES, icons, images, FONTS } from '../../constants'
import { Timer } from '../../components/'

export const Passenger = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [isSubmitting, setSubmit] = useState(false)
  const [errorMsg, seterrorMsg] = useState("")


//Handle submit
const handleSubmit = async() => {
  setSubmit(true)
  if (!phoneNumber) {
    seterrorMsg("The phone number is required to proceed")
    setSubmit(false)
  }
  if (phoneNumber) {
    seterrorMsg(null)

    try {
      await AsyncStorage.setItem(
        'userData',
        phoneNumber
      );
    } catch (error) {
      console.log('There has been an error setting item to asyncstorage')
    }
    navigation.navigate('Home')
  }
}

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, left: 10, justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <Image
                source={icons.back}
                resizeMode="contain"
                style={{
                  width: 20,
                  tintColor: COLORS.white,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, right: 10, alignItems: 'flex-end', justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Information')}
            >
              <Image
                source={icons.headphones}
                resizeMode="contain"
                style={{
                  width: 20,
                  tintColor: COLORS.white,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 2, left: 10 }}>

          <Timer />
          <Animatable.Text animation="fadeInLeft" style={{ fontWeight: '700', ...FONTS.h1, color: COLORS.white }}>Welcome!</Animatable.Text>
        </View>
      </View>
    )
  }


  const renderBody = () => {
    return (
      <View
        style={{
          marginVertical: SIZES.padding * 5,
          marginHorizontal: SIZES.padding * 3,
        }}>

        {/**Title*/}
        <View
          style={{
            marginBottom: SIZES.padding * 4,
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 31, color: COLORS.blue }}>Pay your fare conveniently via you phone! </Text>
        </View>

        {/**Phone number */}
        <View style={{ marginTop: SIZES.padding * 1 }}>
          <Text style={{ textAlign: "left", color: COLORS.blue, ...FONTS.body3 }}>
            Enter your mobile number
          </Text>

          {
            errorMsg &&
            <Text style={{ color: COLORS.red }}>*{errorMsg}</Text>
          }

          <View
            style={{
              flex: 1,
              flexDirection: "row"
            }}
          >
            <TextInput
              style={{
                flex: 2,
                marginVertical: SIZES.padding,
                borderBottomColor: COLORS.blue,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.black,
                ...FONTS.body3,
                fontWeight: "700",
              }}
              value="+254 (0)"
              disabled="true"
              selectionColor={COLORS.black}
              keyboardType="numeric"
            />

            <TextInput
              style={{
                flex: 10,
                marginVertical: SIZES.padding,
                borderBottomColor: COLORS.blue,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.black,
                ...FONTS.body3,
                fontWeight: "700"
              }}
              type="tel"
              format="+1 (###) ###-####"
              autoFocus={true}
              placeholder="700-123-456"
              placeholderTextColor={COLORS.gray}
              selectionColor={COLORS.black}
              keyboardType="numeric"
              onChangeText={text => setPhoneNumber('254' + '' + text)}
            />
          </View>
 </View>

          {/* <View
            style={{
              flex: 1,
              flexDirection: "row"
            }}
          >

            <TextInput
              style={{
                flex: 1,
                marginVertical: SIZES.padding,
                borderBottomColor: COLORS.blue,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.black,
                ...FONTS.body3,
                fontWeight: "700"
              }}
              type="tel"
              format="+254 (###) ###-####"
              autoFocus={true}
              placeholder="700-123-456"
              placeholderTextColor={COLORS.gray}
              selectionColor={COLORS.black}
              keyboardType="numeric"
              onChangeText={text => setPaymentData('254' + '' + text)}
            />
          </View> 


        </View> */}
      </View>

    )
  }

  const renderButton = () => {
    return (
      <View style={{ margin: SIZES.padding * 1,  justifyContent: 'center' }}>
        <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.linearGradient}>
        <TouchableOpacity
          style={{
            height: 60,
            
            borderRadius: SIZES.radius / 1.5,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={handleSubmit}
          disabled={isSubmitting}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Continue</Text>
        </TouchableOpacity>
        </LinearGradient>
       
      </View>
    )
  }

  

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <ImageBackground style={{ flex: 1, backgroundColor: COLORS.blue }} source={images.nairobi}>
        {renderHeader()}
        <Animatable.View  animation="fadeInUpBig" style={styles.body}>
          {renderBody()}
          {renderButton()}
        </Animatable.View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue
  },

  header: {

    flex: 1,
    flexDirection: "column",
   },

  body: {
    backgroundColor: COLORS.white,
    flex: 3,
    justifyContent: "flex-start",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

  },
})
