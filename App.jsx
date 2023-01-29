import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native'
import {
  OnboardingScreen,
  Vehicles,
  Payment,
  Receipt,
  Login,
  Home,
  RouteScreen,
  InformationScreen,
  ResetScreen,
  SeatPicker,
} from './src/screens/index'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createNativeStackNavigator();


const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [count, setCount] = useState(0)
  const [isFirstLaunch, setIsFirstLaunch] = useState(null)

  useEffect(() => {
    SplashScreen.hide();

    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false)
      }
    })

    setIsLoading(true)
    setCount(count + 1)
    if (isLoading && (count == 0)) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', align }}>This is loading</View>
      )
    }
  }, [])


  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch == true) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }} initialRouteName="OnboardingScreen">
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RouteScreen" component={RouteScreen} />
          <Stack.Screen name="Vehicles" component={Vehicles} />
          <Stack.Screen name="SeatPicker" component={SeatPicker} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Receipt" component={Receipt} />
          <Stack.Screen name="Information" component={InformationScreen} />
          <Stack.Screen name="ResetScreen" component={ResetScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }} initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RouteScreen" component={RouteScreen} />
          <Stack.Screen name="Vehicles" component={Vehicles} />
          <Stack.Screen name="SeatPicker" component={SeatPicker} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Receipt" component={Receipt} />
          <Stack.Screen name="Information" component={InformationScreen} />
          <Stack.Screen name="ResetScreen" component={ResetScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }



}

export default App;
