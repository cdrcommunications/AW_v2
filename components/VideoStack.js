import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VideosScreen from '../screens/VideosScreen';
import VideoDetails from './VideoDetails';

const Tab = createStackNavigator();

const VideoStack = () => {

  return (
    <Tab.Navigator
        barStyle={{elevation: 0, shadowOpacity: 0}}
        >
        <Tab.Screen 
            name="VideoScreen" 
            component={VideosScreen}
            options={{
                title: "",
                tabBarShowLabel: false,
                headerStyle: {
                    height: 0
                }
            }}
          />
        <Tab.Screen 
            name="VideoDetails" 
            component={VideoDetails}
            options={{
                headerStyle: {
                    height: 100,
                    backgroundColor: '#6ACDEA',
                    borderBottomWidth: 0,
                    shadowOpacity: 0,
                    elevation: 0
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 19,
                    marginTop: 20
                }
            }}
          />
     </Tab.Navigator>
  );
};


export default VideoStack;
