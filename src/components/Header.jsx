import { View, Text, Button } from 'react-native'
import React from 'react'
import {COLORS, FONTS} from '../constants'

export const Header = ({props}) => {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", height: 50, backgroundColor: COLORS.white }}>
    <View style={{ flex: 1, height: 50, justifyContent: "center" }}>
        <Button
            onPress={props.onPress}
            title={props.title}
            color={props.color}
        />
    </View>
    <View style={{ flex: 8, height: 50, justifyContent: "center" }}>
        <Text style={{ color: COLORS.black, alignSelf: "center", fontWeight: "700", ...FONTS.h3 }}>Route: {routeData.routeName}</Text>
    </View>
</View>
  )
}

