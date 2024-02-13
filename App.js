import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import BottomTabs from './components/BottomTabs';
import { Audio } from "expo-av";




const App = () => {
  useEffect(() => {
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
}, []);
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
    
  );
};

export default App;

