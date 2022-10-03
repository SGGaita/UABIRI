import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import {
    Home, Payment, Profile
} from '../screens'
import { COLORS, icons } from '../constants'
import Svg, { Path } from 'react-native-svg'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false
            }
            }
        >
            <Tab.Screen
                name="Welcome"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        <Image
                            source={icons.more}
                            style={{ width: 25, height: 25, borderColor: COLORS.black, tintColor: COLORS.black }}
                        />
                    }
                }}
            />

            <Tab.Screen
                name="Payment"
                component={Payment}

                options={{
                    tabBarIcon: ({ focused, color, size }) =>{
                        return <Ionicons name="logo-bitcoin" color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Ionicons name="logo-bitcoin" color={color} size={size} />
                    }


                }}
            />
        </Tab.Navigator>
    )

}


export default Tabs;
