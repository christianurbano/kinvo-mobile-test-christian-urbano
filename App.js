import React from 'react';
import AppLoading from 'expo-app-loading';
import { Montserrat_700Bold, Montserrat_600SemiBold, Montserrat_500Medium, useFonts  } from '@expo-google-fonts/montserrat';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/routes/index';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
  });  
    if (!fontsLoaded){
      return <AppLoading/>
    }
    
return (
  <NavigationContainer>
    <StatusBar/>
    <Routes/>
  </NavigationContainer>
);
}

