import { View, Text, KeyboardAvoidingView, StyleSheet, ScrollView, Button, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SearchBar, Header } from '../components'
import { COLORS, FONTS, SIZES, icons } from '../constants';

export const Vehicles = ({ navigation, route }) => {

    const [searchText, setSearchText] = useState("");
    const { routeData, paymentData, saccoName } = route.params
    const [vehiclesData, setVehiclesData] = useState(routeData.vehicles)
    const [paymentData3, setPaymentData] = useState({ ...paymentData, saccoName })
    //


    useEffect(() => {

        setPaymentData({ ...paymentData3, routeName: routeData.routeName })


    }, [])





    //Render page header
    const renderHeader = () => {
        return (

            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", elevation: 5, height: 50, backgroundColor: COLORS.black }}>
                <View style={{ flex: 1, height: 50, justifyContent: "center" }}>
                    <Button
                        onPress={() => alert('This is a button!')}
                        title="Back"
                        color="#010000"
                    />
                </View>
                <View style={{ flex: 8, height: 50, justifyContent: "center" }}>
                    <Text style={{ color: COLORS.black, alignSelf: "center", fontWeight: "700", ...FONTS.h3 }}>Route: {routeData.routeName}</Text>
                </View>
            </View>
        )
    }

    //render vehicles
    const renderVehicles = ({ item, index }) => {
        if (searchText === "") {
            return (
                <TouchableOpacity

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
                    onPress={() => navigation.navigate("Payment", { data: routeData, paymentData: paymentData3, vehicle: item.vehicleRegistration })}
                >
                    <View style={{ flex: 1, alignContent: "center", justifyContent: "center", borderRadius: 5 }}>
                        <Text style={{ color: COLORS.black, fontWeight: "600", ...FONTS.h2 }}>{index + 1}.{item.vehicleRegistration}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        if (item.vehicleRegistration.toUpperCase().includes(searchText.toUpperCase().trim().replace(/\s/g, ""))) {
            return (
                <TouchableOpacity

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
                    onPress={() => navigation.navigate("Payment", { data: routeData, paymentData: paymentData3, vehicle: item.vehicleRegistration })}
                >
                    <View style={{ flex: 1, alignContent: "center", justifyContent: "center", borderRadius: 5 }}>
                        <Text style={{ color: COLORS.black, fontWeight: "600", ...FONTS.h2 }}>{index + 1}.{item.vehicleRegistration}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        // if (item.vehicleRegistration.toUpperCase().includes(searchText.toUpperCase().trim().replace(/\s/g, ""))) {
        // if(item.length === 0){
        //     return <View><Text style={{color:COLORS.black}}>No record was found</Text></View>
        //   }
        // }


    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            <View >
                <View style={{ marginVertical: SIZES.padding * 3, backgroundColor: COLORS.black }}>
                    {renderHeader()}
                </View>


                <View style={{ marginVertical: SIZES.padding * 1, marginHorizontal: SIZES.padding * 2 }}>
                    <SearchBar searchText={searchText} setSearchText={setSearchText} placeholder="Search by vehicle registration" />
                </View>
                <View style={{ marginHorizontal: SIZES.padding * 2 }} >
                    <Text
                        style={{
                            paddingTop: 20,
                            paddingHorizontal: 20,
                            ...FONTS.h2,
                            fontWeight: "700",
                            color: COLORS.black
                        }}
                    >
                        Vehicles
                    </Text>
                    <View>
                        <FlatList data={vehiclesData} renderItem={renderVehicles} />
                    </View>
                </View>
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

})

