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

export const InformationScreen = ({ navigation }) => {

  const values = [, { id: 1, name: 'Past Transactions', icon: 'info', screen: 'About' },
    { id: 2, name: 'About U Abiri', icon: 'nfo', screen: 'About' },
    { id: 2, name: 'About U Abiri', icon: 'nfo', screen: 'About' },
    { id: 2, name: 'About U Abiri', icon: 'nfo', screen: 'About' },
  ]

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
        </View>

        <View style={{ flex: 2, left: 10 }}>

          <Timer />
          <Animatable.Text animation="fadeInLeft" style={{ fontWeight: '700', ...FONTS.h1, color: COLORS.white }}>Information Center</Animatable.Text>
        </View>
      </View>
    )
  }

  const renderBody = () => {
    return (
      <View style={{
        marginVertical: SIZES.padding * 5,
        //marginHorizontal: SIZES.padding * 2,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>


<TouchableOpacity
          style={{
            flex: 1,
            height: 80,
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: 10,
            backgroundColor: COLORS.white,
            borderRadius: 15,
            borderColor:COLORS.blue,
            borderStyle:"solid",
            borderWidth:  1,
            elevation: 4,
            paddingHorizontal: 15,
            flexDirection: 'column',
            minWidth: '48%',
            marginHorizontal: "1%",
            marginBottom: 6,
          }}


          onPress={() => navigation.navigate('Home')}
        >
          <View>
            <Image source={icons.home}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.blue,
              }}
            />
          </View>
          <View>
            <Text style={{ ...FONTS.h5, color: COLORS.blue }}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            height: 80,
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: 10,
            backgroundColor: COLORS.white,
            borderRadius: 15,
            borderColor:COLORS.blue,
            borderStyle:"solid",
            borderWidth:  1,
            elevation: 4,
            paddingHorizontal: 15,
            flexDirection: 'column',
            minWidth: '48%',
            marginHorizontal: "1%",
            marginBottom: 6,
          }}


          onPress={() => { }}
        >
          <View>
            <Image source={icons.bill}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.blue,
              }}
            />
          </View>
          <View>
            <Text style={{ ...FONTS.h5, color: COLORS.blue }}>Past Payments</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            height: 80,
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: 10,
            backgroundColor: COLORS.white,
            borderRadius: 15,
            borderColor:COLORS.blue,
            borderStyle:"solid",
            borderWidth:  1,
            elevation: 4,
            paddingHorizontal: 15,
            flexDirection: 'column',
            minWidth: '48%',
            marginHorizontal: "1%",
            marginBottom: 6,
          }}


          onPress={() => { }}
        >
          <View>
            <Image source={icons.file}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.blue,
              }}
            />
          </View>
          <View>
            <Text style={{ ...FONTS.h5, color: COLORS.blue }}>Privacy Policy</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            height: 80,
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: 10,
            backgroundColor: COLORS.white,
            borderRadius: 15,
            borderColor:COLORS.blue,
            borderStyle:"solid",
            borderWidth:  1,
            elevation: 4,
            paddingHorizontal: 15,
            flexDirection: 'column',
            minWidth: '48%',
            marginHorizontal: "1%",
            marginBottom: 6,
          }}


          onPress={() => { }}
        >
          <View>
            <Image source={icons.send}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.blue,
              }}
            />
          </View>
          <View>
            <Text style={{ color: COLORS.blue }}>Contact Us </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            height: 80,
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: 10,
            backgroundColor: COLORS.white,
            borderRadius: 15,
            borderColor:COLORS.blue,
            borderStyle:"solid",
            borderWidth:  1,
            elevation: 4,
            paddingHorizontal: 15,
            flexDirection: 'column',
            minWidth: '48%',
            marginHorizontal: "1%",
            marginBottom: 6,
          }}


          onPress={() => { }}
        >
          <View>
            <Image source={icons.info}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.blue,
              }}
            />
          </View>
          <View>
            <Text style={{ color: COLORS.blue }}>About UAbiri </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            height: 80,
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: 10,
            backgroundColor: COLORS.white,
            borderRadius: 15,
            borderColor:COLORS.blue,
            borderStyle:"solid",
            borderWidth:  1,
            elevation: 4,
            paddingHorizontal: 15,
            flexDirection: 'column',
            minWidth: '48%',
            marginHorizontal: "1%",
            marginBottom: 6,
          }}


          onPress={() => { }}
        >
          <View>
            <Image source={icons.logout}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.blue,
              }}
            />
          </View>
          <View>
            <Text style={{ color: COLORS.blue }}>Logout </Text>
          </View>
        </TouchableOpacity>

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
