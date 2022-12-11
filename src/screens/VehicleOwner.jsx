
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config";
import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,

} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { COLORS, SIZES, icons, images, FONTS } from '../constants'
import * as Animatable from 'react-native-animatable';
import { Timer } from "../components";

export const VehicleOwner = ({ navigation }) => {

  const [email, setEmail] = useState()

  {/** Handle login */ }
  const handleLogin = () => {

  }


  {/** Header function */ }
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

  {/** Body function */ }
  const renderBody = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 3,
          marginHorizontal: SIZES.padding * 3,
        }}>

        {/**Title*/}
        <View
          style={{
            marginBottom: SIZES.padding * 4,
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 31, color: COLORS.blue }}>View daily transactions and logs of your vehicles. </Text>
        </View>
        {/**Email input */}
        <View style={{ marginTop: SIZES.padding * 3 }}>
          <Text style={{ color: COLORS.blue, ...FONTS.body3 }}>
            Enter your Email
          </Text>
          <TextInput style={{
            marginVertical: SIZES.padding,
            borderBottomColor: COLORS.blue,
            borderBottomWidth: 1,
            height: 40,
            color: COLORS.black,
            ...FONTS.body3
          }}
            value={email}
            placeholder="Email address"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.black}
            onChangeText={text => setEmail(text)}
          />
        </View>

        {/**password input */}
        <View style={{ marginTop: SIZES.padding * 3 }}>
          <Text style={{ color: COLORS.blue, ...FONTS.body3 }}>
            Enter your password
          </Text>
          <TextInput style={{
            marginVertical: SIZES.padding,
            borderBottomColor: COLORS.blue,
            borderBottomWidth: 1,
            height: 40,
            color: COLORS.black,
            ...FONTS.body3
          }}
            value={email}
            placeholder="Email your password"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.black}
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View style={{ alignItems: 'flex-end', marginTop: SIZES.padding * 1, marginBottom: SIZES.padding * 2 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetScreen')}
          >
            <Text style={{ color: COLORS.blue, ...FONTS.body3 }}>
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  {/** Button Function */ }
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
            onPress={handleLogin}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Continue</Text>
          </TouchableOpacity>
        </LinearGradient>

      </View>
    )
  }


  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <ImageBackground style={{ flex: 1, backgroundColor: COLORS.blue }} source={images.nairobi}>
        {renderHeader()}

        <Animatable.View style={styles.body}>
          {renderBody()}
          {renderButton()}
        </Animatable.View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    flex: 1,
    flexDirection: 'column'
  },

  body: {
    flex: 3,
    backgroundColor: COLORS.white,
    justifyContent: "flex-start",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },


})

