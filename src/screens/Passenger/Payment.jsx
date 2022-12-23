import react, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView
} from 'react-native'
import {Timer} from '../../components'
import { COLORS, SIZES, FONTS, icons, images } from '../../constants'
import AsyncStorage from '@react-native-community/async-storage'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';



export const Payment = ({ navigation, route }) => {


  const { data, saccoName, paymentData, vehicle } = route.params
  const [schedule, setSchedule] = useState(data.scheduleCost)
  const [amount, setAmount] = useState()
  const [paymentData1, setPaymentData] = useState({ ...paymentData, vehicleRegistration: vehicle })
  const [phoneN, setPhoneNumber] = useState(null)

  //get current date
  var date = new Date()

  useEffect(() => {
    //get the time from the date value and pass it through the 24hr converter
    var convertedTime = convertTime(date.toLocaleTimeString())
    //Filter Data passed from route.params to check which falls between specific time range and return Amount value
    var filterAmount = schedule.filter(e => e.startTime < convertedTime && convertedTime < e.endTime).map(x => x.amount).toString()
    setAmount(filterAmount)

//Get phone number
getPhoneNumber();

console.log("Set phone number", {phoneN})

console.log("Sacco name payment", saccoName)

  }, [])

   //fetch phone from asyncstorage
   const getPhoneNumber = async () => {
    try {
      const phoneNumber = await AsyncStorage.getItem('userData')
      setPhoneNumber(phoneNumber)
      console.log("Phone",phoneNumber)
    }
    catch (error) {
      console.log('error', error)
    }
  }




  //time convert function from12hr to 24hrs
  const convertTime = timeStr => {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}`;
  };



  const handlePayment = async () => {
console.log("Phone number", {phoneN})
    // navigation.navigate("Receipt")
    await fetch(`https://uabiri-mpesa-api.onrender.com/stk-push`, {
      method: 'POST',
      body: JSON.stringify({
        "phoneNumber": `${phoneN}`,
        "saccoName": `${paymentData1.saccoName}`,
        "routeName": `${paymentData1.routeName}`,
        "vehicleRegistration": `${paymentData1.vehicleRegistration}`,
        "amount": 1
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }

    })
      .then((resp) => {
        console.log('response now', resp)
        if(!resp.ok){
          console.log("this failed")
        }else{
        navigation.navigate('Receipt')
      }
      }).then((data) =>{
        console.log("actualdata", data)
      }

      ).catch((err) => {
        console.log('Error', err)
      })


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
          <Animatable.Text animation="fadeInLeft" style={{ fontWeight: '700', ...FONTS.h1, color: COLORS.white }}>Payment Details</Animatable.Text>
        </View>
      </View>
    )
  }
  

  const renderBody = () => {
    return (
      <View style={{
        marginVertical: SIZES.padding * 2,
        marginHorizontal: SIZES.padding * 2,
        flex: 1,
        flexDirection: "column"
      }}>
      <View style={{
        flex: 1,
        flexDirection: "column"
      }}>
      <View style={{ flex:1,flexDirection: 'row', justifyContent:'space-between', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.h3 }}>Date:</Text><Text style={{ color: COLORS.black, ...FONTS.body3 }}>{date.toLocaleDateString()}</Text></View>
        <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.h3 }}>Time:</Text><Text style={{ color: COLORS.black, ...FONTS.body3 }}>{date.toLocaleTimeString()}</Text></View>
        <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.h3 }}>Sacco Name:</Text><Text style={{ color: COLORS.black, ...FONTS.body3 }}>{paymentData1.saccoName}</Text></View>
        <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.h3 }}>Route :</Text><Text style={{ color: COLORS.black, ...FONTS.body3 }}>{paymentData1.routeName}</Text></View>
        <View style={{ flex:1,flexDirection: 'row', justifyContent:'space-between', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.h3 }}>Vehicle Registration:</Text><Text style={{ color: COLORS.black, ...FONTS.body3 }}>{paymentData1.vehicleRegistration}</Text></View>
        <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.h3 }}>Total payable:</Text><Text style={{ color: COLORS.black, ...FONTS.body3 }}>{amount}</Text></View>
      </View>
       
      <View style={{
        flex: 1,
        flexDirection: "column"
      }}>
        {renderButton()}
        </View>
      </View>
    )
  }

  const renderButton = () => {
    return (
      <View style={{   justifyContent: 'center' }}>
        <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.linearGradient}>
        <TouchableOpacity
          style={{
            height: 60,
            borderRadius: SIZES.radius / 1.5,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={handlePayment}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Pay Fare: Kes{amount}</Text>
        </TouchableOpacity>
        </LinearGradient>
        <Text style={{ marginTop: 5, color: COLORS.black, ...FONTS.h4, color: COLORS.gray, alignSelf: 'center' }}>Note: You will receive an Mpesa prompt to phone number {phoneN}. Kindly enter your M-Pesa pin to complete the transaction.</Text>
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
  }
})

