import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ImageBackground
  } from 'react-native'
  import LinearGradient from 'react-native-linear-gradient';
  import AsyncStorage from '@react-native-community/async-storage'
  import * as Animatable from 'react-native-animatable';
  import { COLORS, SIZES, icons, images, FONTS } from '../constants'
  import { Timer } from '../components/'

export const ResetScreen = ({navigation}) => {

    const renderHeader =()=>{
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
                <Animatable.Text animation="fadeInLeft" style={{ fontWeight: '700', ...FONTS.h1, color: COLORS.white }}>Password reset</Animatable.Text>
              </View>
            </View>
          )
    }

    const renderBody =()=>{

    }

    const renderButton =()=>{

    }
 
    
    return (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}>
          <ImageBackground style={{ flex: 1, backgroundColor: COLORS.blue }} source={images.nairobi}>
            {renderHeader()}
            <Animatable.View  animation="fadeInUpBig" style={styles.body}>
              {renderBody()}
              {renderButton()}
            </Animatable.View>
          </ImageBackground>
        </KeyboardAvoidingView>
      )
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: COLORS.blue
      },
    
      header: {
    
        flex: 1,
        flexDirection: "column",
       },
    
      body: {
        backgroundColor: COLORS.white,
        flex: 3,
        justifyContent: "flex-start",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    
      },
    })
    
