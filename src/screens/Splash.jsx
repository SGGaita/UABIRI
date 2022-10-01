import react from 'react'
import {
  StyleSheet, Text, View, Dimensions, Image, ImageBackground
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { COLORS, SIZES, icons, images, FONTS } from '../constants'

export const Splash = () => {
  return (

    <LinearGradient
      colors={[COLORS.lime, COLORS.emerald]}
      style={styles.linearGradient}
    >
     
        <Image
          source={images.uabiriLogo}
          resizeMode="contain"
          style={{
            width: "60%",
            tintColor: COLORS.white
          }}
        />
     

    </LinearGradient>


  )
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    color: 'white',
    fontSize: 35,

  }
})


