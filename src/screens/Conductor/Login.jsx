import react, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

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
import * as Animatable from 'react-native-animatable';

import { COLORS, SIZES, icons, images, FONTS } from '../../constants'
import { Timer } from '../../components';

export const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [data, setData] = useState({})

  //Text input states
  const [vehicleReg, setVehicleReg] = useState("")
  const [errorMsg, seterrorMsg] = useState("")
  const [isSubmitting, setSubmit] = useState(false)
 



//Handle submit
const handleLogin= async() => {
  setSubmit(true)
  if (!vehicleReg) {
    seterrorMsg("The Vehicle number is required to proceed")
    setSubmit(false)
  }
  if (vehicleReg) {
    seterrorMsg(null)

    try {
      await AsyncStorage.setItem(
        'vehicleData',
        vehicleReg
      );
    } catch (error) {
      console.log('There has been an error setting item to asyncstorage')
    }
    navigation.navigate('Conductor')
  }
}

  const renderHeader = () => {
    return (
      <View style={styles.header}>
       <View style={{flex:1,flexDirection:'row'}}>
  <View style={{flex:1,left:10, justifyContent:'center'}}>
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
  <View style={{flex:1,right:10,alignItems:'flex-end', justifyContent:'center'}}>
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

        <View style={{flex:2,left:10}}>
          <Timer/>
          <Animatable.Text animation="fadeInLeft" style={{ fontWeight:'700',...FONTS.h1,color:COLORS.white }}>Welcome Conductor!</Animatable.Text>
        </View>
        <View>
        </View>
      </View>
    )
  }

 

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
          <Text style={{ fontWeight: "700", fontSize: 31, color: COLORS.blue }}>Query & verify mobile payments by passengers. </Text>
        </View>
        {/**Vehicle registration */}
        <View style={{ marginTop: SIZES.padding * 3 }}>
          <Text style={{ color: COLORS.blue, ...FONTS.body3 }}>
            Enter vehicle registration
          </Text>

          {
            errorMsg &&
            <Text style={{ color: COLORS.red }}>*{errorMsg}</Text>
          }

          <TextInput style={{
            marginVertical: SIZES.padding,
            borderBottomColor: COLORS.blue,
            borderBottomWidth: 1,
            height: 40,
            color: COLORS.black,
            ...FONTS.body3
          }}
            value={vehicleReg}
            placeholder="Vehicle registration"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.black}
            onChangeText={text => setVehicleReg(text)}
          />
        </View>
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
          onPress={handleLogin}
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
        <View style={styles.body}>
          {renderBody()}
          {renderButton()}
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 1,
    flexDirection: "column",

  },

  body: {
    flex: 4,
    backgroundColor: COLORS.white,
    justifyContent: "flex-start",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    
},

 
})




