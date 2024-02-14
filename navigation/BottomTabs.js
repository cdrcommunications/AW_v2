// BottomTabs.js
// Description: This file configures the bottom tab navigator for the application using React Navigation.
// It defines three main navigation tabs: Videos, About, and Donate, each associated with their respective
// stacks or screens and custom icons.

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DonationStack from './DonationStack';
import Icon from 'react-native-vector-icons/Entypo'; // Using Entypo icons for tab icons
import VideosScreen from '../screens/VideosScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Videos">
      {/* Videos Tab */}
      <Tab.Screen
        name="Videos"
        component={VideosScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="video" color={color} size={26} /> // Custom icon for Videos tab
          ),
          title: "",
          tabBarShowLabel: false, // Hide tab label for a cleaner look
          headerStyle: {
            height: 0 // Hide the header
          }
        }}
      />
      {/* About Tab */}
      <Tab.Screen
        name="About"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="info" color={color} size={26} /> // Custom icon for About tab
          ),
          title: "",
          tabBarShowLabel: false, // Hide tab label
          headerStyle: {
            height: 0, // Hide the header
            backgroundColor: 'white' // Ensure the header background is white if ever shown
          }
        }}
      />
      {/* Donate Tab */}
      <Tab.Screen
        name="Donate"
        component={DonationStack}
        options={{
          tabBarShowLabel: false, // Hide tab label
          tabBarIcon: ({ color }) => (
            <Icon name="heart-outlined" color={color} size={26} /> // Custom icon for Donate tab
          ),
          title: "",
          headerStyle: {
            height: 0 // Hide the header
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
