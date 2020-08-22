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
      <Stack.Navigator>
          <Stack.Screen name ="Home" component={ZipcodeScreen} />
          <Stack.Screen name ="Weather" component = { WeatherScreen } />
      </Stack.Navigator>
    </NavigationContainer>
 );
}

