import React from "react";
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import {
    Home, Payment, Profile, Transactions
} from '../screens'
import { COLORS, icons } from '../constants'
import Svg, { Path } from 'react-native-svg'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                tabBarShowLabel: false,
                activeTintColor: '#F60081',
                tabBarStyle: {
                    backgroundColor: COLORS.black,
                    borderTopColor: 'transparent',
                    alignItems: "center",
                    height: 70
                }
            }
            }
        >
            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ focused, color, size }) =>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                            <Image
                                source={icons.search}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.white : COLORS.lightGray
                                }}

                            />
                            <Text style={{ color: focused ? COLORS.white : COLORS.lightGray, top: 10, fontSize: 12 }}>Search</Text>
                        </View>,
                         headerLeft: () => (
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Back"
                                color="#010000"
                            />)

                }}
            />

            <Tab.Screen
                name="Transactions"
                component={Transactions}
                options={{
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ focused, color, size }) => {
                        return <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                            <Image
                                source={icons.wallet}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.white : COLORS.gray
                                }}

                            />
                            <Text style={{ color: focused ? COLORS.white : COLORS.lightgray, top: 10, fontSize: 12 }}>Transactions</Text>
                        </View>
                    },

                    headerLeft: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Back"
                            color="#010000"
                        />)

                }}

            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ focused, color, size }) =>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                            <Image
                                source={icons.user}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.white : COLORS.gray
                                }}

                            />
                            <Text style={{ color: focused ? COLORS.white : COLORS.lightgray, top: 10, fontSize: 12 }}>Profile</Text>
                        </View>
                        ,
                        headerLeft: () => (
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Back"
                                color="#010000"
                            />)

                }}

            />
        </Tab.Navigator>
    )

}


export default Tabs;
