import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Homepage from "./screens/Homepage"
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./navigation/tabs"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rick from "./screens/Rick"
import Stacks from "./navigation/stacks"




  




export default function App() {
  return (
  

     
      <NavigationContainer>
      <Tabs/>
      </NavigationContainer> 

   
     
  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image2: {
    flex: 4,
    width: null,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 130
    
},
});
