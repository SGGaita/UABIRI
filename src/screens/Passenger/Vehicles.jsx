import { View, Text, KeyboardAvoidingView, StyleSheet, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Filter, Timer } from '../../components'
import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
import * as Animatable from 'react-native-animatable';

export const Vehicles = ({ navigation, route }) => {

  const [searchText, setSearchText] = useState("");
  const { routeData, paymentData, saccoName } = route.params
  const [vehiclesData, setVehiclesData] = useState(routeData.vehicles)
  const [filterVehicleData, setFilterVehicleData] = useState(vehiclesData)
  const [paymentData3, setPaymentData] = useState({ ...paymentData, saccoName })
  //

  useEffect(() => {
    setPaymentData({ ...paymentData3, routeName: routeData.routeName })
  }, [])

  //
  const handleChangeText = (text)=>{
    if (text === '') {
      setFilterVehicleData(vehiclesData);
     } else {
       // filter the data based on the input text
       const filtered = vehiclesData.filter(item => item.vehicleRegistration.toUpperCase().includes(text.toUpperCase().trim().replace(/\s/g, "")));
       setFilterVehicleData(filtered);
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
          <Animatable.Text animation="fadeInLeft" style={{ fontWeight: '700', ...FONTS.h1, color: COLORS.white }}>Route: {routeData.routeName}</Animatable.Text>
        </View>
      </View>
    )
  }

  //render body
  const renderBody = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Filter onChangeText={handleChangeText} placeholder="Search vehicle..." />
        </View>
        <View style={{ flex: 7 }} >
          <Text style={{ fontWeight: "700",marginTop: 25, marginBottom: 10,  color: COLORS.black, ...FONTS.h3 }}>
            Vehicles
          </Text>
          <View>
            <FlatList data={filterVehicleData} renderItem={
              ({ item, index }) => {
                
                  return (
                    <TouchableOpacity

                      style={{
                        width: '100%',
                        height: 70,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginVertical: 10,
                        backgroundColor: COLORS.white,
                        borderRadius: 15,
                        borderColor: COLORS.blue,
                        borderStyle: "solid",
                        borderWidth: 1,
                        elevation: 4,
                        position: "relative",
                        paddingHorizontal: 15,
                        flexDirection: 'row',
                      }}
                      onPress={() => navigation.navigate("Payment", { data: routeData, paymentData: paymentData3, vehicle: item.vehicleRegistration })}
                    >
                      <View style={{ flex: 1, alignContent: "center", justifyContent: "center", borderRadius: 5 }}>
                        <Text style={{ color: COLORS.black, fontWeight: "600", ...FONTS.h4 }}>{index + 1}.{item.vehicleRegistration}</Text>
                      </View>
                    </TouchableOpacity>
                  )
                }

            } />
          </View>
        </View>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <ImageBackground style={{ flex: 1, backgroundColor: COLORS.blue }} source={images.nairobi}>
        {renderHeader()}
        <Animatable.View animation="fadeInUpBig" style={styles.body}>
          {renderBody()}
        </Animatable.View>
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    flexDirection: 'column'
  },
})

