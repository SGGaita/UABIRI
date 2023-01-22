import { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  View,
  Text,
  StyleSheet,
  TextInput,

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


  const [vehicleReg, setVehicleReg] = useState("");
  const [transactions, setTransaction] = useState([])
  const transactionArray = []
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
   //fetch all transactions that match vehicle  Number
   firestore.collection('Transactions')
   .get()
   .then((doc)=>{
    console.log("Docs", doc)
   })

    getVehicleReg()



  }, [vehicleReg])

  console.log("VehicleReg", vehicleReg)

  //handleSearch


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

          <View style={{ flexDirection: "row", marginTop: SIZES.padding * 1 }}>
            <TextInput
              style={{
                marginVertical: SIZES.padding,
                paddingHorizontal: SIZES.padding,
                border: COLORS.grey,
                borderWidth: 1,
                borderRadius: 20,
                height: 40,
                color: COLORS.black,
                ...FONTS.body3,
                flex: 3,
              }}
              placeholder='Enter M-Pesa confirmation code to query'
              placeholderTextColor={COLORS.secondary}
              selectionColor={COLORS.black}

            />
          </View>
        </View>



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
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="Query M-Pesa Code" component={QueryScreen} />

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