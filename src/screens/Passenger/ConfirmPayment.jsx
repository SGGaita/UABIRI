import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
  } from 'react-native'
  import {Timer} from '../../components'
  import { COLORS, SIZES, FONTS, icons, images } from '../../constants'
  import * as Animatable from 'react-native-animatable';
  import LinearGradient from 'react-native-linear-gradient';

export const ConfirmPayment = ({navigation}) => {


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
          <Animatable.Text animation="fadeInLeft" style={{ fontWeight: '700', ...FONTS.h1, color: COLORS.white }}>Confirm Payment</Animatable.Text>
        </View>
      </View>
    )
  }

  const renderBody =()=>{
    return(
        <View
        style={{
          marginVertical: SIZES.padding * 5,
          marginHorizontal: SIZES.padding * 3,
        }}>
</View>
    )
  }

  const renderButton =()=>{
    return(
        <View style={{ justifyContent: 'center' }}>
        <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.linearGradient}>
          <TouchableOpacity
            style={{
              height: 60,
              borderRadius: SIZES.radius / 1.5,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Confirm Payment</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    )
  }


  return (
    <View style={styles.container}>
    <ImageBackground style={{ flex: 1, backgroundColor: COLORS.blue }} source={images.nairobi}>

      {renderHeader()}
      <Animatable.View animation="fadeInUpBig" style={styles.body}>
        {renderBody()}
        {renderButton()}
      </Animatable.View>
    </ImageBackground>

  </View>
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
      justifyContent: "flex-start",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    }
  })
  
