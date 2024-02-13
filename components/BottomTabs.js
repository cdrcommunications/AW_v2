import React from 'react';
import {
  TouchableOpacity,
  View
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DonationStack from '../components/DonationStack';
import VideoStack from '../components/VideoStack';
import Icon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {

  return (
    <Tab.Navigator
        initialRouteName="Videos"
        >
        <Tab.Screen
          name="Videos"
          component={VideoStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="video" color={color} size={26}/>
            ),
            title: "",
            tabBarShowLabel: false,
            headerStyle: {
              height: 0
            }
          }}
        />
        <Tab.Screen
          name="About"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="info" color={color} size={26}/>
            ),
            title: "",
            tabBarShowLabel: false,
            headerStyle: {
              height: 0,
              backgroundColor:'white'
            }
          }}
          />
          <Tab.Screen
            name="Donate"
            component={DonationStack}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ color }) => (
                <Icon name="heart-outlined" color={color} size={26}/>
              ),
              title: "",
              headerStyle: {
                height: 0
              },
            }}
          />
     </Tab.Navigator>
  );
};


export default BottomTabs;
