import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rick from "../screens/Rick"
import Morty from "../screens/Morty"
import Beth from "../screens/Beth"
import Summer from "../screens/Summer"
import Jerry from "../screens/Jerry"
import Homepage from "../screens/Homepage"




const Stack = createNativeStackNavigator();


const Stacks = () => {

    return(
        <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Homepage} />
        <Stack.Screen name="Rick" component={Rick} />
        <Stack.Screen name="Morty" component={Morty} />
        <Stack.Screen name="Summer" component={Summer} />
        <Stack.Screen name="Beth" component={Summer} />
        <Stack.Screen name="Jerry" component={Jerry} />
      </Stack.Navigator>

    )





}

export default Stacks