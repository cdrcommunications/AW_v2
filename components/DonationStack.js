// DonationStack.js
// Description: Sets up the navigation stack for donation-related screens. It includes the main donations
// screen and a subscribe screen, allowing users to navigate between these features easily. Styles are
// managed using StyleSheet for consistency and better performance.

//UPDATES:
//Centralizes your style definitions, making it easier to update and maintain them.
//Improves the performance of your app by using the optimized StyleSheet creation method provided by React Native.
//Keeps your component code clean and focused on functionality rather than mixed with styling concerns.

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DonationsScreen from '../screens/DonationsScreen'; // Screen for donations overview
import SubscribeScreen from '../screens/SubscribeScreen'; // Screen for newsletter subscription
import { StyleSheet } from 'react-native'; // Import StyleSheet for styling

const Stack = createStackNavigator(); // Initialize stack navigator

const DonationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Donations" // Set initial route to Donations screen
      screenOptions={{
        headerStyle: styles.headerCommonStyle, // Apply common header style
      }}>
      <Stack.Screen
        name="Donations"
        component={DonationsScreen}
        options={{
          title: "",
          headerShown: false, // Hide the header for a cleaner UI
        }}
      />
      <Stack.Screen
        name="Subscribe"
        component={SubscribeScreen}
        options={{
          title: "", // set it to 
          headerStyle: styles.subscribeHeaderStyle, // Apply specific style for Subscribe screen header
          headerTintColor: 'white', // Set header text color
        }}
      />
    </Stack.Navigator>
  );
};

// StyleSheet for organizing styles
const styles = StyleSheet.create({
  headerCommonStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    height: 0, // Hide header by setting height to 0
  },
  subscribeHeaderStyle: {
    height: 100, // Specific height for Subscribe screen header
    backgroundColor: '#6ACDEA', // Custom background color
    shadowOpacity: 0,
    elevation: 0,
  },
});

export default DonationStack;
