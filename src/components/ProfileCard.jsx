import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ProfileCard = () => {
    return (
        <View
            key={item.id}
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}>

            <View style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                borderRadius: CARD_HEIGHT / 2,
                margin: 5,
                elevation: 10,
                shadowColor: '#020202a7',
                backgroundColor: COLORS.white,
                alignItems: "center",
                justifyContent: "space-around",
                paddingVertical: 30
            }}>

                <View style={{ height: 160, width: 120, }}>
                    <Image style={{ height: 160, width: 120, borderBottomRightRadius: 60, borderBottomLeftRadius: 60 }} source={item._image} />
                </View>

                <View>
                    <Text style={{ ...FONTS.h2, color: COLORS.blue }}>{item.name}</Text>
                </View>

                <View style={{ paddingHorizontal: 40, alignItems: "center" }}>
                    <Text style={{ textAlign: "center", ...FONTS.body3, color: COLORS.black }}>{item.description}</Text>
                </View>

                <View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.gray,
                            height: 60,
                            width: 60,
                            borderRadius: 60 / 2,
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                        onPress={() => navigation.navigate(`${item._navigate}`)}
                    >
                        <Image source={icons.check} style={{ color: COLORS.white, height: 30, width: 30 }} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export { ProfileCard }