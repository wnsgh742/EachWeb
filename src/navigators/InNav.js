import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import QRgenerator from "../screens/QRgenerator";
import QRscanner from "../screens/QRscanner";




const Nav = createNativeStackNavigator();

const InNav = ()=>{ 
    return(
        <Nav.Navigator screenOptions={{headerShown:false}}>
           <Nav.Screen name="Home" component={Home} />
           <Nav.Screen name="QRgenerator" component={QRgenerator} />
           <Nav.Screen name="QRscanner" component={QRscanner} />
        </Nav.Navigator>
    )
}
export default InNav;