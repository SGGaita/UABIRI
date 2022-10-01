import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import {
    Home, Payment, Profile
} from '../screens'
import { COLORS, icons } from '../constants'
import Svg, { Path } from 'react-native-svg'

const Tab = createBottomTabNavigator()
const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOption={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "transparent",
                    elevation: 0
                },
                tabBarButton: (props) => {
                    <TabBarCustomButton
                        {...props}
                    />
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        <Image
                            source={icons.more}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.secondary
                            }}
                        />
                    }
                }}
            />

            <Tab.Screen
                name="Payment"
                component={Payment}
                options={{
                    tabBarIcon: ({ focused }) => {
                        <Image
                            source={icons.scan}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.secondary
                            }}
                        />
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.secondary
                            }}
                        />
                    }
                }}
            />
        </Tab.Navigator>
    )

}


export default Tabs;
