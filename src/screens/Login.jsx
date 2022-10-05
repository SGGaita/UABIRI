import react, {useState, useEffect} from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";
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
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { COLORS, SIZES, icons, images, FONTS } from '../constants'
import {Home,Onboarding} from '../screens'

export const Login = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [data, setData] = useState({})

  //Text input states
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

 const [isSignedIn, setIsSignedIn] = useState(false)  

  

//Login 
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user", user)
        navigation.navigate("Home")
    })
    .catch((error) => {
        //setError(true)
        navigation.navigate("Home")
    });
            
       
};

  const renderHeader = () => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: SIZES.padding * 4,
          paddingHorizontal: SIZES.padding * 2
        }}
        onPress={() => {navigation.navigate("Onboarding")
        console.log("Navigate")
        }}>
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.white
          }}
        />
        <Text style={{ marginLeft: SIZES.padding * 1.5, color: COLORS.white, ...FONTS.h4 }}
        >Back</Text>
      </TouchableOpacity>
    )
  }

  const renderLogo = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 5,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center'
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
        {/**Alias */}
        <View style={{ marginTop: SIZES.padding * 3 }}>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
            Email
          </Text>
          <TextInput style={{
            marginVertical: SIZES.padding,
            borderBottomColor: COLORS.white,
            borderBottomWidth: 1,
            height: 40,
            color: COLORS.white,
            ...FONTS.body3
          }}
          value={email}
            placeholder="Enter email"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
            onChangeText={text => setEmail(text)}
          />
        </View>

        {/**Password */}
        <View style={{ marginTop: SIZES.padding * 3 }}>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
            Password
          </Text>
          <TextInput style={{
            marginVertical: SIZES.padding,
            borderBottomColor: COLORS.white,
            borderBottomWidth: 1,
            height: 40,
            color: COLORS.white,
            ...FONTS.body3
          }}
          value={password}
            placeholder="Enter password"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
            secureTextEntry={!showPassword}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              bottom: 10,
              height: 30,
              width: 30
            }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={showPassword ? icons.disable_eye : icons.eye}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.white
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

    )
  }

  const renderButton = () => {
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
          onPress={handleLogin}
        >
<Text style={{color: COLORS.white, ...FONTS.h3}}>Continue</Text>
        </TouchableOpacity>
      </View>
    )
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




