import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import QRgenerator from "../screens/QRgenerator";
import QRscanner from "../screens/QRscanner";
import History from "../screens/History";
import Profile from "../screens/Profile";

const Nav = createNativeStackNavigator();

const InNav = ()=>{

    return(
        <Nav.Navigator screenOptions={{headerShown:false}}>
           <Nav.Screen name="Home" component={Home} />
           <Nav.Screen name="QRgenerator" component={QRgenerator} />
           <Nav.Screen name="QRscanner" component={QRscanner} />
           <Nav.Screen name="History" component={History} />
           <Nav.Screen name="Profile" component={Profile} />
        </Nav.Navigator>
    )

}

export default InNav;