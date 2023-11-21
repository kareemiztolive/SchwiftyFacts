import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rick from "../screens/Rick"
import Morty from "../screens/Morty"
import Beth from "../screens/Beth"
import Summer from "../screens/Summer"
import Jerry from "../screens/Jerry"
import Homepage from "../screens/Homepage"
import Episodedetails from '../screens/Episodedetails';




const Stack = createNativeStackNavigator();


const Stacks = () => {

    return(
        <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Homepage" component={Homepage} />
        <Stack.Screen name="Rick" component={Rick} />
        <Stack.Screen name="Morty" component={Morty} />
        <Stack.Screen name="Summer" component={Summer} />
        <Stack.Screen name="Beth" component={Beth} />
        <Stack.Screen name="Jerry" component={Jerry} />
        <Stack.Screen name="Episodedetails" component={Episodedetails} />

      </Stack.Navigator>

    )





}

export default Stacks