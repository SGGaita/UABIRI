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
import { SearchBar } from '../components'
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import { transactions } from '../dummy/data'
import firestore from '@react-native-firebase/firestore';




export const Conductor = ({ route, navigation }) => {

  const [data, setData] = useState()
  const [searchText, setSearchText] = useState("");
  const [transaction, setTransaction] = useState()



  useEffect(() => {
    const subscriber = firestore()
      .collection('Transactions')
      .onSnapshot(querySnapshot => {
        // see next step
        const transact = [];

        querySnapshot.forEach(documentSnapshot => {
          transact.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        console.log("transact", transact)

        setTransaction(transact);
      //setLoading(false);
  
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();

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
        {/**Search bar */}
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <View>{renderButton()}</View>
        <View><Text style={{ marginVertical: 10, borderBottomColor: COLORS.black, borderBottomWidth: 1, color: COLORS.black, ...FONTS.h2 }}>Latest transactions</Text></View>
        <FlatList style={styles.flatList} data={transaction} renderItem={renderTransactions}  />

      </View>
    )
  }

  //render saccos list
  const renderTransactions = ({ item }) => {
    return (
      <TouchableOpacity style={{ paddingVertical: 20, backgroundColor: COLORS.white, marginVertical: 5, shadowColor: COLORS.lightGray, shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.2, shadowRadius: 3.5, elevation: 5 }}
        onPress={() => navigation.navigate("Payment")}
      >
        
        <View style={{ flexDirection: "row", paddingHorizontal: 30, marginTop: 16 }}>
          <Text style={{ color: COLORS.black, ...FONTS.h2, paddingRight: 20 }}>
            Transaction Code:
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body2 }}>{item.transactionCode}</Text>
        </View>

        <View style={{ flexDirection: "row", paddingHorizontal: 30, marginTop: 16 }}>
          <Text style={{ color: COLORS.black, ...FONTS.h2, paddingRight: 20 }}>
            Phone number:
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body2 }}>{item.phoneNumber}</Text>
        </View>
        <View style={{ flexDirection: "row", paddingHorizontal: 30, marginTop: 16 }}>
          <Text style={{ color: COLORS.black, ...FONTS.h2, paddingRight: 20 }}>
            Amount Paid:
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body2 }}>{item.amount}</Text>
        </View>
        {/* <View style={{ flexDirection: "row", paddingHorizontal: 30, marginTop: 16 }}>
          <Text style={{ color: COLORS.black, ...FONTS.h2, paddingRight: 20 }}>
            Date:
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body2 }}>{item.date}</Text>
        </View>  */}
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


