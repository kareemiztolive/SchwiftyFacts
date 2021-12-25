import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Homepage from "../screens/Homepage"
import Characters from "../screens/Characters"
import Episodes from "../screens/Episodes"
import Locations from "../screens/Locations"

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return(
        <Tab.Navigator
           >
            <Tab.Screen name="Home" component={Homepage} />
            <Tab.Screen name="Characters" component={Characters} />
            <Tab.Screen name="Epsiodes" component={Episodes} />
            <Tab.Screen name="Locations" component={Locations} />
        </Tab.Navigator>

    )
}


export default Tabs