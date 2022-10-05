import React from 'react'
import {
    StyleSheet, Text, View, Dimensions, Image, ImageBackground, TouchableOpacity, ScrollView
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { COLORS, SIZES, icons, images, FONTS } from '../constants'

export const Onboarding = ({ navigation }) => {

    const renderHeader = () => {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: SIZES.padding * 2,
                    paddingHorizontal: SIZES.padding * 2
                }}
            >
                <Text style={{color: COLORS.white, ...FONTS.h4 }}
                >Select Onboarding Profile</Text>
            </View>
        )
    }


    const renderPassengerButton = () => {
        return (
            <TouchableOpacity
                style={{
                    height: SIZES.height / 4,
                    width: '100%',
                    backgroundColor: COLORS.emerald,
                    borderRadius: SIZES.radius / 3,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => navigation.navigate("Passenger")}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Passenger Onboarding</Text>
            </TouchableOpacity>
        )
    }

    const renderConductorButton = () => {
        return (
            <TouchableOpacity
                style={{
                    height: SIZES.height / 4,
                    width: '100%',
                    backgroundColor: COLORS.emerald,
                    borderRadius: SIZES.radius / 3,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Conductor Onboarding</Text>
            </TouchableOpacity>
        )
    }

    const renderVehicleOwner = () => {
        return (
            <TouchableOpacity
                style={{
                    height: SIZES.height / 4,
                    width: '100%',
                    backgroundColor: COLORS.emerald,

                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Vehicle owner Onboarding</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[COLORS.lime, COLORS.emerald]}
                style={styles.linearGradient}
            >
                <View style={{ height: 20, flex: 1 }}>
                    {renderHeader()}
                </View>


                <ScrollView style={styles.scrollview}>
                    <View style={styles.buttons}>
                        {renderPassengerButton()}
                    </View>
                    <View style={styles.buttons}>
                        {renderConductorButton()}
                    </View>
                    <View style={styles.buttons}>
                        {renderVehicleOwner()}
                    </View>
                </ScrollView>

            </LinearGradient>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    scrollview: {
        width: '100%',

    }

})
