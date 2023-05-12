import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InNav from './navigators/InNav';
import OutNav from './navigators/OutNav';
import {  getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebaseConfig";


export default function App() {
  const [userObj, setUserObj] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  
 useEffect(()=>{
 onAuthStateChanged(auth,(user)=>{
    if(user){
      setLoggedIn(true);
    }else{
      setLoggedIn(false);
    }
  } )
 },[])
  return(
    <NavigationContainer>
      {loggedIn ? <InNav userObj={userObj}/> : <OutNav />}
    </NavigationContainer>
  )
};
