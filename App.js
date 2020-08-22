import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const doIt = () => {
      console.log("Hello form console")
    }
  return (
    <View style={styles.container}>
      <Text onPress = {doIt}>Hello Word</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color : 'white',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
