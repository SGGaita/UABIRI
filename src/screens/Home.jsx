import react, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import { SearchBar } from '../components/index'
import { Regions } from '../dummy/data'
import { doc, onSnapshot } from "firebase/firestore";
import { db, storage } from "../../config";





export const Home = ({navigation, route }) => {

  const saccos = () => {

    return Regions.map(x => x.saccos)[0]
  }

  const [saccoData, setSaccos] = useState(saccos())
  const [searchText, setSearchText] = useState("");
  const [currentSelected, setcurrentSelected] = useState([0])
 

  useEffect(() => {
    console.log(route.params)
    //console.log("Flat Data ", saccoData)

  }, []);




  //Render the search input field
  const renderSearch = () => {
    return (
      <View
        style={{
          marginHorizontal: SIZES.padding * 2,
          flex: 1,

        }}>
        {/**Search bar */}
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <View><Text style={{ color: COLORS.black }}>{searchText}</Text></View>
        {/* <View>{renderButton()}</View> */}
        <View><Text style={{ fontWeight: "700", marginVertical: 10, borderBottomColor: COLORS.black, borderBottomWidth: 1, color: COLORS.black, ...FONTS.h1 }}>Saccos</Text></View>
        <FlatList horizontal={true} style={styles.flatList} data={saccoData} renderItem={renderSaccos} showsHorizontalScrollIndicator={false} />
        
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
              onPress={()=> navigation.navigate("Payment", {
                routeID: data
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



  //render saccos list
  const renderSaccos = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          alignItems: "center",
          justifyContent: "space-evenly",
          height: 70,
          width: 150,
          marginHorizontal: 10,
          backgroundColor: currentSelected == index ? COLORS.yellow : COLORS.white,
          marginVertical: 5,
          borderRadius: 20,
          elevation: 5
        }}
        onPress={() => setcurrentSelected(index)}
      >
        <View style={{ flex: 1, paddingHorizontal: 30, alignContent: "center", justifyContent: "center", borderRadius: 5 }}>
          <Text style={{ color: COLORS.black, fontWeight: "600", ...FONTS.h2 }}>{item.saccoName}</Text>
        </View>
      </TouchableOpacity>
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
  },

  linearGradient: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },

  searchBar: {
    flex: 2
  },

  flatList: {



  }
})


