import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Homepage from "../screens/Homepage"
import Characters from "../screens/Characters"
import Episodes from "../screens/Episodes"
import Locations from "../screens/Locations"
import {View, Image, TouchableOpacity } from 'react-native';


const Tab = createBottomTabNavigator()

const Tabs = () => {
    return(
        <Tab.Navigator
        screenOptions={{headerShown:false}}>
            <Tab.Screen name="Home" component={Homepage} options={{
                tabBarIcon: () => (
                    <View>
                        <Image source={require("../icons/home.png")}
                          resizeMode="contain"
                          style={{
                              width:25,
                              height:25
                          }}         
                        />  
                    </View>

                )}}/>
            <Tab.Screen name="Characters" component={Characters} options={{
                tabBarIcon: () => (
                    <View>
                        <Image source={require("../icons/user.png")}
                          resizeMode="contain"
                          style={{
                              width:25,
                              height:25
                          }}         
                        />  
                    </View>

                )}} />
            <Tab.Screen name="Episodes" component={Episodes} options={{
                tabBarIcon: () => (
                    <View>
                        <Image source={require("../icons/comment-user.png")}
                          resizeMode="contain"
                          style={{
                              width:25,
                              height:25
                          }}         
                        />  
                    </View>

                )}}/>
            <Tab.Screen name="Locations" component={Locations} options={{
                tabBarIcon: () => (
                    <View>
                        <Image source={require("../icons/world.png")}
                          resizeMode="contain"
                          style={{
                              width:25,
                              height:25
                          }}         
                        />  
                    </View>

                )}}/>
        </Tab.Navigator>

    )
}


export default Tabs