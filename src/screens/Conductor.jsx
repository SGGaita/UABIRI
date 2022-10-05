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
import {transactions} from '../dummy/data'




export const Conductor = ({ route, navigation }) => {

  const [data, setData] = useState({})
  const [sacco, setSacco] = useState("");
  //const [alias,pnumber] = route.params

  

  useEffect(() => {
    setData(transactions)
    console.log("Data",transactions) 
  }, []);


  //handle filter
  const handleSaccoFilter = () => {
    console.log("Saccos", data)
    console.log("Search term", sacco)
    if (!sacco) {
      setData(data)
    } else {
      let filteredData = data.filter(x => x.name === sacco)

      console.log("Filtered Data", filteredData)
      setData(filteredData)
    }

  }
  //Render the search input field
  const renderSearch = () => {
    return (
      <View
        style={{
          marginHorizontal: SIZES.padding * 2,
          flex: 1,

        }}>
        {/**Alias */}
        <View style={{ marginTop: SIZES.padding * 1 }}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              left: 10,
              bottom: 10,
              height: 30,
              width: 30
            }}
            onPress={() => handleSaccoFilter()
              //TODO create a filter function to filter the list of saccos

            }
          >
            <Image
              source={icons.search}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.black
              }}
            />
          </TouchableOpacity>
          <TextInput style={{
            marginVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding * 5,
            border: COLORS.grey,
            borderWidth: 1,
            borderRadius: 20,
            height: 40,
            color: COLORS.black,
            ...FONTS.body3
          }}
            placeholder="Search by Mpesa Code"
            placeholderTextColor={COLORS.secondary}

            selectionColor={COLORS.black}
            value={sacco}
            onChangeText={text => {
              setSacco(text)

            }}
          />
        </View>
        <View>{renderButton()}</View>
        <View><Text style={{ marginVertical: 10, borderBottomColor: COLORS.black, borderBottomWidth: 1, color: COLORS.black, ...FONTS.h2 }}>Latest transactions</Text></View>
        <FlatList style={styles.flatList} data={data} renderItem={renderSaccos} keyExtractor={item => item.id} />

      </View>
    )
  }

  //render saccos list
  const renderSaccos = ({ item }) => {
    return (
      <TouchableOpacity style={{ height: 80, backgroundColor: COLORS.gray, marginVertical: 5 }}
        onPress={() => navigation.navigate("Payment")}
      >
        <View style={{ paddingHorizontal: 30, marginTop: 16 }}>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.h2 }}>
            Transaction Code:
          </Text>
          <Text style={{ color: COLORS.black, ...FONTS.h3 }}>{item.transactionCode}</Text>
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


