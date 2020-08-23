import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather';
import Constants from 'expo-constants'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipcodeScreen from './sceen/ZipCodeScreen';
import WeatherScreen from './sceen/WeatherScreen';
const Stack = createStackNavigator()

export default function App() {
 return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}  }>
          <Stack.Screen name ="Home" component={ZipcodeScreen} options={{ headerStyle: { backgroundColor: "black" }  ,headerTintColor: '#FFD472',}}/>
          <Stack.Screen name ="Weather" component = { WeatherScreen } options = {{headerStyle: { backgroundColor: "#FFD472" }} }/>
      </Stack.Navigator>
    </NavigationContainer>
 );
}

