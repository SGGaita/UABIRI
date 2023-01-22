import react, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable';

import { COLORS, SIZES, icons, images, FONTS } from '../../constants'
import { Timer } from '../../components';
import firestore from '@react-native-firebase/firestore';

export const Login = ({ navigation }) => {

  const [region, setRegion] = useState({});
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [exists, setExists] = useState(false);


  useEffect(() => {
    //fetch Regions data
    firestore().collection("Regions")
      .doc("ikZAfo3S0BDFDp1n70yn")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setRegion(doc.data());
        } else {
          console.log("No such document!");
        }
      });
  }, []);




  //Handle  Vehicle number formatting
  const handleVehicleNumber = async (text) => {
    let formattedVehicleNumber = text.toUpperCase().replace(/^([a-zA-Z]{3})(\d{3})([a-zA-Z])$/, "$1 $2$3");
    setVehicleNumber(formattedVehicleNumber);
    try {
      await AsyncStorage.setItem('vehicleNumber', formattedVehicleNumber);
    } catch (error) {
      console.log("Error saving data" + error);
    }
  };
 // console.log(typeof vehicleNumber)

  //Handle submit
  const handleSubmit = async () => {
    setIsLoading(true);
    setExists(false);

    if (!vehicleNumber) {
      setIsLoading(false);
      Alert.alert("Vehicle Number Required", "Please enter a vehicle number first");
    } else {
      // Perform some async operation here, like sending data to a server or saving data to a local database
      // Once the async operation is complete, set isLoading to false
      // region.saccos.forEach(sacco => {
      //   //console.log("Saccos", sacco)
      //   if (sacco.routes && sacco.routes.forEach) {
      //     sacco.routes.forEach(route => {
      //       //console.log("Routes", route)
      //       route.vehicles.forEach(vehicle => {
      //         console.log("Vehicles", vehicle.vehicleRegistration)
      //         if (vehicle.vehicleRegistration === vehicleNumber.toString()) {
      //           setExists(true);
      //         }
      //       });
      //     });
      //   }

      // });
     
        setIsLoading(false);
        navigation.navigate('Conductor');
        // kk
      
    }
  };


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
          <Animatable.Text animation="fadeInLeft" style={{ fontWeight: '700', ...FONTS.h1, color: COLORS.white }}>Welcome Conductor!</Animatable.Text>
        </View>
        <View>
        </View>
      </View>
    )
  }



  const renderBody = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 3,
          marginHorizontal: SIZES.padding * 3,
        }}>

        {/**Title*/}
        <View
          style={{
            marginBottom: SIZES.padding * 4,
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 31, color: COLORS.blue }}>Query & verify mobile payments by passengers. </Text>
        </View>
        {/**Vehicle registration */}
        <View style={{ marginTop: SIZES.padding * 3 }}>
          <Text style={{ color: COLORS.blue, ...FONTS.body3 }}>
            Enter vehicle registration
          </Text>

          <TextInput style={{
            marginVertical: SIZES.padding,
            borderBottomColor: COLORS.blue,
            borderBottomWidth: 1,
            height: 40,
            color: COLORS.black,
            ...FONTS.body3
          }}
            placeholder="Vehicle registration"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.black}
            value={vehicleNumber}
            onChangeText={handleVehicleNumber}
          />
        </View>
      </View>

    )
  }

  const renderButton = () => {
    return (
      <View style={{ margin: SIZES.padding * 1, justifyContent: 'center' }}>
        <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.linearGradient}>
          <TouchableOpacity
            style={{
              height: 60,
              borderRadius: SIZES.radius / 1.5,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={handleSubmit}
          >
            {isLoading ? (
              <ActivityIndicator size={25} color='white' />
            ) : (
              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Continue</Text>
            )}
          </TouchableOpacity>
        </LinearGradient>

      </View>
    )
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <ImageBackground style={{ flex: 1, backgroundColor: COLORS.blue }} source={images.nairobi}>
        {renderHeader()}
        <View style={styles.body}>
          {renderBody()}
          {renderButton()}
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
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


})




