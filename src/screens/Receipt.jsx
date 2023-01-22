import react, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native'
import { COLORS, SIZES, FONTS, images, icons } from '../constants'
import { Timer } from '../components'
import AsyncStorage from '@react-native-community/async-storage'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';

export const Receipt = ({ navigation, route }) => {
  const {receipt} = route.params

// Timestamp in the format of YYYYMMDDHHmmss
const timestamp = "20230122152819";

// Extract the date and time values
const year = timestamp.slice(0, 4);
const month = timestamp.slice(4, 6);
const day = timestamp.slice(6, 8);
const hour = timestamp.slice(8, 10);
const minute = timestamp.slice(10, 12);
const second = timestamp.slice(12);

// Create a new Date object and set the values
const date = new Date(year, month - 1, day, hour, minute, second);

const dateOnly = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
const timeOnly = new Date(0, 0, 0, date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds())

console.log("Date: " + dateOnly.toString());
console.log("Time: " + timeOnly.toString());


  useEffect(() => {
    
  }, []);
  

//navigate back home
const handleBackHome = ()=>{
  //TODO clear all asynchstorage 
  navigation.navigate('Home')
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
          <Animatable.Text animation="fadeInLeft" style={{ fontWeight: '700', ...FONTS.h1, color: COLORS.white }}>Transaction Details</Animatable.Text>
        </View>
      </View>
    )
  }

  const renderBody = () => {
    return (
      <View style={{
        marginVertical: SIZES.padding * 2,
        marginHorizontal: SIZES.padding,
        flex: 1,
        flexDirection: "column"
      }}>
        
        <View style={{ flex: 1, alignItems: 'center', marginBottom: 20}}>
        <Text style={{ ...FONTS.h3,marginLeft: 10,marginBottom: 5, fontWeight: '700',color: COLORS.black,alignSelf:'flex-start' }}>Hello +245723272915 !</Text>
        <Text style={{ ...FONTS.h4,marginLeft: 10,marginBottom: 20, fontWeight: '200',color: COLORS.black,alignSelf:'flex-start' }}>The service request is processed successfully.</Text>
          <Text style={{ ...FONTS.h1, fontWeight: '700', color: COLORS.darkgray }}>
            Receipt Number
          </Text>
          <Text style={{ borderStyle: 'dashed', borderBottomWidth: 1 ,...FONTS.body1, color: "gray" }}>
            {receipt?.MpesaReceiptNumber}
          </Text>
          {/* <Text style={{ ...FONTS.body2, color: "gray" }}>
            Date: 
          </Text> */}
           <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', padding: 10, marginBottom: 20, borderStyle: 'dashed', borderBottomWidth: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}><Text style={{ ...FONTS.h4, fontWeight: '800', flex: 3, color: COLORS.black }}>Amount:</Text>
            <Text style={{ color: COLORS.black, flex: 1, ...FONTS.body3 }}>{receipt?.Amount}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}><Text style={{ ...FONTS.h4, fontWeight: '800', flex: 3, color: COLORS.black }}>Vehicle Registration:</Text>
            <Text style={{ color: COLORS.black, flex: 1, ...FONTS.body3 }}>{receipt?.vehicleRegistration}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}><Text style={{ ...FONTS.h4, fontWeight: '800', flex: 3, color: COLORS.black }}>Sacco:</Text>
            <Text style={{ color: COLORS.black, flex: 1, ...FONTS.body3 }}>{receipt?.saccoName}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}><Text style={{ ...FONTS.h4, fontWeight: '800', flex: 3, color: COLORS.black }}>Route:</Text>
            <Text style={{ color: COLORS.black, flex: 1, ...FONTS.body3 }}>{receipt?.routeName}</Text>
          </View>

        </View>
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
      <View style={{ justifyContent: 'center' }}>
        <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.linearGradient}>
          <TouchableOpacity
            style={{
              height: 60,
              borderRadius: SIZES.radius / 1.5,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          onPress={handleBackHome}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Back Home</Text>
          </TouchableOpacity>
        </LinearGradient>
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


