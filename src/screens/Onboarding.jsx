import { StyleSheet, Image } from 'react-native'
import React, {useEffect} from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { images } from '../constants';

export const OnboardingScreen = ({ navigation }) => {

    


    return (
        <Onboarding
            onSkip={() => navigation.replace('ProfileScreen')}
            onDone={() => navigation.navigate('ProfileScreen')}

            pages={[
                {
                    backgroundColor:'#c6e99d' ,
                    image: <Image style={styles.image} source={images.vehicle} />,
                    title: 'Board a Matatu',
                    subtitle: 'Pick and board a Matatu of you choice.',
                    titleStyles: {
                        fontSize: 30,
                        fontWeight: '500',
                    },
                    subTitleStyles: {
                        fontSize: 20,
                        fontWeight: '500',
                    }
                },
                {
                    backgroundColor: '#f1e192',
                    image: <Image style={styles.image} source={images.select} />,
                    title: 'Select Vehicle ',
                    subtitle: 'Select the Vehicle registration based on the route and Sacco.',
                    titleStyles: {
                        fontSize: 30,
                        fontWeight: '500',
                    },
                    subTitleStyles: {
                        fontSize: 20,
                        fontWeight: '500',
                    }
                },
                {
                    backgroundColor: '#efc378',
                    image: <Image style={styles.image} source={images.payment} />,
                    title: 'Pay via Mobile ',
                    subtitle: 'Pay the fare at your convinience via MPESA.',
                    titleStyles: {
                        fontSize: 30,
                        fontWeight: '500',
                    },
                    subTitleStyles: {
                        fontSize: 20,
                        fontWeight: '500',
                    }
                },

            ]}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 330,
        height: 300
    }
})