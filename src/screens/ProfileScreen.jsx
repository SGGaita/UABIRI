import React, { useEffect } from 'react'
import {
    StyleSheet, Text, View, Dimensions, Image, ImageBackground, TouchableOpacity, ScrollView,SafeAreaView, BackHandler,Alert
} from 'react-native'
import { COLORS, SIZES, icons, images, FONTS } from '../constants'
import { profileData } from '../dummy/data'


// ==== 1 ====
const CARD_WIDTH = Dimensions.get('window').width * 0.8
const CARD_HEIGHT = Dimensions.get('window').height * 0.7
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10

export const ProfileScreen = ({ navigation }) => {

    useEffect(()=>{
        const backAction = () => {
            Alert.alert("Exit U Abiri!", "Are you sure you want to exit the U Abiri?", [
              {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
              },
              { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
          };
      
          const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
          );
      
          return () => backHandler.remove();
    },[])


    const renderModal = ()=>{
        return(
            <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>
        )
    }


    const renderHeader = () => {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: SIZES.padding * 2,
                    paddingHorizontal: SIZES.padding * 2
                }}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h1 }}
                >Select a Profile</Text>
            </View>
        )
    }

    const renderProfileCard = () => {
        return (
            profileData.map(item => {
                return (<View
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
            )
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground  style={{flex: 1 , backgroundColor:COLORS.blue}} source={images.nairobi}>
            <View style={{
                alignItems: 'center',
                justifyContent: 'space-between', flex: 1
            }}>
                {renderHeader()}
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={true}
                pagingEnabled
                decelerationRate={0}
                snapToInterval={CARD_WIDTH + 20}
                snapToAlignment='center'
                contentInset={{ // iOS ONLY
                    top: 0,
                    left: SPACING_FOR_CARD_INSET, // Left spacing for the very first card
                    bottom: 0,
                    right: SPACING_FOR_CARD_INSET // Right spacing for the very last card
                }}
                contentContainerStyle={{ // contentInset alternative for Android
                    paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 5 // Horizontal spacing before and after the ScrollView
                }}
            >
                {renderProfileCard()}
            </ScrollView>
            </ImageBackground>
           
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor:COLORS.blue
    },


})
