import react, {useState, useEffect} from 'react'
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
        >Login</Text>
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
            placeholder="Enter email"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
          />
        </View>

        {/**Phone number */}
        <View style={{ marginTop: SIZES.padding * 2 }}>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
            Phone number
          </Text>

          <View style={{ flexDirection: 'row' }}>
            {/*Country Code*/}
            <TouchableOpacity
              style={{
                width: 100,
                height: 50,
                marginHorizontal: 5,
                borderBottomColor: COLORS.white,
                borderBottomWidth: 1,
                flexDirection: 'row',
                ...FONTS.body2
              }}
              onPress={() => console.log("Show modal")}
            >
              <View style={{ justifyContent: 'center' }}>
                <Image source={icons.down}
                  style={{
                    width: 10,
                    height: 10,
                    tintColor: COLORS.white
                  }}
                />
              </View>
              <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                <Image
                  source={images.keFlag}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
              <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                  {/*TODO retrieve countries */}
                  KE+254
                </Text>
              </View>
            </TouchableOpacity>

            {/*Phone number*/}
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
            />

          </View>
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
            placeholder="Enter password"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
            secureTextEntry={!showPassword}
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
          onPress={() => {navigation.navigate("Home")
        console.log("Navigate")
        }}
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




