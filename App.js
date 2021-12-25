import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native';
import Homepage from "./screens/Homepage"
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./navigation/tabs"
  




export default function App() {
  return (
  

    <View style={styles.container}>
      <Homepage/>    
      <Text></Text>
      <StatusBar style="auto" />
      <NavigationContainer>
      <Tabs/>
      </NavigationContainer>  
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
