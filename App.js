// App.js
// Description: Main entry point of the React Native application. It sets up the navigation container
// and includes the bottom tab navigation setup through the BottomTabs component. Also, it configures
// the audio mode for iOS to play audio in silent mode.

import 'react-native-gesture-handler'; // Required for gesture handling in the app
import { NavigationContainer } from '@react-navigation/native'; // Navigation context provider
import React, { useEffect } from 'react'; // React imports, useEffect for lifecycle management
import BottomTabs from './navigation/BottomTabs'; // Import bottom tabs navigation setup
import { Audio } from "expo-av"; // Import Expo AV for audio management




const App = () => {

  useEffect(() => {
    // Ensures audio plays in silent mode on iOS devices
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true
    });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );


};

export default App;



