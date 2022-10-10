import react, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  Button,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


import { COLORS, SIZES, icons, images, FONTS } from '../constants'
import { Home, Onboarding } from '../screens'

export const Passenger = ({ navigation }) => {
  const [data, setData] = useState(null)
  const [isSubmitting, setSubmit] = useState(false)
  const [errorMsg, seterrorMsg] = useState("")


  const renderHeader = () => {
    return (
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center", elevation: 5, height: 50, backgroundColor: COLORS.black }}>
        <View style={{ flex: 1, height: 50, justifyContent: "center" }}>
          <Button
            onPress={() => alert('This is a button!')}
            title="Back"
            color="#010000"
          />
        </View>
      </View>
    )
  }

  const renderLogo = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 5,
          height: 150,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Image
          source={images.uabiriLogo}
          resizeMode="contain"
          style={{
            width: "60%",
            tintColor: COLORS.white
          }}
        />

      </View>
    )
  }

  const renderForm = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 3,
          marginHorizontal: SIZES.padding * 3,
        }}>

        {/**Phone number */}
        <View style={{ marginTop: SIZES.padding * 2 }}>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
            Phone number
          </Text>

          <TextInput
            style={{
              flex: 1,
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
              ...FONTS.body3
            }}
            placeholder="Enter your Phone number"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
            keyboardType="numeric"
            onChangeText={text => setData('+254' + '' + text)}
          />
          {
            errorMsg &&
            <Text style={{ color: COLORS.red }}>*{errorMsg}</Text>
          }
          

        </View>
      </View>

    )
  }

  const renderButton = () => {
    console.log("Data test", data)
    return (
      <View style={{ margin: SIZES.padding * 3 }}>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: COLORS.black,
            borderRadius: SIZES.radius / 1.5,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={handleSubmit}
          disabled = {isSubmitting}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Continue</Text>
        </TouchableOpacity>
      </View>
    )
  }

  //Handle submit
  const handleSubmit = () => {
    setSubmit(true)

    if (!data) {
      seterrorMsg("The phone number is required to proceed")
      setSubmit(false)
    }
    if (data) {
      seterrorMsg(null)
      navigation.navigate('Home',{
        phone:data
      })
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>

      <LinearGradient
        colors={[COLORS.lime, COLORS.emerald]}
        style={styles.linearGradient}
      >
        <ScrollView>
          {renderHeader()}
          {renderLogo()}
          {renderForm()}
          {renderButton()}
        </ScrollView>
      </LinearGradient>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  linearGradient: {
    flex: 1,
  },

  logo: {
    color: 'white',
    fontSize: 35,

  }
})
