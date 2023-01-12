import { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage'
import { SIZES, COLORS, FONTS, icons } from '../constants';
import { SearchBar } from '../components';

const Tab = createMaterialTopTabNavigator();



export const TopTab = () => {

  const [mpesaCode, setMpesaCode] = useState(null);
  const [vehicleReg, setVehicleReg] = useState("");
  const [transactions, setTransaction] = useState([])
  const transactionArray = []
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //console.log("vehicle re", transactions)

    getVehicleReg()

    firestore()
      .collection('Transactions')
      .where('vehicleRegistration', '==', `${vehicleReg}`)
      .get()
      .then(querySnapshot => {
        //console.log('Total transactions: ', querySnapshot.size);


        querySnapshot.forEach(documentSnapshot => {
          transactionArray.push(documentSnapshot.data());
          console.log(transactionArray)
        });

        setTransaction(transactionArray)

      });

  }, [vehicleReg])

console.log("VehicleReg",vehicleReg)



  //fetch vehicle reg from asyncstorage
  const getVehicleReg = async () => {
    try {
      const vehicleRegistration = await AsyncStorage.getItem('vehicleNumber')
      setVehicleReg(vehicleRegistration)
      //console.log(JSON.stringify(vehicleRegistration))

    }
    catch (error) {
      console.log('error', error)
    }
  }



  const handleQuery = () => {
    //filter using mpesa query
    transactions.filter((e, index) => e.MpesaReceiptNumber == `${vehicleReg}`
    ).map((transaction, i) => {
      const isEmpty = Object.keys(transaction) === 0

      if (isEmpty == false) {
        console.log(transaction.MpesaReceiptNumber)
      }



    })


  }

  const QueryScreen = () => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.query}>
        {/**Title*/}
        <View
          style={{
            marginHorizontal: SIZES.padding * 1
          }}
        >
          <SearchBar searchText={searchText} setSearchText={setSearchText} placeholder="Enter M-Pesa code to verify payment" />
        </View>

        <ScrollView>
          {transactions.map((item, index) => {

if (searchText === "") {
   return (
            <TouchableOpacity
            key={index}
            style={{
              flex:1,
              width: '100%',
              height: 120,
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginVertical: 10,
              backgroundColor: COLORS.white,
              borderRadius: 15,
              elevation: 4,
              position: "relative",
              padding: 15,
              flexDirection: 'column',
            }}
            >
              <View style={{flex:1, flexDirection:'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <Text style={{ color: COLORS.black, fontWeight: "500", ...FONTS.h5 }}>{index+1}. Mpesa Code: {item.MpesaReceiptNumber} </Text>
              <Text style={{ color: COLORS.black, fontWeight: "500", ...FONTS.h5 }}>Phone: {item.PhoneNumber} </Text>
              </View>
              <View style={{flex:1, justifyContent: 'space-between',flexDirection:'row' }}>
              <Text style={{ color: COLORS.black, fontWeight: "500", ...FONTS.h5 }}>Amount: {item.Amount} </Text>
              </View>
              
              
            </TouchableOpacity>
            )
          }

          if (item.PhoneNumber.toUpperCase().includes(searchText.toUpperCase().trim().replace(/\s/g, ""))) {
            return (
              <TouchableOpacity
              key={index}
              style={{
                flex:1,
                width: '100%',
                height: 120,
                justifyContent: 'center',
                alignItems: 'flex-start',
                marginVertical: 10,
                backgroundColor: COLORS.white,
                borderRadius: 15,
                elevation: 4,
                position: "relative",
                padding: 15,
                flexDirection: 'column',
              }}
              >
                <View style={{flex:1, flexDirection:'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <Text style={{ color: COLORS.black, fontWeight: "500", ...FONTS.h5 }}>{index+1}. Mpesa Code: {item.MpesaReceiptNumber} </Text>
                <Text style={{ color: COLORS.black, fontWeight: "500", ...FONTS.h5 }}>Phone: {item.PhoneNumber} </Text>
                </View>
                <View style={{flex:1, justifyContent: 'space-between',flexDirection:'row' }}>
                <Text style={{ color: COLORS.black, fontWeight: "500", ...FONTS.h5 }}>Amount: {item.Amount} </Text>
                </View>
                
                
              </TouchableOpacity>
              )
          }
          })}
        </ScrollView>

      </KeyboardAvoidingView>
    );
  }

  const TransactionsScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  return (
    <Tab.Navigator style={styles.tabs}>
      <Tab.Screen name="Query Payment" component={QueryScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
    </Tab.Navigator>
  );



}

const styles = StyleSheet.create({
  tabs: {
    flex: 4,
    backgroundColor: COLORS.white,
    justifyContent: "flex-start",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

  },

  query: {
    flex: 1,
    marginVertical: SIZES.padding * 3,
    marginHorizontal: SIZES.padding * 2,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }

})