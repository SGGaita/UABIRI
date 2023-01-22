import React, { useState, useEffect } from 'react';
import { createStackNavigator } from "@react-navigation-stack";
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native'
import {
  OnboardingScreen,
  Login,
  Vehicles,
  Payment,
  Receipt,
  Passenger,
  Home,
  Conductor,
  ProfileScreen,
  SearchRoutes,
  VehicleOwner,
  RouteScreen,
  InformationScreen,
  ResetScreen,
  ConfirmPayment
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
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Passenger" component={Passenger} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RouteScreen" component={RouteScreen} />
          <Stack.Screen name="Vehicles" component={Vehicles} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="ConfirmPayment" component={ConfirmPayment}/>
          <Stack.Screen name="Receipt" component={Receipt} />
          <Stack.Screen name="Conductor" component={Conductor} />
          <Stack.Screen name="Owner" component={VehicleOwner} />
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
          }} initialRouteName="Receipt">
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Passenger" component={Passenger} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RouteScreen" component={RouteScreen} />
          <Stack.Screen name="Vehicles" component={Vehicles} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="ConfirmPayment" component={ConfirmPayment}/>
          <Stack.Screen name="Receipt" component={Receipt} />
          <Stack.Screen name="Conductor" component={Conductor} />
          <Stack.Screen name="Owner" component={VehicleOwner} />
          <Stack.Screen name="Information" component={InformationScreen} />
          <Stack.Screen name="ResetScreen" component={ResetScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }



}

export default App;
