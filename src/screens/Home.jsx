import react, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  Button
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import { SearchBar } from '../components/index'
import { Regions } from '../dummy/data'
import firestore from '@react-native-firebase/firestore';
import { async } from '@firebase/util'





export const Home = ({ navigation, route }) => {

  const saccos1 = () => {
return Regions.map(x => x.saccos)[0]
  }


  const [saccoData, setSaccos] = useState(saccos1())
  const [saccoData2, setSaccos2] = useState()
  const [searchText, setSearchText] = useState("");
  const [currentSelected, setcurrentSelected] = useState([0])
 


  useEffect(() => {
    console.log("Route info",route.params)
    
    

    
    const subscriber = firestore()
      .collection('Regions')
      .doc("ikZAfo3S0BDFDp1n70yn")
      .onSnapshot(documentSnapshot => {
        setSaccos(documentSnapshot.data().saccos);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
      
      
     // Stop listening for updates when no longer required
    //return () => subscriber();


  }, []);


//Render page header
const renderHeader = () => {

  return (

    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", height: 50, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, height: 50, justifyContent: "center" }}>
        <Button
          onPress={() => alert('This is a button!')}
          title="Back"
          color="#010000"
        />
      </View>
      <View style={{ flex: 8, height: 50, justifyContent: "center" }}>
        <Text style={{ color: COLORS.black, alignSelf: "center", fontWeight: "700", ...FONTS.h3 }}>Welcome</Text>
      </View>
    </View>
  )
}

  //Render the search input field
  const renderSearch = () => {
    console.log('Set sacco 2: ', saccoData2);
    return (
      <View
        style={{
          marginHorizontal: SIZES.padding * 2,
          flex: 1,

        }}>
        {/**Search bar */}
        <SearchBar searchText={searchText} setSearchText={setSearchText} placeholder="Search sacco"/>
        <View><Text style={{ color: COLORS.black }}>{searchText}</Text></View>
        {/* <View>{renderButton()}</View> */}
        <View><Text style={{ fontWeight: "700", marginVertical: 10, borderBottomColor: COLORS.black, borderBottomWidth: 1, color: COLORS.black, ...FONTS.h1 }}>Saccos</Text></View>
        <FlatList horizontal={true} 
        style={styles.flatList} 
        data={saccoData} 
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                alignItems: "center",
                justifyContent: "space-evenly",
                height: 70,
                width: 150,
                marginHorizontal: 10,
                backgroundColor: currentSelected == index ? COLORS.black : COLORS.white,
                marginVertical: 5,
                borderRadius: 20,
                elevation: 5
              }}
              onPress={() => setcurrentSelected(index)}
            >
              <View style={{ flex: 1, paddingHorizontal: 30, alignContent: "center", justifyContent: "center", borderRadius: 5 }}>
                <Text style={{ color: currentSelected == index ? COLORS.white : COLORS.black, fontWeight: "600", ...FONTS.h2 }}>{item.saccoName}</Text>
              </View>
            </TouchableOpacity>
          )}} 
        showsHorizontalScrollIndicator={false} />

        <Text
          style={{
            paddingTop: 20,
            paddingHorizontal: 20,
            ...FONTS.h2,
            fontWeight: "700",
            color: COLORS.black
          }}>
          Routes
        </Text>
        {/*Render Routes list*/}
        {saccoData[currentSelected].routes.map((data, index) => {
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
                elevation: 4,
                position: "relative",
                paddingHorizontal: 15,
                flexDirection: 'row',
              }}
              onPress={() => navigation.navigate("Vehicles", {
                routeData: data
              })}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: COLORS.black, marginRight: 5, fontWeight: "400", ...FONTS.body2 }}>{index + 1}.</Text><Text style={{ color: COLORS.black, fontWeight: "700", ...FONTS.h2 }}>{data.routeName}</Text>
              </View>
              <View>
                <Image source={icons.forward} resizeMode="contain" style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.black
                }} />
              </View>
            </TouchableOpacity>
          )

        })}


      </View>
    )
  }



  //render button 
  // const renderButton = () => {
  //   return (
  //     <View style={{ margin: SIZES.padding * 1 }}>
  //       <TouchableOpacity
  //         style={{
  //           height: 60,
  //           backgroundColor: COLORS.black,
  //           borderRadius: SIZES.radius / 1.5,
  //           alignItems: 'center',
  //           justifyContent: 'center'
  //         }}

  //       >
  //         <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Search</Text>
  //       </TouchableOpacity>
  //     </View>
  //   )
  // }



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <ScrollView>
      {renderHeader()}
        <View style={styles.searchBar}>
          {renderSearch()}
        </View>
      </ScrollView>

    </KeyboardAvoidingView>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})


