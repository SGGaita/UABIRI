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

export const SearchRoutes = ({ route, navigation }) => {

    const saccos = () => {
  
      return Regions.map(x => x.saccos)
    }
  
    const [data, setData] = useState(saccos()[0])
    const [searchText, setSearchText] = useState("");
    //const { itemId, otherParam } = route.params;
  
  
  
    //setData(Regions)
  
    useEffect(() => {
      console.log("Flat Data ", data)
  
    }, []);
  
  
    //handle filter
    const handleSaccoFilter = () => {
  
  
    }
    //Render the search input field
    const renderSearch = () => {
      return (
        <View
          style={{
            marginHorizontal: SIZES.padding * 2,
            flex: 1,
  
          }}>
          {/**Search bar */}
          <SearchBar placeholder="Search route" searchText={searchText} setSearchText={setSearchText} />
          <View><Text style={{ color: COLORS.black }}>{searchText}</Text></View>
          <View>{renderButton()}</View>
          <View><Text style={{ marginVertical: 10, borderBottomColor: COLORS.black, borderBottomWidth: 1, color: COLORS.black, ...FONTS.h2 }}>Saccos</Text></View>
          <FlatList style={styles.flatList} data={data} renderItem={renderSaccos} />
  
        </View>
      )
    }
  
    //render saccos list
    const renderSaccos = ({item}) => {
      return (
        <TouchableOpacity style={{ height: 80, backgroundColor: COLORS.white, marginVertical: 5, shadowColor: COLORS.lightGray, shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.2, shadowRadius: 3.5, elevation: 5 }}
          onPress={() => navigation.navigate("SearchRoutes")}
  
        >
          <View style={{ flexDirection: "row", paddingHorizontal: 30, marginTop: 16 }}>
            <Text style={{ color: COLORS.black, ...FONTS.h2, paddingRight: 20 }}>
              Sacco name:
            </Text>
            <Text style={{ color: COLORS.black, ...FONTS.body2 }}>{item.saccoName}</Text>
          </View>
        </TouchableOpacity>
      )
  
  
    }
  
    const renderButton = () => {
      return (
        <View style={{ margin: SIZES.padding * 1 }}>
          <TouchableOpacity
            style={{
              height: 60,
              backgroundColor: COLORS.black,
              borderRadius: SIZES.radius / 1.5,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={handleSaccoFilter}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Search</Text>
          </TouchableOpacity>
        </View>
      )
    }
  
  
  
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
  
        <View style={styles.searchBar}>
          {renderSearch()}
        </View>
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