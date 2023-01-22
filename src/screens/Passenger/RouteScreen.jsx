import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, Image, ImageBackground, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { COLORS, SIZES, icons, images, FONTS } from '../../constants'
import * as Animatable from 'react-native-animatable';
import { Filter, Timer } from '../../components/index'

export const RouteScreen = ({ navigation, route }) => {

  const { saccoName, saccoData } = route.params
  const [searchText, setSearchText] = useState("");

  const data = saccoData.map(x => x.routes).flat()
  const [filteredRoutes, setFilteredRoutes] = useState(data)


  useEffect(() => {

  }, [])

  const handleChangeText = (text) => {
    if (text === '') {
      setFilteredRoutes(data);
    } else {
      // filter the data based on the input text
      const filtered = data.filter(item => item.routeName.toUpperCase().includes(text.toUpperCase().trim().replace(/\s/g, "")));
      setFilteredRoutes(filtered);
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
          <Animatable.Text animation="fadeInLeft" style={{ fontWeight: '700', ...FONTS.h1, color: COLORS.white }}>Sacco: {saccoName}</Animatable.Text>
        </View>
      </View>
    )
  }

  const renderBody = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Filter onChangeText={handleChangeText} placeholder="Search route..." />
        </View>
        <View style={{ flex: 7 }}>
          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              ...FONTS.h4,
              fontWeight: "700",
              color: COLORS.black
            }}>
            Routes
          </Text>

          {/* Render Routes list */}
          {filteredRoutes.map((item, index) => {

            return (
              <TouchableOpacity
                key={index}
                style={{
                  width: '100%',
                  height: 100,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 10,
                  backgroundColor: COLORS.white,
                  borderRadius: 20,
                  borderColor: COLORS.blue,
                  borderStyle: "solid",
                  borderWidth: 1,
                  elevation: 4,
                  position: "relative",
                  paddingHorizontal: 15,
                  flexDirection: 'row',
                }}
                onPress={() => navigation.navigate("Vehicles", {
                  routeData: item,
                  saccoName: saccoName
                })}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: COLORS.black, marginRight: 5, fontWeight: "700", ...FONTS.body3 }}>{index + 1}.</Text><Text style={{ color: COLORS.black, fontWeight: "200", ...FONTS.h4 }}>{item.routeName}</Text>
                </View>
                <View>
                  <Image source={icons.forward} resizeMode="contain" style={{
                    width: 15,
                    height: 15,
                    tintColor: COLORS.blue
                  }} />
                </View>
              </TouchableOpacity>
            )




          })}
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
  }
})
