import react,{useState, useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native'
import { COLORS, SIZES, FONTS,images, icons } from '../constants'
import { Timer } from '../components'
import AsyncStorage from '@react-native-community/async-storage'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

export const Receipt = ({navigation}) => {

  //fetch phone from asyncstorage
  const getPhoneNumber = async () => {
    try {
      const phoneNumber = await AsyncStorage.getItem('userData')
      setPhoneNumber(phoneNumber)
    }
    catch (error) {
      console.log('error', error)
    }
  }

  const [date,setDate] = useState(new Date())
  const [phoneN, setPhoneNumber] = useState(null)
  
  useEffect(() => {
    getPhoneNumber()
    getReceiptDetails(phoneN)
    
  }, []);


  //fetch and filter transactions
  const getReceiptDetails = (phone) =>{
console.log("This is phone number", phone)
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
          <Animatable.Text animation="fadeInLeft" style={{ fontWeight: '700', ...FONTS.h1, color: COLORS.white }}>Payment Details{phoneN}</Animatable.Text>
        </View>
       </View>
    )
  }

  const renderBody = () => {
    return (
      <View >

      </View>
    )
  }

  const renderButton = () => {
    return (
      <View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={{ flex: 1, backgroundColor: COLORS.blue }} source={images.nairobi}>
      {renderHeader()}
      <Animatable.View animation="fadeInUpBig" style={styles.body}>
          {renderBody()}
        </Animatable.View>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  }
})


