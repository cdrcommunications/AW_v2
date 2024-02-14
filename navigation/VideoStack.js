// VideoStack.js
// Description: Manages navigation for video-related screens within the app. This stack navigator allows users
// to navigate between the main video listing screen and individual video details. It ensures a cohesive
// navigation experience focused on video content.

//UPDATES:
//I've moved the styling into a StyleSheet at the bottom of the file, which makes the code cleaner and separates concerns (styling vs. logic). 
//I added comments to describe the purpose of the file and the functionality of each part, enhancing code readability and maintainability.

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VideosScreen from '../screens/VideosScreen'; // Screen listing videos
import VideoDetails from '../components/VideoDetails'; // Screen for displaying video details
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const VideoStack = () => {
  return (
    <Stack.Navigator screenOptions={styles.screenOptions}>
      <Stack.Screen 
        name="VideoScreen" 
        component={VideosScreen}
        options={{
          title: "",
          headerShown: false, // Opting to hide the header for the video listing for a fullscreen experience
        }}
      />
      <Stack.Screen 
        name="VideoDetails" 
        component={VideoDetails}
        options={{
          headerStyle: styles.headerStyle,
          headerTintColor: 'white',
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  screenOptions: {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    }
  },
  headerStyle: {
    height: 100,
    backgroundColor: '#6ACDEA',
    shadowOpacity: 0,
    elevation: 0,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: 20,
  },
});

export default VideoStack;
