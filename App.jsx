import React, { useState, useEffect } from 'react';
import { createStackNavigator } from "@react-navigation-stack";
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native'
import { Home, Login, Splash, Payment,Receipt, Passenger, Conductor, Onboarding,SearchRoutes } from './src/screens/index'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './src/navigation/tabs'
import SplashScreen from 'react-native-splash-screen'

const Stack = createNativeStackNavigator();


const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    SplashScreen.hide();

    setIsLoading(true)
    setCount(count + 1)
    if (isLoading && (count == 0)) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', align }}>This is loading</View>
      )
    }
  }, [])


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }} initialRouteName="Passenger">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Passenger" component={Passenger} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="SearchRoutes" component={SearchRoutes}/>
        <Stack.Screen name="Payment" component={Payment}></Stack.Screen>
        <Stack.Screen name="Receipt" component={Receipt}></Stack.Screen>
        <Stack.Screen name="Conductor" component={Conductor}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
