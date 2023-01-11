import react, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  Alert,
  ActivityIndicator
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage'
import * as Animatable from 'react-native-animatable';
import { COLORS, SIZES, icons, images, FONTS } from '../../constants'
import { Timer } from '../../components/'

export const Passenger = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [validNumber, setValidNumber] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setSubmit] = useState(false)
  const [errorMsg, seterrorMsg] = useState("")
  const [show, setShow] = useState(false)


  //Handle text input change
  const handleChange = (text) => {

    let formattedPhoneNumber = text;
    if (text.length === 12) {
      setIsValid(true);
    }
    if (!isValid) {

      if (formattedPhoneNumber.length === 3 || formattedPhoneNumber.length === 7) {
        formattedPhoneNumber += '-';
      }
    }
    setPhoneNumber(formattedPhoneNumber);
  }



  //Handle submit
  const handleContinue = async () => {
    await setShow(!show)

    if (!phoneNumber) {
      Alert.alert('Phone number require', "The phone number is required to proceed")
      await setShow(false)
    }
    if (phoneNumber) {
      if (phoneNumber.length !== 11) {
        Alert.alert('Invalid Phone number', 'Please enter a valid phone number. Format(xxx-xxx-xxx or 710-000-000)');
        await setShow(false)
      } else {
        setValidNumber(`254${phoneNumber.replace(/-/g, '')}`)
        try {
          await AsyncStorage.setItem(
            'userData',
            validNumber
          );
          await setShow(false)
          await navigation.navigate('Home')

        } catch (error) {
          Alert.alert('Error', 'There has been an error setting item to asyncstorage. Try again!')
          await setShow(false)
        }
      }
    }


  };
  // const handleSubmit = async () => {
  //   setSubmit(true)
  //   if (!phoneNumber) {
  //     seterrorMsg("The phone number is required to proceed")
  //     setSubmit(false)
  //   }
  //   if (phoneNumber) {
  //     seterrorMsg(null)

  //     try {
  //       await AsyncStorage.setItem(
  //         'userData',
  //         phoneNumber
  //       );
  //     } catch (error) {
  //       console.log('There has been an error setting item to asyncstorage')
  //     }
  //     navigation.navigate('Home')
  //   }
  // }

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
              autoFocus={true}
              placeholderTextColor={COLORS.gray}
              selectionColor={COLORS.black}
              value={phoneNumber}
              onChangeText={handleChange}
              keyboardType="phone-pad"
              placeholder="xxx-xxx-xxx"
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
      <View style={{ margin: SIZES.padding * 1, justifyContent: 'center' }}>
        <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.linearGradient}>
          <TouchableOpacity
            style={{
              height: 60,

              borderRadius: SIZES.radius / 1.5,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={handleContinue}
            disabled={isSubmitting}
          >
            {show ?
              (
                <ActivityIndicator size={25} color='white' />
              ) : (
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Continue</Text>
              )}
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
        <Animatable.View animation="fadeInUpBig" style={styles.body}>
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
