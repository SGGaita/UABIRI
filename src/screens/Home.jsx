import react, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  ImageBackground,
  Alert
} from 'react-native'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import { SearchBar, Timer, Filter } from '../components/index'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage'
import * as Animatable from 'react-native-animatable';



export const Home = ({ navigation, route }) => {

  const [saccoData, setSaccos] = useState([])
  const [filteredSaccoData, setFilteredSaccos] = useState([])
  const [searchText, setSearchText] = useState("");
  const [payloadData, setPayloadData] = useState()
  const [phoneN, setPhoneNumber] = useState(null)




  useEffect(() => {
    const subscriber = firestore()
      .collection('Regions')
      .doc("ikZAfo3S0BDFDp1n70yn")
      .onSnapshot(documentSnapshot => {
        setSaccos(documentSnapshot.data().saccos);
        setFilteredSaccos(documentSnapshot.data().saccos)
      });

    getPhoneNumber();


    console.log("Saccos data", saccoData)

    // Stop listening for updates when no longer required
    return () => subscriber();

  }, []);



  //fetch phone from asyncstorage
  const getPhoneNumber = async () => {
    try {
      const phoneNumber = await AsyncStorage.getItem('userData')
      await setPhoneNumber(phoneNumber)
    }
    catch (error) {
      Alert.alert('Error', 'There has been an error setting item to asyncstorage. Try again!')
    }
  }

  //filter the data
  const handleFilterChange = (text) => {
    if(text === ''){
      setFilteredSaccos(saccoData);
    }else{
     // filter the data based on the input text
    const filtered = saccoData.filter(item => item.saccoName.toUpperCase().includes(text.toUpperCase().trim().replace(/\s/g, "")));
    setFilteredSaccos(filtered);
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
          <Animatable.Text animation="fadeInLeft" style={{ fontWeight: '700', ...FONTS.h1, color: COLORS.white }}>Hello: {phoneN}</Animatable.Text>
        </View>
      </View>
    )
  }

  //Render the search input field
  const renderBody = () => {
    return (
      <View
        style={{
          marginVertical: SIZES.padding * 2,
          paddingHorizontal: SIZES.padding * 2,
          flex: 1,
          flexDirection: "column"
        }}>
        {/**Search bar */}
        <View style={{ flex: 1 }}>
          <Filter onChangeText={handleFilterChange} placeholder="Search saccos..." />
        </View>

        <View style={{ flex: 6 }}>
          <Text style={{ fontWeight: "700", marginTop: 20, marginBottom: 10, color: COLORS.black, ...FONTS.h3 }}>Saccos</Text>
          <FlatList horizontal={false}
            style={styles.flatList}
            data={filteredSaccoData}
            renderItem={({ item, index }) => {

              if (searchText === "") {
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
                    onPress={() => navigation.navigate("RouteScreen", {
                      saccoName: item.saccoName,
                      saccoData: saccoData.filter(e => e.saccoID === item.saccoID),
                    })}
                  >
                    <View style={{ flex: 1, paddingHorizontal: 30, alignContent: "center", justifyContent: "center", borderRadius: 5 }}>
                      <Text style={{ color: COLORS.black, fontWeight: "100", ...FONTS.h4 }}>{index + 1}. {item.saccoName}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }

            }}
            showsHorizontalScrollIndicator={false}
          />
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
    justifyContent: "flex-start",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
})


