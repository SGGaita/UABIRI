import react, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView
} from 'react-native'
import { COLORS, SIZES, FONTS, icons } from '../constants'
import firestore from '@react-native-firebase/firestore';

export const Payment = ({ navigation, route }) => {


  const { data, paymentData, vehicle } = route.params
  const [schedule, setSchedule] = useState(data.scheduleCost)
  const [amount, setAmount] = useState()
  const [paymentData1, setPaymentData] = useState({ ...paymentData, vehicleRegistration: vehicle })

  //get current date
  var date = new Date()

  useEffect(() => {

    console.log("What is data at payment", paymentData1)



    //get the time from the date value and pass it through the 24hr converter
    var convertedTime = convertTime(date.toLocaleTimeString())
    //Filter Data passed from route.params to check which falls between specific time range and return Amount value
    var filterAmount = schedule.filter(e => e.startTime < convertedTime && convertedTime < e.endTime).map(x => x.amount).toString()
    setAmount(filterAmount)



  }, [])



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

  const transactionCode = ()=>{
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
        var string_length = 10;
        var randomstring = '';
        for (var i = 0; i < string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars[rnum];
        }
        return randomstring;
  }



  const handlePayment = () => {

    // navigation.navigate("Receipt")
    //TODO add MPESA processing and retrieve mpesa details
    firestore()
    .collection('Transactions')
    .add({
      transactionCode: transactionCode(),
      phoneNumber: paymentData1.phoneNumber,
      vehicleRegistration: paymentData1.vehicleRegistration,
      routeName: paymentData1.routeName,
      saccoName: paymentData1.saccoName,
      amount: amount,
      date: new Date()

    })
    .then(() => {
      console.log('Transaction completed successfully!');
    });

  }




  //Render page header
  const renderHeader = () => {

    return (

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center", height: 50, backgroundColor: COLORS.white }}>
        <View style={{ flex: 1, height: 50, justifyContent: "center" }}>
          <Button
            onPress={() => navigation.navigate('Home')}
            title="Back"
            color="#010000"
          />
        </View>
        <View style={{ flex: 8, height: 50, justifyContent: "center" }}>
          <Text style={{ color: COLORS.black, alignSelf: "center", fontWeight: "700", ...FONTS.h3 }}>{data.routeName} / {vehicle}</Text>
        </View>
      </View>
    )
  }

  const renderBody = () => {
    return (
      <View style={{ marginHorizontal: 30 }}>
        <Text style={{ marginTop: 10, marginBottom: 15, borderStyle: 'dotted', borderBottomColor: COLORS.black, borderBottomWidth: 1, color: COLORS.emerald, ...FONTS.h2 }} >Payment Details</Text>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>Date:</Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>{date.toLocaleDateString()}</Text></View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>Time:</Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>{date.toLocaleTimeString()}</Text></View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>Sacco Name:</Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>{paymentData1.saccoName}</Text></View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>Route :</Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>{paymentData1.routeName}</Text></View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>Vehicle Registration:</Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>{paymentData1.vehicleRegistration}</Text></View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}><Text style={{ color: COLORS.black, marginRight: 5, ...FONTS.body2 }}>Fare Amount:</Text><Text style={{ color: COLORS.black, ...FONTS.h2 }}>{amount}</Text></View>
      </View>
    )
  }

  const renderButton = () => {
    return (
      <View style={{ marginHorizontal: SIZES.padding * 1, marginTop: SIZES.padding * 4 }}>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: COLORS.black,
            borderRadius: SIZES.radius / 1.5,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={handlePayment}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Pay Fare: Kes{amount}</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 5, color: COLORS.black, ...FONTS.h5, color: COLORS.red, alignSelf: 'center' }}>*You will receive an Mpesa prompt to complete the transaction</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {renderHeader()}
        {renderBody()}
        {renderButton()}
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


