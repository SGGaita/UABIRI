import react, { useState, useEffect } from 'react'
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'
import { SearchBar,Timer } from '../../components'
import { COLORS, SIZES, FONTS, icons, images } from '../../constants'
import { transactions } from '../../dummy/data'
import firestore from '@react-native-firebase/firestore';
import { Tabs, TopTab } from '../../navigation'
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage'
import * as Animatable from 'react-native-animatable';




export const Conductor = ({ route, navigation }) => {

  const [vehicleReg, setVehicleReg] = useState(null)

  useEffect(()=>{

    getVehicleReg()

  },[vehicleReg])

 //fetch vehicle reg from asyncstorage
 const getVehicleReg = async () => {
  try {
    const vehicleRegistration = await AsyncStorage.getItem('vehicleNumber')
    setVehicleReg(vehicleRegistration)
    
  }
  catch (error) {
    console.log('error', error)
  }
}

  //Render page header
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
          <Animatable.Text animation="fadeInLeft" style={{ fontWeight: '700', ...FONTS.h1, color: COLORS.white }}>Hello: {vehicleReg}</Animatable.Text>
        </View>
      </View>
    )
  }


  return (

    <View style={styles.container}>
      <ImageBackground style={{ flex: 1, backgroundColor: COLORS.blue }} source={images.nairobi}>
        {renderHeader()}
        <TopTab style={styles.body} />

      </ImageBackground>
    </View>
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

  searchBar: {

  },


})


