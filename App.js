import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import Splash from './src/screens/splash'
import Home from './src/screens/home'
import Chat from './src/screens/chat'
import { useFonts } from 'expo-font';
import AppRoute from './src/routes/appoutes'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#416c6e',
    accent: '#f1c40f',
  },
};
export default function App() {
  const [loaded] = useFonts({
    PoppinsBlack: require('./src/fonts/Poppins-Black.ttf'),
    PB: require('./src/fonts/Poppins-Bold.ttf'),
    PEB: require('./src/fonts/Poppins-ExtraBold.ttf'),
    PEL: require('./src/fonts/Poppins-ExtraLight.ttf'),
    PL: require('./src/fonts/Poppins-Light.ttf'),
    PM: require('./src/fonts/Poppins-Medium.ttf'),
    PR: require('./src/fonts/Poppins-Regular.ttf'),
    PSB: require('./src/fonts/Poppins-SemiBold.ttf'),
    PT: require('./src/fonts/Poppins-Thin.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    loaded==true?  <><StatusBar style="light" /> 
     <PaperProvider theme={theme}>
    <AppRoute/>
  </PaperProvider></>:<View></View>
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
