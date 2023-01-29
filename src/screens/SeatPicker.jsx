import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, Image, TouchableOpacity, TextInput, ImageBackground, Alert } from 'react-native'
import { COLORS, SIZES, FONTS, images, icons } from '../constants';
import { Timer } from '../components'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

export const SeatPicker = ({navigation,route, seats = 15 }) => {
    const { data, saccoName, paymentData, vehicle } = route.params
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [numPassengers, setNumPassengers] = useState(1);
    const [count, setCount] = useState(0)

    const handleSeatPress = (seat) => {
        setCount(selectedSeats.length)
        if (selectedSeats.length < numPassengers) {
            setSelectedSeats([...selectedSeats, seat]);
        }
    }

    const handleNumPassengerChange = (val) => {
        setNumPassengers(val);
    }

    const handleSubmit = () => {
        if (!numPassengers || selectedSeats.length !== Number(numPassengers)) {
            Alert.alert(
            'Error',
            'Please enter the correct number of passengers and select the corresponding number of seats',
            [{ text: 'OK' }],
            { cancelable: false },
            );
            } else {
                navigation.navigate('Payment',{data:data, paymentData:paymentData,vehicle:vehicle, seats:selectedSeats.join(', '),totalseats: selectedSeats.length, })
            console.log(`Selected seats: ${selectedSeats.join(', ')}`);
            }
    }

    const handleClear = () => {
        setSelectedSeats([]);
        setNumPassengers('')
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
                    <Animatable.Text animation="fadeInLeft" style={{ fontWeight: '700', ...FONTS.h1, color: COLORS.white }}>Seat Picker</Animatable.Text>
                </View>
            </View>
        )
    }


    const renderBody = () => {
        return (
            <View>
                <TextInput
                    style={{
                        color: COLORS.black,
                        ...FONTS.body3,
                        fontWeight: "700"
                    }}
                    placeholder="Enter number of passengers"
                    onChangeText={handleNumPassengerChange}
                    value={numPassengers}
                    keyboardType="numeric"
                    autoFocus={true}
                    placeholderTextColor={COLORS.gray}
                    selectionColor={COLORS.black}
                />
                <Text style={{
                    paddingVertical: 20,
                    ...FONTS.h4,
                    fontWeight: "700",
                    color: COLORS.black
                }}>Pick seats</Text>
                <Text style={{
                    paddingVertical: 5,
                    ...FONTS.h4,
                    fontWeight: "700",
                    color: COLORS.black
                }}>{`Number of seats selected: ${selectedSeats.length}`}</Text>
                <Text style={{
                    paddingVertical: 5,
                    ...FONTS.h4,
                    fontWeight: "700",
                    color: COLORS.black
                }}>{`Seats selected: ${selectedSeats.join(', ')}`}</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                    {Array.from({ length: seats }, (_, i) => {
                        if (i === 0) {
                            return (
                                <View key={i} style={{ width: '33.33%', height: 50, backgroundColor: 'gray' }}>
                                    <Text style={{ textAlign: 'center', marginTop: 10 }}>Driver</Text>
                                </View>
                            );
                        }
                        const isSelected = selectedSeats.includes(i);
                        return (
                            <TouchableOpacity key={i} style={{ width: '33.33%', height: 50, backgroundColor: isSelected ? COLORS.blue : COLORS.lightGray }} onPress={() => handleSeatPress(i)}>
                                <Text style={{ color: COLORS.black, textAlign: 'center', marginTop: 10 }}>{i}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.linearGradient}>
                    <TouchableOpacity
                        style={{
                            height: 60,

                            borderRadius: SIZES.radius / 1.5,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={handleSubmit}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Submit</Text>

                    </TouchableOpacity>
                </LinearGradient>

                <LinearGradient colors={['#585959', '#323232']} style={styles.linearGradient}>
                    <TouchableOpacity
                        style={{
                            height: 60,

                            borderRadius: SIZES.radius / 1.5,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={handleClear}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Clear</Text>

                    </TouchableOpacity>
                </LinearGradient>
            </View>
        );
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
    linearGradient: {
        marginVertical: 5,
    }
})


