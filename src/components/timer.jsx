import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { COLORS, SIZES, FONTS, icons, images } from '../constants'

export const Timer = () => {

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];


    let time = new Date().toLocaleTimeString()

    const [ctime, setTime] = useState(time)
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString()
        setTime(time)
    }
    

    useEffect(()=>{
       const interval = setInterval(UpdateTime)

       return () => clearInterval(interval)
    },[])

    return (
        <View>
            <Text style={{ fontWeight: '700', ...FONTS.h5, color: COLORS.white }}>{day} {ctime}</Text>
        </View>
    )
}
